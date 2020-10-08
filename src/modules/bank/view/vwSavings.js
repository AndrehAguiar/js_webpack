import Dom from "../../../assets/js/dom";

import Action from "./vwAction";

export default class CreateSavings extends Action {
    constructor(session) {
        super(Action);
        this.session = session;

        this.dom = new Dom();

        this.spnIncome = this.dom.createSpan({ id: 'spnIncome', text: 'Income: R$ ' });

        this.content = document.querySelector('#content');
        this.content.appendChild(this.spnIncome);
        this.spnIncome.innerText += Number(this.session.income.toFixed(2));

        this.content.insertAdjacentElement('afterend', new Action().bankForm);
    }
}