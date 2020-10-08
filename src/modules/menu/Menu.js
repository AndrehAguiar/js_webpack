import { getCPF, getHome, getPassword, getBank, getCalculator } from '../../assets/js/main';
import Dom from '../../assets/js/dom';

const menuDOM = document.querySelector('#menu');
const dom = new Dom();
const menu = {
    home: getHome,
    calculator: getCalculator,
    cpf: getCPF,
    password: getPassword,
    bank: getBank
}

const setMenu = () => {
    Object.keys(menu).forEach(element => {
        let navMenu = dom.createNav({ id: element });
        menuDOM.appendChild(navMenu);

        navMenu.addEventListener('click', function () {
            element !== 'home'
                ? location.replace(`/public/${element}/`)
                : location.replace(`/public/`);
        })
    });
}
export default setMenu;