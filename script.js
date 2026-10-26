// Theme switch: save the visitor's choice so it is remembered on the next visit.
const themeButton = document.getElementById('theme');
const savedTheme = localStorage.getItem('webdev-theme');

function setTheme(isDark) {
  document.body.classList.toggle('dark', isDark);
  themeButton.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  themeButton.setAttribute('aria-pressed', String(isDark));
}

// Default to light mode unless the visitor previously chose dark mode.
setTheme(savedTheme === 'dark');

themeButton.addEventListener('click', () => {
  const isDark = !document.body.classList.contains('dark');
  setTheme(isDark);
  localStorage.setItem('webdev-theme', isDark ? 'dark' : 'light');
});
