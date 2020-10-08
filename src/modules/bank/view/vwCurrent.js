import Dom from "../../../assets/js/dom";
import Action from "./vwAction";

export default class CreateCurrent extends Action {
    constructor(session) {
        super(Action);
        this.session = session;

        this.dom = new Dom();

        this.spnLimit = this.dom.createSpan({ id: 'spnLimit', text: 'Limit: R$ ' });

        this.content = document.querySelector('#content');
        this.content.appendChild(this.spnLimit);
        this.spnLimit.innerText += Number(session.limit).toFixed(2);

        this.content.insertAdjacentElement('afterend', new Action().bankForm);
    }
}