import Calculator from '../model/Calculator';

export default class ControlCalc extends Calculator {
    constructor() {
        super(Calculator);

        this.btnDisplay = (btnValue) => {
            if (this.display.value === '0' && btnValue !== '0' || this.resultState.value === 'true') {
                this.display.value = btnValue;
                this.resultState.value = false;
            }
            else {
                console.log('btn', this.formula.innerText)
                this.display.value += btnValue;
                this.resultState.value = false;
            }
        };

        this.setFormula = (btnValue) => {
            if (this.operations.includes(btnValue) && this.resultState.value === 'true' || this.formula.innerText.includes('=')) {

                this.formula.innerText = `${display.value}${btnValue}`;
                this.resultState.value = true;
            }
            else {
                if (this.formula.innerText.slice(-1) === ')') {
                    this.formula.innerText += `${btnValue}`;
                }
                else {
                    this.formula.innerText += `${this.display.value}${btnValue}`;
                }
                this.resultState.value = true;
            }
            this.preResult();
        };

        this.checkFormula = () => {
            const arrFormula = Array.from(this.formula.innerText);
            const qtdRpar = arrFormula.reduce((accumulator, val) => {
                if (val === ')') accumulator += 1;
                return accumulator;
            }, 0);
            const qtdLpar = arrFormula.reduce((accumulator, val) => {
                if (val === '(') accumulator += 1;
                return accumulator;
            }, 0);
            return qtdRpar < qtdLpar;
        }

        this.formatFormula = (btnValue) => {

            if (btnValue === ')') {
                if (this.checkFormula()) {
                    this.resultState.value = false;
                    this.setFormula(btnValue);
                };
                this.resultState.value = false;
            }
            else {
                if (this.operations.includes(this.formula.innerText.slice(-1))) {
                    if (!this.formula.innerText.includes('=')) {
                        this.formula.innerText += `${btnValue}`;
                    }
                    else {
                        this.formula.innerText = `${btnValue}`;
                    }
                }
            }

        };

        this.preResult = () => {
            const math = this.result();
            if (math) this.display.value = `${math}`;
            this.resultState.value = true;
        };

        this.setResult = () => {
            this.setFormula('=');
            const math = this.result();
            this.formula.innerText += `${math}`;
            this.display.value = `${math}`;
            this.resultState.value = true;
        };
    }
}