import Dom from '../../../assets/js/dom';
import controlCalc from '../control/ctrlCalculator';

export default class Display {
    constructor() {
        this.dom = new Dom();

        this.dvGrid = this.dom.createDiv({ id: 'grdCalculator', text: '' });
        this.dvGrid.className = 'grdCalculator';
        this.h1 = this.dom.createH1({ text: 'Calculator' });
        this.span = this.dom.createSpan({ id: 'spnResult', text: '' });
        this.span.className = 'formula';

        this.inpDisplay = this.dom.createInput({ type: 'text', id: 'display' });
        this.inpDisplay.readOnly = 'readonly';
        this.inpDisplay.value = 0;
        this.inpDisplay.className = 'display';

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
            item = this.dom.createDiv({ id: 'item', text: element.text });
            item.classList = (element.itemClass);
            this.dvGrid.appendChild(item);

        });

        this.dvGrid.addEventListener('click', event => {
            event.preventDefault();
            controlCalc(event);
        });

        document.addEventListener('keydown', event => {
            event.preventDefault();
            controlCalc(event);
        });
    }
}