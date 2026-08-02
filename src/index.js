import './styles.css';
import getTodaysDate from './ui/header.js';
const todaysDate = document.getElementById('todays-date');

todaysDate.textContent = getTodaysDate();
