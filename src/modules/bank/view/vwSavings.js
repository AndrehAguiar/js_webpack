import Dom from "../../../assets/js/dom";

import Action from "./vwAction";

export default class CreateSavings extends Dom {
    constructor(session) {
        super(Dom);
        this.session = session;

        this.spnIncome = this.createSpan({ id: 'spnIncome', text: 'Income: R$ ' });

        this.content = document.querySelector('#content');
        this.content.appendChild(this.spnIncome);
        this.spnIncome.innerText += Number(this.session.income.toFixed(2));

        this.content.insertAdjacentElement('afterend', new Action().bankForm);
    }
}