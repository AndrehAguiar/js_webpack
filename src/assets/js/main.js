import CpfForm from '../../modules/cpf/view/vwCPF';
import PassForm from '../../modules/password/view/vwPassword';
import BankForm from '../../modules/bank/view/vwBank';
import { Home } from '../../modules/home/Home';

const path = window.location.pathname;

const container = document.querySelector('.container');

const getHome = () => {
    container.innerHTML = Home;
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

const getBank = () => {
    const clsForm = new BankForm();
    container.appendChild(clsForm.form);
    container.classList.add('bank');
    clsForm.form.insertAdjacentElement('afterend', clsForm.h2);
}

switch (path) {
    case '/public/home/':
        getHome();
        break;
    case '/public/cpf/':
        getCPF();
        break;
    case '/public/password/':
        getPassword();
        break;
    case '/public/bank/':
        getBank();
        break;
    default:
        getHome();
}
export { getCPF, getHome, getPassword, getBank };