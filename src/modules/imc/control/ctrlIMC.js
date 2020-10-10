import CalculateIMC from '../model/CalculateIMC';

export default class ControlIMC extends CalculateIMC {
    constructor(event) {
        super(CalculateIMC);
        this.event = event;
        this.peso = event.path[0][0].value;
        this.altura = event.path[0][1].value;
        this.imc = this.getIMC();

        this.getResult = () => {
            if (this.imc >= 40) return 'Obesidade grau 3';
            if (this.imc >= 35) return 'Obesidade grau 2';
            if (this.imc >= 30) return 'Obesivade grau 1';
            if (this.imc >= 25) return 'Sobrepeso';
            if (this.imc >= 18.5) return 'Peso normal';
            if (this.imc < 18.5) return 'Abaixo do peso';
        }

        this.setResult = function (msg, isValid) {
            this.pResult = document.querySelector('.result p');
            this.spResult = document.querySelector('.result');
            isValid ? this.pResult.className = 'valid' : this.pResult.className = 'invalid';
            this.pResult.innerText = msg;
        }

        this.calcular = () => {
            const args = {
                'peso': this.checkPeso(),
                'altura': this.checkAltura()
            };
            if (args.peso && args.altura) {
                const msg = this.getResult();
                this.setResult(`Seu IMC é ${this.imc}: (${msg})`, true)
            }
        }
    }
}