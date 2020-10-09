import Dom from '../../../assets/js/dom';
import { setAccess } from '../control/ctrlAccess';
import Resume from '../view/vwResume.js';

export default class AccessForm extends Dom {
    constructor() {

        super(Dom);

        this.subTitle = document.querySelector('#subTitle');
        this.subTitle.innerText = 'Access account';

        this.formAccess = this.createForm({ id: 'formAccess', method: 'dialog', action: '' });
        this.inpName = this.createInput({ type: 'text', id: 'inpName' });
        this.inpName.name = 'nameAccount';
        this.inpName.placeholder = 'Type your name';
        this.inpName.required = true;

        this.inpAccount = this.createInput({ type: 'text', id: 'inpAccount' });
        this.inpAccount.name = 'numAccount';
        this.inpAccount.placeholder = 'Enter the account number'
        this.inpAccount.required = true;

        this.bntSubmit = this.createButton({ type: 'submit', id: 'btnAccess', text: 'Access' });
        this.bntSubmit.value = 'Access';

        this.formAccess.appendChild(this.inpName);
        this.formAccess.appendChild(this.inpAccount);
        this.formAccess.appendChild(this.bntSubmit);

        this.subTitle.insertAdjacentElement('afterend', this.formAccess);

        this.formAccess.addEventListener('submit', event => {
            event.preventDefault();
            setAccess(event);
            new Resume();
        });
    }
}