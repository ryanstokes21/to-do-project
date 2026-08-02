import createTask from './task.js';

export default function renderTask(content) {
  const task = createTask();

  const taskCard = document.createElement('div');

  const taskTitle = document.createElement('h2');
  taskTitle.textContent = task.title;

  const taskDescription = document.createElement('p');
  taskDescription.textContent = task.description;

  const taskDue = document.createElement('p');
  taskDue.textContent = task.dueDate;

  const taskPriority = document.createElement('p');
  taskPriority.textContent = `Priority: ${task.priority}`;

  taskCard.append(taskTitle, taskDescription, taskDue, taskPriority);

  content.append(taskCard);
}
