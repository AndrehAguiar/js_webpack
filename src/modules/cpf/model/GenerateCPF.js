import ValidCPF from './ValidCPF';

export default class GenerateCPF {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formatCPF(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        )
    }

    newCPF() {
        const cpfPart = this.rand();
        const digitOne = ValidCPF.generateDigit(cpfPart);
        const digitTwo = ValidCPF.generateDigit(cpfPart + digitOne);
        this.newCPF = `${cpfPart}${digitOne}${digitTwo}`;
        return this.formatCPF(this.newCPF);
    }
}