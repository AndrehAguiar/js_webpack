import Dom from '../../../assets/js/dom';
import Style from '../assets/style';
import CtrlBank from '../control/CtrlBank';

export default class BankForm {
    constructor() {

        const dom = new Dom();
        const css = new Style();
        const ctrlBank = new CtrlBank();

        this.style = dom.createStyle({ text: css.style });

        this.form = dom.createForm({ id: 'option', method: 'dialog', action: '' });

        const h1 = dom.createH1({ text: 'Bank' });
        this.h2 = dom.createH2({ text: 'Select an option' });
        this.h2.id = 'subTitle';


        const labelAcc = dom.createLabel({ id: 'accAccount', text: 'Access Account', for: 'accAccount' });
        const accAccount = dom.createInput({ type: 'radio', id: 'accAccount' });
        accAccount.value = 'access';
        accAccount.name = 'optAccount';

        const labelNew = dom.createLabel({ id: 'newAccount', text: 'Create Account', for: 'newAccount' });
        const newAccount = dom.createInput({ type: 'radio', id: 'newAccount' });
        newAccount.value = 'account';
        newAccount.name = 'optAccount';

        const dvContent = dom.createDiv({ id: 'barOption', text: '' });

        this.form.appendChild(h1);
        this.form.appendChild(dvContent);
        dvContent.appendChild(labelAcc);
        labelAcc.appendChild(accAccount);
        dvContent.appendChild(labelNew);
        labelNew.appendChild(newAccount);

        this.form.addEventListener('click', e => {
            e.preventDefault();
            ctrlBank.setOption(e);
        })
    }
};