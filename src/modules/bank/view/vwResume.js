import Dom from '../../../assets/js/dom';
import resume from '../control/ctrlResume';

export default class ResumeAccount extends Dom {
    constructor() {

        super(Dom);

        this.subtitle = document.querySelector('#subTitle');

        this.formOptAccount = this.createForm({ id: 'optAccount', action: '', method: 'dialog' });

        this.dvBarOption = this.createDiv({ id: 'barAccount', text: '' });

        this.labelCurrent = this.createLabel({ id: 'inpCurrent', text: 'Current Account', for: 'inpCurrent' });
        this.inpCurrent = this.createInput({ type: 'radio', id: 'inpCurrent' });
        this.inpCurrent.name = 'optAccount';
        this.inpCurrent.value = 'current';

        this.labelSavings = this.createLabel({ id: 'inpSavings', text: 'Savings Account', for: 'inpSavings' });
        this.inpSavings = this.createInput({ type: 'radio', id: 'inpSavings' });
        this.inpSavings.name = 'optAccount';
        this.inpSavings.value = 'savings';

        this.content = this.createDiv({ id: 'content', text: '' });
        this.balance = this.createSpan({ id: 'spnBalance', text: 'Balance: R$ ' });

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

        this.h3 = this.createH3({ text: `Acc: ${this.session.Account.number}` });
        this.h3.id = 'numAccount';
        this.subtitle.insertAdjacentElement('afterend', this.h3);

        this.balance.innerText += Number(this.session.Account.balance).toFixed(2);

        this.formOptAccount.addEventListener('click', event => {
            event.preventDefault();
            resume(event);
        });
    }
}