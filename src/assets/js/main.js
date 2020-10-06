import GenerateCPF from '../../modules/cpf/GenerateCPF';
import PassForm from '../../modules/password/view/vwPassword';
import { Home } from '../../modules/home/Home';

const path = window.location.pathname;

const container = document.querySelector('.container');

const getHome = () => {
    container.innerHTML = Home;
}
const getCPF = () => {
    const generator = new GenerateCPF();
    container.innerText = generator.newCPF();
}
const getPassword = () => {
    const clsForm = new PassForm();
    container.appendChild(clsForm.form);
    const formPass = document.getElementById('formPass');

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