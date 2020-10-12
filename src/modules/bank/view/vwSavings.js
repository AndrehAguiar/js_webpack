import Dom from "../../../assets/js/dom";
import Action from "./vwAction";

export default class CreateSavings {
    constructor(session) {
        const dom = new Dom();
        this.session = session;

        const spnIncome = dom.createSpan({ id: 'spnIncome', text: 'Income: R$ ' });

        const content = document.querySelector('#content');
        content.appendChild(spnIncome);
        spnIncome.innerText += Number(this.session.income.toFixed(2));

        content.insertAdjacentElement('afterend', new Action().bankForm);
    }
}