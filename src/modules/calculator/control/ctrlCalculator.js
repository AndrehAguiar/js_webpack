import Calculator from '../model/Calculator';

const clickButton = (e, calculator) => {
    const el = e.target;
    const btnValue = el.innerText;

    if (el.classList[0] != 'func') return;

    switch (el.classList[1]) {
        case 'num':
            calculator.btnDisplay(btnValue);
            break;
        case 'dot':
            calculator.formatDecimal(btnValue);
            break;
        case 'equal':
            calculator.setFormula(btnValue);
            break;
        case 'del':
            calculator.delValue();
            break;
        case 'clear':
            calculator.clearDisplay();
            break;
        case 'lpar' || 'rpar':
            calculator.formatFormula(btnValue);
            break;
        default:
            calculator.setFormula(btnValue);
    }
}

const pressKey = (e, calculator) => {
    let funcValue = e.key;
    console.log(e.key in [...Array(10).keys()])
    if (e.key in [...Array(10).keys()]) funcValue = 'num';
    if (calculator.operations.includes(e.key)) funcValue = 'oper';

    switch (funcValue) {
        case 'Escape':
            calculator.clearDisplay();
            break;
        case 'Enter':
            calculator.setFormula('=');
            break;
        case 'num':
            calculator.btnDisplay(e.key);
            break
        case 'oper':
            calculator.setFormula(e.key);
            break;
        case '.':
            calculator.formatDecimal(e.key);
            break;
        case '(':
            calculator.setFormula(e.key);
            break;
        case ')':
            calculator.setFormula(e.key);
            break;
        case 'Backspace':
            calculator.delValue();
            break;
        default:
            return;
    }
}
const control = (e) => {
    const calculator = new Calculator();
    e.type === 'click' ? clickButton(e, calculator) : pressKey(e, calculator);
}
export default control;