import './styles.css';
import getTodaysDate from './ui/header.js';
import loadPage from './router/router.js';

const nav = document.querySelector('.sidebar-nav');

const todaysDate = document.getElementById('todays-date');

todaysDate.textContent = getTodaysDate();

nav.addEventListener('click', (e) => {
  const button = e.target.closest('.nav-button');

  if (!button) return;

  const value = button.dataset.value;

  if (value) {
    loadPage(value);
    return;
  }
});
