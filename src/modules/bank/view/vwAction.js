import Dom from "../../../assets/js/dom";
import { optDeposit, optWithdraw, action } from '../control/ctrlAction';

export default class Action {
    constructor() {

        this.dom = new Dom();
        this.bankForm = this.dom.createForm({ id: 'bankForm', action: '', method: 'dialog' });

        this.labelWithdraw = this.dom.createLabel({ for: 'inpWithdraw', text: 'Withdraw', id: 'lblWidraw' });
        this.inpWithdraw = this.dom.createInput({ type: 'number', id: 'inpWithdraw' });
        this.inpWithdraw.placeholder = '0.00';
        this.inpWithdraw.step = '0.01';
        this.inpWithdraw.name = 'withdraw';
        this.inpWithdraw.required = true;

        this.bntWithdraw = this.dom.createButton({ type: 'submit', text: 'Withdraw', id: 'btnWithdraw' });
        this.bntWithdraw.value = 'Withdraw';

        this.labelDeposit = this.dom.createLabel({ for: 'inpDeposit', text: 'Deposit', id: 'lblDeposit' });
        this.inpDeposit = this.dom.createInput({ type: 'number', id: 'inpDeposit' });
        this.inpDeposit.placeholder = '0.00';
        this.inpDeposit.step = '0.01';
        this.inpDeposit.name = 'deposit';
        this.inpDeposit.required = true;

        this.bntDeposit = this.dom.createButton({ type: 'submit', text: 'Deposit', id: 'btnDeposit' });
        this.bntDeposit.value = 'Deposit';

        this.dvInput = this.dom.createDiv({ id: 'dvInput', text: '' });

        this.bankForm.appendChild(this.labelWithdraw);
        this.bankForm.appendChild(this.labelDeposit);
        this.bankForm.appendChild(this.dvInput);

        this.labelWithdraw.addEventListener('click', event => {
            event.preventDefault();
            optWithdraw(this.inpWithdraw, this.bntWithdraw);
        });

        this.labelDeposit.addEventListener('click', event => {
            event.preventDefault();
            optDeposit(this.inpDeposit, this.bntDeposit);
        });

        this.bankForm.addEventListener('submit', function (event) {
            event.preventDefault();
            action(event);

        });

    }
}