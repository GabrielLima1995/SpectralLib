document.addEventListener('DOMContentLoaded', () => {
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');

  function setTheme(light) {
    if (light) {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
    localStorage.setItem('spectral-theme', light ? 'light' : 'dark');
  }

  const stored = localStorage.getItem('spectral-theme');
  if (stored) {
    setTheme(stored === 'light');
  } else if (prefersLight) {
    setTheme(true);
  }

  toggle?.addEventListener('click', () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    setTheme(!isLight);
  });

  hydrateExamples();
});

async function hydrateExamples() {
  const container = document.getElementById('examples-list');
  const status = document.getElementById('examples-status');

  if (!container || !status) return;

  try {
    const response = await fetch('assets/examples.json');
    const examples = await response.json();
    status.textContent = 'Clique em “Run example” para ver o código em ação.';

    examples.forEach((ex) => {
      const card = document.createElement('article');
      card.className = 'example-card';

      const header = document.createElement('div');
      header.className = 'example-header';
      header.innerHTML = `<div><h3>${ex.title}</h3><p class="muted">${ex.description}</p></div>`;

      const codeBlock = document.createElement('pre');
      codeBlock.innerHTML = `<code class="code-block">${ex.code.trim()}</code>`;

      const output = document.createElement('pre');
      output.className = 'output';
      output.textContent = 'Run para ver a saída';

      const actions = document.createElement('div');
      actions.className = 'example-actions';

      const runBtn = document.createElement('button');
      runBtn.className = 'btn small primary';
      runBtn.textContent = 'Run example';
      runBtn.addEventListener('click', () => {
        runBtn.disabled = true;
        runBtn.textContent = 'Running…';
        setTimeout(() => {
          output.textContent = ex.output;
          runBtn.disabled = false;
          runBtn.textContent = 'Run example';
        }, 200);
      });

      const copyBtn = document.createElement('button');
      copyBtn.className = 'btn small ghost';
      copyBtn.textContent = 'Copy code';
      copyBtn.addEventListener('click', async () => {
        await navigator.clipboard.writeText(ex.code.trim());
        copyBtn.textContent = 'Copied!';
        setTimeout(() => (copyBtn.textContent = 'Copy code'), 1200);
      });

      actions.append(runBtn, copyBtn);
      card.append(header, codeBlock, actions, output);
      container.appendChild(card);
    });
  } catch (err) {
    status.textContent = 'Não foi possível carregar os exemplos gerados.';
  }
}
