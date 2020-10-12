import Dom from "../../../assets/js/dom";
import Action from "./vwAction";

export default class CreateCurrent {
    constructor(session) {
        this.session = session;

        const dom = new Dom();

        const spnLimit = dom.createSpan({ id: 'spnLimit', text: 'Limit: R$ ' });

        const content = document.querySelector('#content');
        content.appendChild(spnLimit);
        spnLimit.innerText += Number(this.session.limit).toFixed(2);

        content.insertAdjacentElement('afterend', new Action().bankForm);
    }
}