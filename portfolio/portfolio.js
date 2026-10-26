const themeToggle = document.getElementById('theme-toggle');
const savedPortfolioTheme = localStorage.getItem('portfolio-theme');
const yearLabel = document.getElementById('year');

function applyPortfolioTheme(isDark) {
  document.body.classList.toggle('dark', isDark);
  themeToggle.textContent = isDark ? 'Light mode' : 'Dark mode';
  themeToggle.setAttribute('aria-pressed', String(isDark));
}

applyPortfolioTheme(savedPortfolioTheme === 'dark');
themeToggle.addEventListener('click', () => {
  const nextIsDark = !document.body.classList.contains('dark');
  applyPortfolioTheme(nextIsDark);
  localStorage.setItem('portfolio-theme', nextIsDark ? 'dark' : 'light');
});

yearLabel.textContent = new Date().getFullYear();
