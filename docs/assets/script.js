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
});
