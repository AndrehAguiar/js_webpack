import Dom from '../../../assets/js/dom';
import setOption from '../control/ctrlBank';

export default class BankForm {
    constructor() {

        this.dom = new Dom();

        this.h1 = this.dom.createH1({ text: 'Bank' });
        this.h2 = this.dom.createH2({ text: 'Select an option' });
        this.h2.id = 'subTitle';

        this.form = this.dom.createForm({ id: 'option', method: 'dialog', action: '' });

        this.labelAcc = this.dom.createLabel({ id: 'accAccount', text: 'Access Account', for: 'accAccount' });
        this.accAccount = this.dom.createInput({ type: 'radio', id: 'accAccount' });
        this.accAccount.value = 'access';
        this.accAccount.name = 'optAccount';

        this.labelNew = this.dom.createLabel({ id: 'newAccount', text: 'Create Account', for: 'newAccount' });
        this.newAccount = this.dom.createInput({ type: 'radio', id: 'newAccount' });
        this.newAccount.value = 'account';
        this.newAccount.name = 'optAccount';

        this.dvContent = this.dom.createDiv({ id: 'barOption', text: '' });

        this.form.appendChild(this.h1);
        this.form.appendChild(this.dvContent);
        this.dvContent.appendChild(this.labelAcc);
        this.labelAcc.appendChild(this.accAccount);
        this.dvContent.appendChild(this.labelNew);
        this.labelNew.appendChild(this.newAccount);

        this.form.addEventListener('click', e => {
            e.preventDefault();
            setOption(e);
        })
    }
};