import Dom from '../../../assets/js/dom';
import { setLogout } from '../control/ctrlAccess';

export default class LogoutForm {
    constructor() {

        this.dom = new Dom();

        this.subTitle = document.querySelector('#subTitle');
        this.subTitle.innerText = 'Logout first';

        this.btnLogout = this.dom.createButton({ type: 'button', text: 'Logout', id: 'btnLogout' });
        this.btnLogout.value = 'Logout';

        this.subTitle.insertAdjacentElement('afterend', this.btnLogout);

        this.btnLogout.addEventListener('click', event => {
            event.preventDefault();
            console.log(event);
            setLogout();
        });
    }
}