const translations = {
  pt: {
    'nav.getting-started': 'Primeiros passos',
    'nav.bases': 'Bases',
    'nav.examples': 'Exemplos',
    'nav.api': 'API',
    'search.placeholder': 'Buscar na documentação',
    'sidebar.contents': 'Conteúdo',
    'toc.intro': 'Introdução',
    'toc.getting-started': 'Primeiros passos',
    'toc.bases': 'Bases espectrais',
    'toc.examples': 'Exemplos',
    'toc.api': 'Referência da API',
    'hero.title': 'Métodos espectrais em Julia',
    'hero.lede':
      'SpectralLib.jl agrupa os métodos espectrais do repositório em uma biblioteca Julia única, com transformadas, matrizes de diferenciação e pesos de quadratura prontos para usar.',
    'hero.cta-primary': 'Comece com Julia',
    'hero.cta-secondary': 'Ver exemplos',
    'hero.badge-julia': '✔︎ 100% Julia',
    'hero.badge-orthogonal': '✔︎ Polinômios ortogonais',
    'hero.badge-grids': '✔︎ Malhas prontas para plotar',
    'start.title': 'Primeiros passos',
    'start.subtitle': 'Instale a biblioteca e rode seu primeiro operador.',
    'start.install': 'Instalação',
    'start.first': 'Primeiro passo',
    'bases.title': 'Bases espectrais',
    'bases.subtitle':
      'API consistente para polinômios ortogonais e séries trigonométricas.',
    'bases.chebyshev':
      'Transformada direta/inversa via FFT real, nós de Gauss/Lobatto/Radau e matrizes de diferenciação modais.',
    'bases.legendre':
      'Bases de Gauss, Lobatto e Radau, matrizes de integração e multiplicação e avaliação recursiva dos polinômios.',
    'bases.fourier':
      'Diferenciação espectral, interpolação trigonométrica e quadratura para funções periódicas.',
    'examples.title': 'Exemplos',
    'examples.subtitle': 'Exemplos extraídos diretamente de <code>examples/examples.jl</code>.',
    'examples.status-loading': 'Carregando exemplos…',
    'examples.status-ready': 'Clique em “Executar exemplo” para ver o código em ação.',
    'examples.status-error': 'Não foi possível carregar os exemplos gerados.',
    'examples.output-missing': 'Resultado não disponível',
    'examples.run': 'Executar exemplo',
    'examples.running': 'Executando…',
    'examples.copy': 'Copiar código',
    'examples.copied': 'Copiado!',
    'api.title': 'Referência da API',
    'api.subtitle': 'Principais funções expostas pela biblioteca.',
  },
  en: {
    'nav.getting-started': 'Getting started',
    'nav.bases': 'Bases',
    'nav.examples': 'Examples',
    'nav.api': 'API',
    'search.placeholder': 'Search docs',
    'sidebar.contents': 'Contents',
    'toc.intro': 'Introduction',
    'toc.getting-started': 'Getting started',
    'toc.bases': 'Spectral bases',
    'toc.examples': 'Examples',
    'toc.api': 'API Reference',
    'hero.title': 'Fast spectral methods in Julia',
    'hero.lede':
      'SpectralLib.jl bundles the spectral methods in this repo into a single Julia library with ready-to-use transforms, differentiation matrices, and quadrature weights.',
    'hero.cta-primary': 'Start with Julia',
    'hero.cta-secondary': 'View examples',
    'hero.badge-julia': '✔︎ Pure Julia',
    'hero.badge-orthogonal': '✔︎ Orthogonal polynomials',
    'hero.badge-grids': '✔︎ Plot-ready grids',
    'start.title': 'Getting started',
    'start.subtitle': 'Install the library and run your first operator.',
    'start.install': 'Installation',
    'start.first': 'First step',
    'bases.title': 'Spectral bases',
    'bases.subtitle': 'Consistent API for orthogonal polynomials and trigonometric series.',
    'bases.chebyshev':
      'Forward/inverse transforms via real FFT, Gauss/Lobatto/Radau nodes, and modal differentiation matrices.',
    'bases.legendre':
      'Gauss, Lobatto, and Radau bases, integration/multiplication matrices, and recursive evaluation of Legendre polynomials.',
    'bases.fourier':
      'Spectral differentiation, trigonometric interpolation, and quadrature for periodic functions.',
    'examples.title': 'Examples',
    'examples.subtitle': 'Examples pulled directly from <code>examples/examples.jl</code>.',
    'examples.status-loading': 'Loading examples…',
    'examples.status-ready': 'Click “Run example” to see the code in action.',
    'examples.status-error': 'Could not load the generated examples.',
    'examples.output-missing': 'Output not available',
    'examples.run': 'Run example',
    'examples.running': 'Running…',
    'examples.copy': 'Copy code',
    'examples.copied': 'Copied!',
    'api.title': 'API Reference',
    'api.subtitle': 'Key functions exposed by the library.',
  },
};

let currentLang = 'pt';

document.addEventListener('DOMContentLoaded', () => {
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');
  const langToggle = document.querySelector('.lang-toggle');

  function setTheme(light) {
    if (light) {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
    localStorage.setItem('spectral-theme', light ? 'light' : 'dark');
  }

  function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('spectral-lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    if (langToggle) {
      langToggle.textContent = lang === 'pt' ? 'English' : 'Português';
    }

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      const value = translations[lang]?.[key];
      if (!value) return;
      if (el instanceof HTMLInputElement) {
        el.placeholder = value;
      } else {
        const useHtml = value.includes('<');
        el[useHtml ? 'innerHTML' : 'textContent'] = value;
      }
    });

    document.querySelectorAll('[data-i18n-run]').forEach((btn) => {
      const key = btn.dataset.i18nRun;
      const value = translations[lang]?.[key];
      if (value) btn.textContent = value;
    });

    document.querySelectorAll('[data-i18n-copy]').forEach((btn) => {
      const key = btn.dataset.i18nCopy;
      const value = translations[lang]?.[key];
      if (value) btn.textContent = value;
    });

    document.querySelectorAll('[data-empty="true"]').forEach((el) => {
      el.textContent = translations[lang]['examples.output-missing'];
    });

    updateExamplesStatusText();
  }

  const storedTheme = localStorage.getItem('spectral-theme');
  if (storedTheme) {
    setTheme(storedTheme === 'light');
  } else if (prefersLight) {
    setTheme(true);
  }

  const storedLang = localStorage.getItem('spectral-lang');
  if (storedLang === 'en' || storedLang === 'pt') {
    currentLang = storedLang;
  }
  applyTranslations(currentLang);

  themeToggle?.addEventListener('click', () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    setTheme(!isLight);
  });

  langToggle?.addEventListener('click', () => {
    const nextLang = currentLang === 'pt' ? 'en' : 'pt';
    applyTranslations(nextLang);
  });

  hydrateExamples();
});

async function hydrateExamples() {
  const container = document.getElementById('examples-list');
  const status = document.getElementById('examples-status');

  if (!container || !status) return;

  if (!status.dataset.state) {
    status.dataset.state = 'loading';
    updateExamplesStatusText();
  }

  try {
    const inline = window.SPECTRAL_EXAMPLES;
    const examples = Array.isArray(inline)
      ? inline
      : await fetchExamples();

    status.dataset.state = 'ready';
    updateExamplesStatusText();

    examples.forEach((ex) => {
      const card = document.createElement('article');
      card.className = 'example-card';

      const header = document.createElement('div');
      header.className = 'example-header';
      header.innerHTML = `<div><h3>${ex.title}</h3><p class="muted">${ex.description}</p></div>`;

      const codeBlock = document.createElement('pre');
      codeBlock.innerHTML = `<code class="code-block">${ex.code.trim()}</code>`;

      const output = document.createElement('pre');
      output.className = 'output hidden';
      output.dataset.empty = ex.output ? 'false' : 'true';
      output.textContent = ex.output?.trim() || translations[currentLang]['examples.output-missing'];

      const actions = document.createElement('div');
      actions.className = 'example-actions';

      const runBtn = document.createElement('button');
      runBtn.className = 'btn small primary';
      runBtn.dataset.i18nRun = 'examples.run';
      runBtn.textContent = translations[currentLang]['examples.run'];
      runBtn.addEventListener('click', () => {
        runBtn.disabled = true;
        runBtn.textContent = translations[currentLang]['examples.running'];
        setTimeout(() => {
          output.textContent = ex.output?.trim() || 'Resultado não disponível';
          output.classList.remove('hidden');
          runBtn.disabled = false;
          runBtn.textContent = translations[currentLang]['examples.run'];
        }, 200);
      });

      const copyBtn = document.createElement('button');
      copyBtn.className = 'btn small ghost';
      copyBtn.dataset.i18nCopy = 'examples.copy';
      copyBtn.textContent = translations[currentLang]['examples.copy'];
      copyBtn.addEventListener('click', async () => {
        await navigator.clipboard.writeText(ex.code.trim());
        copyBtn.textContent = translations[currentLang]['examples.copied'];
        setTimeout(() => (copyBtn.textContent = translations[currentLang]['examples.copy']), 1200);
      });

      actions.append(runBtn, copyBtn);
      card.append(header, codeBlock, actions, output);
      container.appendChild(card);
    });
  } catch (err) {
    status.dataset.state = 'error';
    updateExamplesStatusText();
  }
}

async function fetchExamples() {
  const response = await fetch('assets/examples.json');
  if (!response.ok) {
    throw new Error('Erro ao buscar examples.json');
  }
  return response.json();
}

function updateExamplesStatusText() {
  const status = document.getElementById('examples-status');
  if (!status) return;

  const state = status.dataset.state || 'loading';
  const key =
    state === 'ready'
      ? 'examples.status-ready'
      : state === 'error'
        ? 'examples.status-error'
        : 'examples.status-loading';

  status.textContent = translations[currentLang][key];
}
