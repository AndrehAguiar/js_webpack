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

const path = window.location.pathname;

const urlPath = "/js_webpack/public"; // test
//const urlPath = "/public"; // dev

const head = document.querySelector('head');
const container = document.querySelector('.container');

const getHome = () => {
    head.appendChild(style);
    container.innerHTML = Home;
}

const getTask = () => {
    const clsForm = new TaskForm();
    head.appendChild(clsForm.style);
    container.appendChild(clsForm.dvTask);
    container.classList.add('task');
}

const getTimer = () => {
    const clsForm = new TimerForm();
    head.appendChild(clsForm.style);
    container.appendChild(clsForm.dvTimer);
    container.classList.add('timer');
}

const getIMC = () => {
    const clsForm = new ImcForm();
    head.appendChild(clsForm.style);
    container.appendChild(clsForm.dvTable);
    container.appendChild(clsForm.dvForm);
    container.classList.add('imc');
}
const getCalculator = () => {
    const clsForm = new CalcForm();
    head.appendChild(clsForm.style);
    container.appendChild(clsForm.dvGrid);
    container.classList.add('calculator');
}

const getCPF = () => {
    const clsForm = new CpfForm();
    container.appendChild(clsForm.form);
    container.classList.add('cpf');
}

const getPassword = () => {
    const clsForm = new PassForm();
    container.appendChild(clsForm.form);
    container.classList.add('password');
}
const getRegister = () => {
    const clsForm = new RegisterForm();
    container.appendChild(clsForm.form);
    container.classList.add('registerForm');
}

const getBank = () => {
    const clsForm = new BankForm();
    head.appendChild(clsForm.style);
    container.appendChild(clsForm.form);
    container.classList.add('bank');
    clsForm.form.insertAdjacentElement('afterend', clsForm.h2);
}

switch (path) {
    case `${urlPath}/home/`:
        getHome();
        break;
    case `${urlPath}/timer/`:
        getTimer();
        break;
    case `${urlPath}/task/`:
        getTask();
        break;
    case `${urlPath}/imc/`:
        getIMC();
        break;
    case `${urlPath}/calculator/`:
        getCalculator();
        break;
    case `${urlPath}/cpf/`:
        getCPF();
        break;
    case `${urlPath}/password/`:
        getPassword();
        break;
    case `${urlPath}/register/`:
        getRegister();
        break;
    case `${urlPath}/bank/`:
        getBank();
        break;
    default:
        getHome();
}
export {
    getCPF,
    getHome,
    getTimer,
    getPassword,
    getBank,
    getCalculator,
    getRegister,
    getIMC,
    getTask
};