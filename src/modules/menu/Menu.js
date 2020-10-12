import Main from '../../assets/js/main';
import Dom from '../../assets/js/dom';

export default class Menu extends Main {
    constructor() {
        super(Main);
        this.menuDOM = document.querySelector('#menu');
        this.menu = {
            home: this.getHome,
            timer: this.getTimer,
            task: this.getTask,
            imc: this.getIMC,
            calculator: this.getCalculator,
            cpf: this.getCPF,
            password: this.getPassword,
            register: this.getRegister,
            bank: this.getBank
        }
    }
    setMenu() {
        const dom = new Dom();
        Object.keys(this.menu).forEach(element => {
            let navMenu = dom.createNav({ id: element });
            this.menuDOM.appendChild(navMenu);

            navMenu.addEventListener('click', () => {
                element !== 'home'
                    ? location.replace(`${this.urlPath}/${element}/`)
                    : location.replace(`${this.urlPath}/`);
            });
        });
        this.setPath();
    }
}
