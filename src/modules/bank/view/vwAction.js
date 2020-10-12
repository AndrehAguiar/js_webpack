import Dom from "../../../assets/js/dom";
import CtrlAction from '../control/CtrlAction';

export default class Action {
    constructor() {

        const dom = new Dom();
        const ctrlAction = new CtrlAction();

        this.bankForm = dom.createForm({ id: 'bankForm', action: '', method: 'dialog' });

        const labelWithdraw = dom.createLabel({ for: 'inpWithdraw', text: 'Withdraw', id: 'lblWidraw' });
        const inpWithdraw = dom.createInput({ type: 'number', id: 'inpWithdraw' });
        inpWithdraw.placeholder = '0.00';
        inpWithdraw.step = '0.01';
        inpWithdraw.name = 'withdraw';
        inpWithdraw.required = true;

        const bntWithdraw = dom.createButton({ type: 'submit', text: 'Withdraw', id: 'btnWithdraw' });
        bntWithdraw.value = 'Withdraw';

        const labelDeposit = dom.createLabel({ for: 'inpDeposit', text: 'Deposit', id: 'lblDeposit' });
        const inpDeposit = dom.createInput({ type: 'number', id: 'inpDeposit' });
        inpDeposit.placeholder = '0.00';
        inpDeposit.step = '0.01';
        inpDeposit.name = 'deposit';
        inpDeposit.required = true;

        const bntDeposit = dom.createButton({ type: 'submit', text: 'Deposit', id: 'btnDeposit' });
        bntDeposit.value = 'Deposit';

        const dvInput = dom.createDiv({ id: 'dvInput', text: '' });

        this.bankForm.appendChild(labelWithdraw);
        this.bankForm.appendChild(labelDeposit);
        this.bankForm.appendChild(dvInput);

        labelWithdraw.addEventListener('click', event => {
            event.preventDefault();
            ctrlAction.optWithdraw(inpWithdraw, bntWithdraw);
        });

        labelDeposit.addEventListener('click', event => {
            event.preventDefault();
            ctrlAction.optDeposit(inpDeposit, bntDeposit);
        });

        this.bankForm.addEventListener('submit', function (event) {
            event.preventDefault();
            ctrlAction.action(event);

        });
    }
}