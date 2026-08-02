import './styles.css';
import getTodaysDate from './components/header.js';
import { createGreeting } from './components/dashboard.js';
import renderTask from './components/inbox.js';
import loadPage from './router/router.js';

const nav = document.querySelector('.sidebar-nav');
const openDialog = document.getElementById('open-task-dialog');
const dialog = document.getElementById('task-dialog');
const createTaskBtn = document.getElementById('create-task-btn');
const closeTaskBtn = document.getElementById('close-task-btn');
const todaysDate = document.getElementById('todays-date');
const inboxTaskContainer = document.getElementById('inbox-task-container');
todaysDate.textContent = getTodaysDate();
const greeting = document.getElementById('greeting');
greeting.textContent = createGreeting();

loadPage('dashboard');
nav.addEventListener('click', (e) => {
  const button = e.target.closest('.nav-button');

  if (!button) return;

  loadPage(button.dataset.value);
});

openDialog.addEventListener('click', () => {
  dialog.showModal();
});

closeTaskBtn.addEventListener('click', (e) => {
  dialog.close();
});

createTaskBtn.addEventListener('click', () => {
  renderTask(inboxTaskContainer);
  dialog.close();
});
