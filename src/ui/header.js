import { formatDate } from '../utils/date.js';

export default function getTodaysDate() {
  return formatDate(new Date());
}
