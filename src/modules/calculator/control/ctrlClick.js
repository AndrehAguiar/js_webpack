import ControlCalc from './ctrlCalculator';

export default class ControlClick extends ControlCalc {
    constructor(event) {
        super(ControlCalc);
        this.event = event;
    }

    clickButton() {
        const el = this.event.target;
        const btnValue = el.innerText;

        if (el.classList[0] != 'func') return;

        switch (el.classList[1]) {
            case 'num':
                this.btnDisplay(btnValue);
                break;
            case 'dot':
                this.formatDecimal(btnValue);
                break;
            case 'equal':
                this.setResult();
                break;
            case 'del':
                this.delValue();
                break;
            case 'clear':
                this.clearDisplay();
                break;
            case 'lpar':
                this.formatFormula(btnValue);
                break;
            case 'rpar':
                this.formatFormula(btnValue);
                break;
            default:
                this.setFormula(btnValue);
        }
    };
}