import { getCPF, getHome, getPassword } from '../../assets/js/main';
import { createNav } from '../../assets/js/dom';

const menuDOM = document.querySelector('#menu');

const menu = {
    home: getHome,
    cpf: getCPF,
    password: getPassword
}

const setMenu = () => {
    Object.keys(menu).forEach(element => {
        let navMenu = createNav({ id: element });
        menuDOM.appendChild(navMenu);

        navMenu.addEventListener('click', function () {
            element !== 'home'
                ? location.replace(`/public/${element}/`)
                : location.replace(`/public/`);
        })
    });
}
export default setMenu;