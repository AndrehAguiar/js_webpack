import Dom from '../../../assets/js/dom';
import ControlClick from '../control/ctrlClick';
import ControlKey from '../control/ctrlKey';

export default class Display extends Dom {
    constructor() {
        super(Dom);

        this.dvGrid = this.createDiv({ id: 'grdCalculator', text: '', class: 'grdCalculator' });

        this.h1 = this.createH1({ text: 'Calculator' });
        this.span = this.createSpan({ id: 'spnResult', text: '', class: 'formula' });

        this.inpDisplay = this.createInput({ type: 'text', id: 'display', class: 'display' });
        this.inpDisplay.readOnly = 'readonly';
        this.inpDisplay.value = 0;

        this.itensGrid = [
            { 'itemClass': `func clear`, 'text': 'C' },
            { 'itemClass': 'func lpar', 'text': '(' },
            { 'itemClass': 'func rpar', 'text': ')' },
            { 'itemClass': 'func div', 'text': '/' },
            { 'itemClass': 'func num', 'text': 7 },
            { 'itemClass': 'func num', 'text': 9 },
            { 'itemClass': 'func num', 'text': 8 },
            { 'itemClass': 'func mult', 'text': '*' },
            { 'itemClass': 'func num', 'text': 4 },
            { 'itemClass': 'func num', 'text': 5 },
            { 'itemClass': 'func num', 'text': 6 },
            { 'itemClass': 'func plus', 'text': '+' },
            { 'itemClass': 'func num', 'text': 1 },
            { 'itemClass': 'func num', 'text': 2 },
            { 'itemClass': 'func num', 'text': 3 },
            { 'itemClass': 'func sub', 'text': '-' },
            { 'itemClass': 'func dot', 'text': '.' },
            { 'itemClass': 'func num', 'text': 0 },
            { 'itemClass': 'func del', 'text': '«' },
            { 'itemClass': 'func equal', 'text': '=' },
        ]

        this.dvGrid.appendChild(this.h1);
        this.dvGrid.appendChild(this.span);
        this.dvGrid.appendChild(this.inpDisplay);

        this.itensGrid.forEach(element => {

            let item = element.itemClass;
            item = this.createDiv({ id: 'item', text: element.text });
            item.classList = (element.itemClass);
            this.dvGrid.appendChild(item);

        });

        this.inpResult = this.createInput({ type: 'hidden', id: 'resultState', class: 'result' });
        this.inpResult.value = false;

        this.dvGrid.appendChild(this.inpResult);

        this.dvGrid.addEventListener('click', event => {
            event.preventDefault();
            this.control = new ControlClick(event);
            this.control.clickButton();
        });

        document.addEventListener('keydown', event => {
            event.preventDefault();
            this.control = new ControlKey(event);
            this.control.pressKey(event);
        });
    }
}