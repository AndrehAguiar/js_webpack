import {
    getCPF, getHome, getPassword, getBank, getCalculator, getRegister
} from '../../assets/js/main';
import Dom from '../../assets/js/dom';

const urlPath = '/js_webpack/public';
//const urlPath = '/public';

const menuDOM = document.querySelector('#menu');
const dom = new Dom();
const menu = {
    home: getHome,
    calculator: getCalculator,
    cpf: getCPF,
    password: getPassword,
    register: getRegister,
    bank: getBank
}

const setMenu = () => {
    Object.keys(menu).forEach(element => {
        let navMenu = dom.createNav({ id: element });
        menuDOM.appendChild(navMenu);

        navMenu.addEventListener('click', function () {
            element !== 'home'
                ? location.replace(`${urlPath}/${element}/`)
                : location.replace(`${urlPath}/`);
        })
    });
}
export default setMenu;
