export default class CalculateIMC {
    constructor(altura, peso) {
        this.peso = peso;
        this.altura = altura;

        this.checkAltura = () => {
            if (this.altura > 0) return this.altura;
            return this.setResult('Altura inválida', false);
        }

        this.checkPeso = () => {
            if (this.peso > 0) return this.peso;
            return this.setResult('Peso inválido', false);
        }
    }
    getIMC() {
        return (this.peso / (this.altura ** 2)).toFixed(2);
    }

}