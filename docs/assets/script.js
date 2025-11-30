const translations = {
  pt: {
    'nav.overview': 'Documentação',
    'nav.getting-started': 'Primeiros passos',
    'nav.bases': 'Bases',
    'nav.examples': 'Exemplos',
    'nav.api': 'API',
    'nav.theory': 'Teoria',
    'search.placeholder': 'Buscar na documentação',
    'search.theory': 'Buscar teoria',
    'sidebar.contents': 'Conteúdo',
    'sidebar.theory': 'Trilha',
    'toc.intro': 'Introdução',
    'toc.getting-started': 'Primeiros passos',
    'toc.bases': 'Bases espectrais',
    'toc.examples': 'Exemplos',
    'toc.api': 'Referência da API',
    'toc.fundamentals': 'Fundamentos',
    'toc.generic': 'Operadores genéricos',
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
    'theory.eyebrow': 'Fundamentos',
    'theory.title': 'Intuição por trás dos métodos espectrais',
    'theory.lede':
      'Expansões em bases ortogonais transformam derivadas e integrais em operações matriciais simples. A SpectralLib.jl oferece operadores otimizados que seguem a teoria clássica: projeção, quadratura e diferenciação em espaços funcionais.',
    'theory.tag-convergence': 'Convergência exponencial',
    'theory.quote':
      '"A precisão vem do casamento entre ortogonalidade e quadraturas exatas: a transformada converte função em coeficientes, a quadratura captura integrais sem perdas."',
    'theory.gif-label': 'GIF espectral',
    'theory.gif-caption': 'Ondas deslizando representam como os modos base se combinam.',
    'cheb.summary': 'Polinômios Tₙ(x) formam uma base ortogonal em [-1,1] com peso (1-x²)^(-1/2).',
    'cheb.expansion': 'Expansão modal',
    'cheb.fft': 'Transformada usa FFT real: complexidade O(N log N).',
    'cheb.roots': 'Nós de Gauss/Lobatto minimizam o erro de interpolação.',
    'cheb.diff': 'Matrizes de diferenciação convergem rapidamente para funções suaves.',
    'cheb.fig': 'Modos alternados controlam oscilações próximas aos extremos.',
    'cheb.aliased': 'Anti-aliasing',
    'cheb.aliased-caption': 'Filtrar modos altos evita Gibbs ao reconstruir sinais não suaves.',
    'leg.summary': 'Polinômios Pₙ(x) são ortogonais em [-1,1] com peso 1, fornecendo quadraturas exatas para integrais polinomiais.',
    'leg.recursion': 'Recorrência',
    'leg.mass': 'Bases de Gauss/Lobatto geram matrizes de massa diagonais.',
    'leg.integration': 'Integração espectral usa integrais exatas dos polinômios.',
    'leg.boundary': 'Lobatto preserva informações nas fronteiras, ideal para condições de contorno.',
    'leg.fig': 'Distribuição concentra pontos nas extremidades para capturar camadas de fronteira.',
    'leg.conservation': 'Fluxos',
    'leg.conservation-caption': 'Galerkin de Legendre mantém conservação em formulações fracas.',
    'four.summary': 'Séries complexas e reais representam funções periódicas; derivar é multiplicar coeficientes por i k.',
    'four.series': 'Série periódica',
    'four.fft': 'FFT reduz o custo de projeção para O(N log N).',
    'four.aliasing': 'Truncamento atua como filtro de banda: controla aliasing.',
    'four.quad': 'Quadraturas trapezoidais são espectralmente exatas para funções suaves e periódicas.',
    'four.fig': 'Fases conjugadas criam formas reais a partir de coeficientes complexos.',
    'four.spectrum': 'Domínio frequencial',
    'four.spectrum-caption': 'Visualize energia migrando entre frequências após derivar ou filtrar.',
    'generic.title': 'Operadores genéricos',
    'generic.summary': 'Diferenciação, integração e multiplicação espectral unificam Chebyshev, Legendre e Fourier.',
    'generic.operators': 'Operadores',
    'generic.stability': 'Pré-condicionamento modal reduz números de condição.',
    'generic.integration': 'Operadores de integração acumulam coeficientes com pesos 1/k.',
    'generic.maps': 'Mapeamentos afins reposicionam nós para domínios [a,b].',
    'generic.fig': 'Transformações lineares empurram os nós de referência para qualquer intervalo.',
    'generic.blend': 'Híbrido',
    'generic.blend-caption': 'Combinar bases permite domínio periódico em x e polinomial em y.',
  },
  en: {
    'nav.overview': 'Docs',
    'nav.getting-started': 'Getting started',
    'nav.bases': 'Bases',
    'nav.examples': 'Examples',
    'nav.api': 'API',
    'nav.theory': 'Theory',
    'search.placeholder': 'Search docs',
    'search.theory': 'Search theory',
    'sidebar.contents': 'Contents',
    'sidebar.theory': 'Trail',
    'toc.intro': 'Introduction',
    'toc.getting-started': 'Getting started',
    'toc.bases': 'Spectral bases',
    'toc.examples': 'Examples',
    'toc.api': 'API Reference',
    'toc.fundamentals': 'Fundamentals',
    'toc.generic': 'Generic operators',
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
    'theory.eyebrow': 'Foundations',
    'theory.title': 'Intuition behind spectral methods',
    'theory.lede':
      'Expansions in orthogonal bases turn derivatives and integrals into simple matrix operations. SpectralLib.jl provides optimized operators that follow the classical theory: projection, quadrature, and differentiation in function spaces.',
    'theory.tag-convergence': 'Exponential convergence',
    'theory.quote':
      '"Accuracy comes from pairing orthogonality with exact quadrature: the transform turns functions into coefficients, quadrature captures integrals losslessly."',
    'theory.gif-label': 'Spectral GIF',
    'theory.gif-caption': 'Sliding waves show how base modes combine.',
    'cheb.summary': 'Chebyshev polynomials Tₙ(x) form an orthogonal basis on [-1,1] with weight (1-x²)^(-1/2).',
    'cheb.expansion': 'Modal expansion',
    'cheb.fft': 'Transform uses real FFT: O(N log N).',
    'cheb.roots': 'Gauss/Lobatto nodes minimize interpolation error.',
    'cheb.diff': 'Differentiation matrices converge rapidly for smooth signals.',
    'cheb.fig': 'Alternating modes control oscillations near the boundaries.',
    'cheb.aliased': 'Anti-aliasing',
    'cheb.aliased-caption': 'Filtering high modes avoids Gibbs when reconstructing nonsmooth signals.',
    'leg.summary': 'Legendre polynomials Pₙ(x) are orthogonal on [-1,1] with weight 1, yielding exact quadrature for polynomials.',
    'leg.recursion': 'Recurrence',
    'leg.mass': 'Gauss/Lobatto bases yield diagonal mass matrices.',
    'leg.integration': 'Spectral integration uses exact integrals of the polynomials.',
    'leg.boundary': 'Lobatto retains boundary information—ideal for boundary conditions.',
    'leg.fig': 'Distribution clusters points near the ends to capture boundary layers.',
    'leg.conservation': 'Fluxes',
    'leg.conservation-caption': 'Legendre Galerkin preserves conservation in weak forms.',
    'four.summary': 'Real and complex series represent periodic functions; differentiation multiplies coefficients by i k.',
    'four.series': 'Periodic series',
    'four.fft': 'FFT reduces projection cost to O(N log N).',
    'four.aliasing': 'Truncation acts as a band filter to control aliasing.',
    'four.quad': 'Trapezoidal quadrature is spectrally exact for smooth periodic signals.',
    'four.fig': 'Conjugate phases build real shapes from complex coefficients.',
    'four.spectrum': 'Frequency domain',
    'four.spectrum-caption': 'See energy move across frequencies after differentiating or filtering.',
    'generic.title': 'Generic operators',
    'generic.summary': 'Spectral differentiation, integration, and multiplication unify Chebyshev, Legendre, and Fourier.',
    'generic.operators': 'Operators',
    'generic.stability': 'Modal preconditioning lowers condition numbers.',
    'generic.integration': 'Integration operators accumulate coefficients with 1/k weights.',
    'generic.maps': 'Affine maps reposition nodes to domains [a,b].',
    'generic.fig': 'Linear maps push reference nodes to any interval.',
    'generic.blend': 'Hybrid',
    'generic.blend-caption': 'Blend bases to pair periodic x with polynomial y.',
  },
};

let currentLang = 'pt';
let currentTab = 'docs';

document.addEventListener('DOMContentLoaded', () => {
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');
  const langToggle = document.querySelector('.lang-toggle');
  const tabPanels = document.querySelectorAll('[data-tab-panel]');
  const tabTargets = document.querySelectorAll('[data-tab-target]');

  function activateTab(tab) {
    currentTab = tab;
    localStorage.setItem('spectral-tab', tab);
    document.documentElement.dataset.activeTab = tab;

    tabPanels.forEach((panel) => {
      panel.classList.toggle('hidden', panel.dataset.tabPanel !== tab);
    });

    tabTargets.forEach((target) => {
      const isActive = target.dataset.tabTarget === tab;
      if (target.classList.contains('tab-btn') || target.closest('.topnav')) {
        target.classList.toggle('active', isActive);
      }
      if (target.getAttribute('role') === 'tab') {
        target.setAttribute('aria-selected', isActive ? 'true' : 'false');
      }
    });
  }

  function handleTabNavigation(event, tab) {
    if (!tab) return;
    const hash = event.currentTarget.getAttribute('href');
    event.preventDefault();
    activateTab(tab);

    if (hash && hash.startsWith('#')) {
      requestAnimationFrame(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.replaceState(null, '', hash);
        }
      });
    }
  }

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
  const storedTab = localStorage.getItem('spectral-tab');
  if (storedTab === 'theory' || storedTab === 'docs') {
    currentTab = storedTab;
  }

  applyTranslations(currentLang);
  activateTab(currentTab);

  themeToggle?.addEventListener('click', () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    setTheme(!isLight);
  });

  langToggle?.addEventListener('click', () => {
    const nextLang = currentLang === 'pt' ? 'en' : 'pt';
    applyTranslations(nextLang);
  });

  tabTargets.forEach((link) => {
    link.addEventListener('click', (event) => {
      handleTabNavigation(event, link.dataset.tabTarget);
    });
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
