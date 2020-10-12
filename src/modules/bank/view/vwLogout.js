import Dom from '../../../assets/js/dom';
import CtrlAccess from '../control/CtrlAccess';

export default class LogoutForm {
    constructor() {

        const dom = new Dom();
        const ctrlAccess = new CtrlAccess();

        const subTitle = document.querySelector('#subTitle');
        subTitle.innerText = 'Logout first';

        const btnLogout = dom.createButton({ type: 'button', text: 'Logout', id: 'btnLogout' });
        btnLogout.value = 'Logout';

        subTitle.insertAdjacentElement('afterend', btnLogout);

        btnLogout.addEventListener('click', event => {
            event.preventDefault();
            ctrlAccess.setLogout();
        });
    }
}