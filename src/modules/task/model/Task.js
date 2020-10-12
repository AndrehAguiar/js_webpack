export default class Task {
    constructor() {

        this.saveTasks = (tasks) => {

            let strTasks = JSON.stringify(tasks);
            localStorage.setItem('Tasks', strTasks);
        }

        this.readTasks = () => {
            const tasks = localStorage.getItem('Tasks');
            this.lstTasks = JSON.parse(tasks);

        }
    }
}