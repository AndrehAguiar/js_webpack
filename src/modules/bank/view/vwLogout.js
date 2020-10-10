import Dom from '../../../assets/js/dom';
import CtrlAccess from '../control/CtrlAccess';

export default class LogoutForm extends Dom {
    constructor() {

        super(Dom);

        this.subTitle = document.querySelector('#subTitle');
        this.subTitle.innerText = 'Logout first';

        this.btnLogout = this.createButton({ type: 'button', text: 'Logout', id: 'btnLogout' });
        this.btnLogout.value = 'Logout';

        this.subTitle.insertAdjacentElement('afterend', this.btnLogout);

        this.btnLogout.addEventListener('click', event => {
            event.preventDefault();
            this.ctrlAccess = new CtrlAccess();
            this.ctrlAccess.setLogout();
        });
    }
}