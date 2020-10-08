export default class Calculator {
    constructor() {
        this.display = document.querySelector('#display');
        this.formula = document.querySelector('.formula');
        this.operations = ['-', '+', '/', '*'];

    }

    btnDisplay(btnValue) {
        if (this.display.value === '0') {
            this.display.value = btnValue;
        }
        else if (this.operations.includes(this.formula.innerText.slice(-1))) {
            this.display.value = btnValue;
        }
        else if (this.formula.innerText.slice(-1) === '(') {
            this.display.value = btnValue;
        }
        else if (this.formula.innerText.includes('=')) {
            this.display.value = btnValue;
        }
        else {
            this.display.value += btnValue;
        }

    }

    clearDisplay() {
        this.display.value = 0;
        this.formula.innerText = '';
    }

    delValue() {
        let val = this.display.value.length;
        this.display.value = val === 1 ? '0' : this.display.value.slice(0, -1);
        this.formula.innerText = this.formula.innerText.slice(0, -2);
    }

    formatDecimal(btnValue) {
        this.display.value.slice(-1) === '.'
            ? this.display.value = btnValue
            : this.display.value += btnValue;
    }

    result() {

        try {
            let mathAccount = eval(this.formula.innerText.slice(0, -1)).toFixed(2);
            this.display.value = mathAccount;
            this.formula.innerText.slice(-1) === '=' ? this.formula.innerText += mathAccount : this.formula.innerText;
        } catch (e) { }
    }

    setFormula(btnValue) {

        if (this.formula.innerText.includes('=')) {
            this.formula.innerText = `${this.display.value}${btnValue}`;
        }
        else {
            if (this.formula.innerText.slice(-1) === ')') {
                this.formula.innerText += `${btnValue}`;
            }
            else {
                this.formula.innerText += `${this.display.value}${btnValue}`;
            }
        }
        this.result();
    }

    formatFormula(btnValue) {
        this.formula.innerText.includes('=')
            ? this.formula.innerText = btnValue
            : this.formula.innerText += btnValue;
    }
}