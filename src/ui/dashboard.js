function createGreeting() {
  const currentHour = new Date().getHours();
  let message;

  if (currentHour < 12) {
    message = 'Good morning!';
  } else if (currentHour < 18) {
    message = 'Good afternoon!';
  } else {
    message = 'Good evening';
  }

  return message;
}

export default function renderDashboard(content) {
  const greeting = document.createElement('p');
  greeting.classList.add('dashboard-greeting');
  createGreeting.textContent = createGreeting();

  console.log('dashboard tab');
}
