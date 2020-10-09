import Dom from "../../../assets/js/dom";
import Action from "./vwAction";

export default class CreateCurrent extends Dom {
    constructor(session) {
        super(Dom);
        this.session = session;

        this.spnLimit = this.createSpan({ id: 'spnLimit', text: 'Limit: R$ ' });

        this.content = document.querySelector('#content');
        this.content.appendChild(this.spnLimit);
        this.spnLimit.innerText += Number(session.limit).toFixed(2);

        this.content.insertAdjacentElement('afterend', new Action().bankForm);
    }
}