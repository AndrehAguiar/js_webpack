import Dom from '../../../assets/js/dom';
import resume from '../control/ctrlResume';

export default class ResumeAccount {
    constructor() {

        this.dom = new Dom();

        this.subtitle = document.querySelector('#subTitle');

        this.formOptAccount = this.dom.createForm({ id: 'optAccount', action: '', method: 'dialog' });

        this.dvBarOption = this.dom.createDiv({ id: 'barAccount', text: '' });

        this.labelCurrent = this.dom.createLabel({ id: 'inpCurrent', text: 'Current Account', for: 'inpCurrent' });
        this.inpCurrent = this.dom.createInput({ type: 'radio', id: 'inpCurrent' });
        this.inpCurrent.name = 'optAccount';
        this.inpCurrent.value = 'current';

        this.labelSavings = this.dom.createLabel({ id: 'inpSavings', text: 'Savings Account', for: 'inpSavings' });
        this.inpSavings = this.dom.createInput({ type: 'radio', id: 'inpSavings' });
        this.inpSavings.name = 'optAccount';
        this.inpSavings.value = 'savings';

        this.content = this.dom.createDiv({ id: 'content', text: '' });
        this.balance = this.dom.createSpan({ id: 'spnBalance', text: 'Balance: R$ ' });

        this.formOptAccount.appendChild(this.dvBarOption);

        this.dvBarOption.appendChild(this.labelCurrent);
        this.labelCurrent.appendChild(this.inpCurrent);

        this.dvBarOption.appendChild(this.labelSavings);
        this.labelSavings.appendChild(this.inpSavings);

        this.content.appendChild(this.balance);

        this.subtitle.insertAdjacentElement('afterend', this.formOptAccount);
        this.formOptAccount.insertAdjacentElement('afterend', this.content);

        this.session = resume();
        this.subtitle.innerText = `Olá, ${this.session.Account.name}!`;

        this.h3 = this.dom.createH3({ text: `Acc: ${this.session.Account.number}` });
        this.h3.id = 'numAccount';
        this.subtitle.insertAdjacentElement('afterend', this.h3);

        this.balance.innerText += Number(this.session.Account.balance).toFixed(2);

        this.formOptAccount.addEventListener('click', event => {
            event.preventDefault();
            resume(event);
        });
    }
}