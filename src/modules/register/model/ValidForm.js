import ValidCPF from './ValidCPF.js';

export default class ValidForm extends ValidCPF {
    constructor() {
        super(ValidCPF);
    }

    validateUser(input) {
        const user = input.value;
        let isValid = true;

        if (user.length < 3 || user.length > 12) {
            this.createError(input, 'Username must be 3 to 12 characters long.');
            isValid = false;
        }
        if (!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(input, 'Username must have only letters and/or numbers.');
            isValid = false;
        }

        return isValid;
    }

    validateCPF(input) {

        this.cleanCPF(input.value);

        if (!this.validate()) {
            this.createError(input, 'Invalid CPF');
            return false;
        }
        return true;
    }

    createError(input, msg) {
        const div = document.createElement('div');
        div.innerText = msg;
        div.classList.add('errorText');
        input.insertAdjacentElement('afterend', div);
    }
}