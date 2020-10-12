import PassGenerator from '../model/PassGenerator';

export default class CtrlPassword extends PassGenerator {
    constructor() {
        super(PassGenerator);

        this.checkChar = (charCode, password) => {
            let strChar = null;
            if (password.small.includes(charCode) && password.lower) return String.fromCharCode(charCode);
            if (password.capital.includes(charCode) && password.upper) return String.fromCharCode(charCode);
            if (password.number.includes(charCode) && password.num) return String.fromCharCode(charCode);
            if (password.special.includes(charCode) && password.specialChar) return String.fromCharCode(charCode);
            return strChar;
        }

        this.createError = (input, msg) => {
            console.log(input['special']);
            const span = document.createElement('span');
            span.classList.add('errorText');
            span.id = 'error';
            span.innerText = msg;
            input['special'].insertAdjacentElement('afterend', span);
        }
        this.createPass = (password) => {
            let newPassword = '';

            while (newPassword.length < password.len) {
                let charCode = PassGenerator.rand();
                let strChar = this.checkChar(charCode, password);
                if (strChar !== null) newPassword += strChar;
            }
            return newPassword;
        }

    }
    ctrlPass(child) {
        if (!child['error'] === false) child['error'].remove()
        const passLen = child['chars'].children['inpQtdChars'].value;
        const num = child['number'].children['inpNumber'].checked;
        const upper = child['upper'].children['inpUpper'].checked;
        const lower = child['lower'].children['inpLower'].checked;
        const special = child['special'].children['inpSpecial'].checked;

        const password = new PassGenerator({
            'passLen': passLen,
            'num': num,
            'upper': upper,
            'lower': lower,
            'special': special
        });

        if (!num && !upper && !lower && !special) {
            this.createError(child, 'Select an option.');
            return 'Nothing Selected'
        } else {
            return this.createPass(password);
        }
    }
}