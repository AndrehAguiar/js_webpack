import Dom from '../../../assets/js/dom';
import CtrlAccount from '../control/CtrlAccount';
import Resume from '../view/vwResume.js';

export default class accountForm extends Dom {
    constructor() {

        super(Dom);

        this.subTitle = document.querySelector('#subTitle');
        this.subTitle.innerText = 'Create new account';

        this.formAccount = this.createForm({ id: 'formAccount', action: '', method: 'dialog' });

        this.inpName = this.createInput({ type: 'text', id: 'inpName' });
        this.inpName.name = 'nameAccount';
        this.inpName.placeholder = 'Type your name';
        this.inpName.required = true;

        this.inpAccount = this.createInput({ type: 'text', id: 'inpID' });
        this.inpAccount.name = 'numID';
        this.inpAccount.placeholder = 'Type your ID number';
        this.inpAccount.required = true;

        this.bntSubmit = this.createButton({ type: 'submit', text: 'Create', id: 'btnAccount' });
        this.bntSubmit.value = 'Create';

        this.formAccount.appendChild(this.inpName);
        this.formAccount.appendChild(this.inpAccount);
        this.formAccount.appendChild(this.bntSubmit);

        this.subTitle.insertAdjacentElement('afterend', this.formAccount);

        this.formAccount.addEventListener('submit', event => {
            event.preventDefault();
            this.ctrlAccount = new CtrlAccount();
            this.ctrlAccount.setAccount(event);
            new Resume()
        });
    }
}