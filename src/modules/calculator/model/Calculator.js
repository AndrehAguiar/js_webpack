export default class Calculator {
    constructor() {

        this.resultState = document.querySelector('#resultState');
        this.display = document.querySelector('#display');
        this.formula = document.querySelector('.formula');
        this.operations = ['-', '+', '/', '*'];
        this.numbers = [...Array(10).keys()];
    }

    clearDisplay() {
        this.display.value = 0;
        this.formula.innerText = '';

    }

    delValue() {
        let val = this.display.value.length;
        this.display.value = val === 1 ? '0' : this.display.value.slice(0, -1);
    }

    formatDecimal(btnValue) {
        if (!this.display.value.includes('.')) this.display.value += btnValue;

    }

    result() {

        try {
            let mathAccount = eval(this.formula.innerText.slice(0, -1)).toFixed(2);
            return mathAccount;

        } catch (e) { }
    }
}