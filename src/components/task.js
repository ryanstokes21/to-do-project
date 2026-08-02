import Task from '../models/task.js';
const taskEl = {
  title: document.getElementById('title'),
  description: document.getElementById('description'),
  dueDate: document.getElementById('due-date'),
  priority: document.getElementById('priority'),
};

export default function createTask() {
  const title = taskEl.title.value;
  const description = taskEl.description.value;
  const dueDate = taskEl.dueDate.value;
  const priority = taskEl.priority.value;

  const newTask = new Task(title, description, dueDate, priority);

  return newTask;
}
