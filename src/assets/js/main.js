import 'regenerator-runtime/runtime';
import CalcForm from '../../modules/calculator/view/vwCalculator';
import TimerForm from '../../modules/timer/view/vwTimer';
import TaskForm from '../../modules/task/view/vwTask';
import ImcForm from '../../modules/imc/view/vwIMC';
import CpfForm from '../../modules/cpf/view/vwCPF';
import PassForm from '../../modules/password/view/vwPassword';
import RegisterForm from '../../modules/register/view/vwForm';
import BankForm from '../../modules/bank/view/vwBank';
import { Home, style } from '../../modules/home/Home';

export default class Main {
    constructor() {
        this.path = window.location.pathname;
        this.urlPath = "/js_webpack/public"; // test
        //this.urlPath = "/public"; // dev
        this.head = document.querySelector('head');
        this.container = document.querySelector('.container');
        this.getHome = () => {
            this.head.appendChild(style);
            this.container.innerHTML = Home;
        }

        this.getTask = () => {
            const clsForm = new TaskForm();
            this.head.appendChild(clsForm.style);
            this.container.appendChild(clsForm.dvTask);
            this.container.classList.add('task');
        }

        this.getTimer = () => {
            const clsForm = new TimerForm();
            this.head.appendChild(clsForm.style);
            this.container.appendChild(clsForm.dvTimer);
            this.container.classList.add('timer');
        }

        this.getIMC = () => {
            const clsForm = new ImcForm();
            this.head.appendChild(clsForm.style);
            this.container.appendChild(clsForm.dvTable);
            this.container.appendChild(clsForm.dvForm);
            this.container.classList.add('imc');
        }
        this.getCalculator = () => {
            const clsForm = new CalcForm();
            this.head.appendChild(clsForm.style);
            this.container.appendChild(clsForm.dvGrid);
            this.container.classList.add('calculator');
        }

        this.getCPF = () => {
            const clsForm = new CpfForm();
            this.container.appendChild(clsForm.form);
            this.container.classList.add('cpf');
        }

        this.getPassword = () => {
            const clsForm = new PassForm();
            this.container.appendChild(clsForm.form);
            this.container.classList.add('password');
        }
        this.getRegister = () => {
            const clsForm = new RegisterForm();
            this.container.appendChild(clsForm.form);
            this.container.classList.add('registerForm');
        }

        this.getBank = () => {
            const clsForm = new BankForm();
            this.head.appendChild(clsForm.style);
            this.container.appendChild(clsForm.form);
            this.container.classList.add('bank');
            clsForm.form.insertAdjacentElement('afterend', clsForm.h2);
        }
    }
    setPath() {
        switch (this.path) {
            case `${this.urlPath}/home/`:
                this.getHome();
                break;
            case `${this.urlPath}/timer/`:
                this.getTimer();
                break;
            case `${this.urlPath}/task/`:
                this.getTask();
                break;
            case `${this.urlPath}/imc/`:
                this.getIMC();
                break;
            case `${this.urlPath}/calculator/`:
                this.getCalculator();
                break;
            case `${this.urlPath}/cpf/`:
                this.getCPF();
                break;
            case `${this.urlPath}/password/`:
                this.getPassword();
                break;
            case `${this.urlPath}/register/`:
                this.getRegister();
                break;
            case `${this.urlPath}/bank/`:
                this.getBank();
                break;
            default:
                this.getHome();
        }
    }
}