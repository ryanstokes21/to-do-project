import renderCompleted from '../ui/completedTab.js';
import renderDashboard from '../ui/dashboard.js';
import renderToday from '../ui/todayTab.js';
import renderUpcoming from '../ui/upcomingTab.js';

export default function loadPage(page) {
  const content = document.getElementById('content');

  switch (page) {
    case 'dashboard':
      renderDashboard(content);
      break;

    case 'today':
      renderToday(content);
      break;

    case 'upcoming':
      renderUpcoming(content);
      break;

    case 'completed':
      renderCompleted(content);
      break;

    default:
      OffscreenCanvasRenderingContext2DDashboard(content);
  }
}
