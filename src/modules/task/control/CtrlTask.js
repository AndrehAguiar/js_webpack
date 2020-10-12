import Dom from '../../../assets/js/dom';
import Task from '../model/Task';

export default class CtrlTask extends Task {
    constructor() {
        super(Task);

        this.setTask = (task) => {

            this.list = document.querySelector('.lstTask');
            const dom = new Dom();
            let itemList = dom.createLI({ id: 'task', text: task });
            let brnDel = dom.createButton({ type: 'button', id: 'delete', class: 'delete', text: 'Delete' });

            brnDel.addEventListener('click', event => {
                event.preventDefault();
                this.buttonClicked(event);
            });

            itemList.appendChild(brnDel);
            this.list.appendChild(itemList);
        }
        this.setTasks = () => {
            this.list = document.querySelector('.lstTask');
            const itemsTask = this.list.querySelectorAll('li');
            const tasks = [];
            itemsTask.forEach(task => {
                let taskText = task.innerText;
                tasks.push(taskText.replace("Delete", '').trim());
            });

            this.saveTasks(tasks);
        }

        this.getTasks = () => {
            this.readTasks();
            if (!this.lstTasks) return;
            this.lstTasks.forEach(task => {
                this.setTask(task);
            });
        }

        this.cleanInput = (input) => {
            input.value = '';
            input.focus();
        }

    }
    buttonClicked(event) {

        const criarTarefa = event.path[1].children[1];
        const el = event.target;
        if (el.classList.contains('addTask')) {

            if (!criarTarefa.value) return criarTarefa.focus();
            this.setTask(criarTarefa.value);
            this.cleanInput(criarTarefa);
            this.setTasks();

        }

        if (el.classList.contains('delete')) {
            el.parentElement.remove();
            this.setTasks();
        }
    }

    keyPressed(event) {
        const criarTarefa = event.path[1].children[1];
        if (event.keyCode === 13 && criarTarefa.value) {
            this.setTask(criarTarefa.value);
            this.cleanInput(criarTarefa);
            this.setTasks();
        }
    }
}