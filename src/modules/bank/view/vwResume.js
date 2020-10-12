import Dom from '../../../assets/js/dom';
import CtrlResume from '../control/CtrlResume';

export default class ResumeAccount {
    constructor() {

        const dom = new Dom();

        const subtitle = document.querySelector('#subTitle');

        const formOptAccount = dom.createForm({ id: 'optAccount', action: '', method: 'dialog' });

        const dvBarOption = dom.createDiv({ id: 'barAccount', text: '' });

        const labelCurrent = dom.createLabel({ id: 'inpCurrent', text: 'Current Account', for: 'inpCurrent' });
        const inpCurrent = dom.createInput({ type: 'radio', id: 'inpCurrent' });
        inpCurrent.name = 'optAccount';
        inpCurrent.value = 'current';

        const labelSavings = dom.createLabel({ id: 'inpSavings', text: 'Savings Account', for: 'inpSavings' });
        const inpSavings = dom.createInput({ type: 'radio', id: 'inpSavings' });
        inpSavings.name = 'optAccount';
        inpSavings.value = 'savings';

        const content = dom.createDiv({ id: 'content', text: '' });
        const balance = dom.createSpan({ id: 'spnBalance', text: 'Balance: R$ ' });

        formOptAccount.appendChild(dvBarOption);

        dvBarOption.appendChild(labelCurrent);
        labelCurrent.appendChild(inpCurrent);

        dvBarOption.appendChild(labelSavings);
        labelSavings.appendChild(inpSavings);

        content.appendChild(balance);

        subtitle.insertAdjacentElement('afterend', formOptAccount);
        formOptAccount.insertAdjacentElement('afterend', content);

        const ctrlResume = new CtrlResume();
        const session = ctrlResume.resumeAccount();

        subtitle.innerText = `Olá, ${session.Account.name}!`;

        const h3 = dom.createH3({ text: `Acc: ${session.Account.number}` });
        h3.id = 'numAccount';
        subtitle.insertAdjacentElement('afterend', h3);

        balance.innerText += Number(session.Account.balance).toFixed(2);

        formOptAccount.addEventListener('click', event => {
            event.preventDefault();
            ctrlResume.resumeAccount(event);
        });
    }
}