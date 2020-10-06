import CpfForm from '../../modules/cpf/view/vwCPF';
import PassForm from '../../modules/password/view/vwPassword';
import { Home } from '../../modules/home/Home';

const path = window.location.pathname;

const container = document.querySelector('.container');

const getHome = () => {
    container.innerHTML = Home;
}
const getCPF = () => {
    const clsForm = new CpfForm();
    container.appendChild(clsForm.form);
}
const getPassword = () => {
    const clsForm = new PassForm();
    container.appendChild(clsForm.form);

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
    default:
        getHome();
}
export { getCPF, getHome, getPassword };