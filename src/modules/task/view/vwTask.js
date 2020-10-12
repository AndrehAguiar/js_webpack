import Dom from '../../../assets/js/dom';
import Style from '../assets/style';
import CtrlTask from '../control/CtrlTask';

export default class TaskForm {
    constructor() {

        const ctrlTask = new CtrlTask();
        const dom = new Dom()
        const css = new Style()
        this.style = dom.createStyle({ text: css.style });

        this.dvTask = dom.createDiv({ id: 'dvTask', class: 'dvTask', text: '' });
        const title = dom.createH1({ text: 'Task list' });
        const inpTask = dom.createInput({ id: 'inpTask', type: 'text', class: 'criarTarefa' });
        const list = dom.createOL({ id: 'lstTask', class: 'lstTask' });
        const btnAdd = dom.createButton({ id: 'btnTask', type: 'button', class: 'addTask', text: 'Add Task' });

        this.dvTask.appendChild(title);
        this.dvTask.appendChild(inpTask);
        this.dvTask.appendChild(btnAdd);
        this.dvTask.appendChild(list);

        btnAdd.addEventListener('click', event => {
            event.preventDefault();
            ctrlTask.buttonClicked(event);
        });

        inpTask.addEventListener('keypress', event => {
            ctrlTask.keyPressed(event);
        });

        document.addEventListener('DOMContentLoaded', event => {
            ctrlTask.getTasks();
        });
    }

}