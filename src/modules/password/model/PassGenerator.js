// MAIUSCULAS: 65 a 90
// MINUSCULAS: 97 a 122
// NUMEROS: 48 a 57
// TODOS CARACTERES: 33 a 47, 58 a 64, 91 a 96, 123 a 126

export default class PassGenerator {
    constructor(args) {
        this.len = args.passLen;
        this.num = args.num;
        this.upper = args.upper;
        this.lower = args.lower;
        this.specialChar = args.special;
        this.capital = Array.from({ length: (91 - 65) }, (v, k) => k + 65);
        this.small = Array.from({ length: (123 - 97) }, (v, k) => k + 97);
        this.number = Array.from({ length: (58 - 48) }, (v, k) => k + 48);
        this.special = Array.from({ length: (48 - 33) }, (v, k) => k + 33) +
            Array.from({ length: (65 - 58) }, (v, k) => k + 58) +
            Array.from({ length: (97 - 91) }, (v, k) => k + 91) +
            Array.from({ length: (127 - 123) }, (v, k) => k + 123);
    }

    static rand(min = 48, max = 126) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}