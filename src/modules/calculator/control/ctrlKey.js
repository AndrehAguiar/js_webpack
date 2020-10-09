import ControlCalc from './ctrlCalculator';

export default class ControlKey extends ControlCalc {
    constructor(event) {
        super(ControlCalc);
        this.event = event;
    }

    pressKey() {
        let funcValue = this.event.key;
        if (this.event.key in this.numbers) funcValue = 'num';
        if (this.operations.includes(this.event.key)) funcValue = 'oper';

        switch (funcValue) {
            case 'Escape':
                this.clearDisplay();
                break;
            case 'Enter':
                this.setResult('=');
                break;
            case 'num':
                this.btnDisplay(this.event.key);
                break
            case 'oper':
                this.setFormula(this.event.key);
                break;
            case '.':
                this.formatDecimal(this.event.key);
                break;
            case '(':
                this.formatFormula(this.event.key);
                break;
            case ')':
                this.formatFormula(this.event.key);
                break;
            case 'Backspace':
                this.delValue();
                break;
            default:
                break;
        }
    }
}