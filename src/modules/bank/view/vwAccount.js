import Dom from '../../../assets/js/dom';
import CtrlAccount from '../control/CtrlAccount';
import Resume from '../view/vwResume.js';

export default class accountForm {
    constructor() {

        const dom = new Dom();
        const ctrlAccount = new CtrlAccount();

        const subTitle = document.querySelector('#subTitle');
        subTitle.innerText = 'Create new account';

        this.formAccount = dom.createForm({ id: 'formAccount', action: '', method: 'dialog' });

        const inpName = dom.createInput({ type: 'text', id: 'inpName' });
        inpName.name = 'nameAccount';
        inpName.placeholder = 'Type your name';
        inpName.required = true;

        const inpAccount = dom.createInput({ type: 'text', id: 'inpID' });
        inpAccount.name = 'numID';
        inpAccount.placeholder = 'Type your ID number';
        inpAccount.required = true;

        const bntSubmit = dom.createButton({ type: 'submit', text: 'Create', id: 'btnAccount' });
        bntSubmit.value = 'Create';

        this.formAccount.appendChild(inpName);
        this.formAccount.appendChild(inpAccount);
        this.formAccount.appendChild(bntSubmit);

        subTitle.insertAdjacentElement('afterend', this.formAccount);

        this.formAccount.addEventListener('submit', event => {
            event.preventDefault();
            ctrlAccount.setAccount(event);
            new Resume()
        });
    }
}