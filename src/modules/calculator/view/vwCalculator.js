import Dom from '../../../assets/js/dom';
import ControlClick from '../control/ctrlClick';
import ControlKey from '../control/ctrlKey';
import Style from '../assets/style';

export default class Display {
    constructor() {

        const dom = new Dom();

        const css = new Style();
        this.style = dom.createStyle({ text: css.style });
        this.dvGrid = dom.createDiv({ id: 'grdCalculator', text: '', class: 'grdCalculator' });

        const h1 = dom.createH1({ text: 'Calculator' });
        const span = dom.createSpan({ id: 'spnResult', text: '', class: 'formula' });

        const inpDisplay = dom.createInput({ type: 'text', id: 'display', class: 'display' });
        inpDisplay.readOnly = 'readonly';
        inpDisplay.value = 0;

        const itensGrid = [
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

        this.dvGrid.appendChild(h1);
        this.dvGrid.appendChild(span);
        this.dvGrid.appendChild(inpDisplay);

        itensGrid.forEach(element => {

            let item = element.itemClass;
            item = dom.createDiv({ id: 'item', text: element.text });
            item.classList = (element.itemClass);
            this.dvGrid.appendChild(item);

        });

        const inpResult = dom.createInput({ type: 'hidden', id: 'resultState', class: 'result' });
        inpResult.value = false;

        this.dvGrid.appendChild(inpResult);

        this.dvGrid.addEventListener('click', event => {
            event.preventDefault();
            const control = new ControlClick(event);
            control.clickButton();
        });

        document.addEventListener('keydown', event => {
            event.preventDefault();
            const control = new ControlKey(event);
            control.pressKey();
        });
    }
}