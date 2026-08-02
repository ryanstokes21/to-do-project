export default class Task {
  constructor(title, dueDate, priority) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }
}
