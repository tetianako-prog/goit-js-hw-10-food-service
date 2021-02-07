const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const theme = localStorage.getItem('theme');
const switchToggleRef = document.querySelector('#theme-switch-toggle');

openFirstTime();

switchToggleRef.addEventListener('change', themeToggle);

function openFirstTime() {
  if (theme === 'light-theme' || theme === null) {
    document.body.classList.add('light-theme');
    switchToggleRef.checked = false;
  } else {
    document.body.classList.add('dark-theme');
    switchToggleRef.checked = true;
  }
}

function themeToggle() {
  if (document.body.classList.contains('light-theme')) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
