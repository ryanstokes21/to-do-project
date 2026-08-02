export default class Projects {
  constructor(name) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.tasks = [];
  }
}
