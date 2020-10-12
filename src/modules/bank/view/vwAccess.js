import Dom from '../../../assets/js/dom';
import CtrlAccess from '../control/CtrlAccess';
import Resume from '../view/vwResume.js';

export default class AccessForm {
    constructor() {

        const dom = new Dom();
        const ctrlAccess = new CtrlAccess();

        const subTitle = document.querySelector('#subTitle');
        subTitle.innerText = 'Access account';

        this.formAccess = dom.createForm({ id: 'formAccess', method: 'dialog', action: '' });
        const inpName = dom.createInput({ type: 'text', id: 'inpName' });
        inpName.name = 'nameAccount';
        inpName.placeholder = 'Type your name';
        inpName.required = true;

        const inpAccount = dom.createInput({ type: 'text', id: 'inpAccount' });
        inpAccount.name = 'numAccount';
        inpAccount.placeholder = 'Enter the account number'
        inpAccount.required = true;

        const bntSubmit = dom.createButton({ type: 'submit', id: 'btnAccess', text: 'Access' });
        bntSubmit.value = 'Access';

        this.formAccess.appendChild(inpName);
        this.formAccess.appendChild(inpAccount);
        this.formAccess.appendChild(bntSubmit);

        subTitle.insertAdjacentElement('afterend', this.formAccess);

        this.formAccess.addEventListener('submit', event => {
            event.preventDefault();
            const chkAccess = ctrlAccess.setAccess(event);
            if (chkAccess) new Resume();
        });
    }
}