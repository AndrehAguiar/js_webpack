import ValidForm from '../model/ValidForm'

export default class ControlRegister extends ValidForm {
    constructor() {
        super(ValidForm);
        this.form = document.querySelector('#registerForm');

        this.handleSubmit = (e) => {
            e.preventDefault();
            const validInputs = this.isValidInputs();
            const validPassword = this.isValidPassowds();

            if (validInputs && validPassword) {
                alert('Form submitted');
                this.form.submit();
            }
        }

        this.isValidPassowds = () => {
            let isValid = true;

            const passowrd = this.form.querySelector('#inpPassword');
            const rePassowrd = this.form.querySelector('#inpConfirmPass');

            if (passowrd.value !== rePassowrd.value) {
                isValid = false;
                this.createError(passowrd, 'Passwords are not the same.');
                this.createError(rePassowrd, 'Passwords are not the same.');
            }

            if (passowrd.value.length < 6 || passowrd.value.length > 12) {
                isValid = false;
                this.createError(passowrd, 'Password must be 6 to 12 characters long.')
            }
            return isValid;
        }

        this.isValidInputs = () => {
            let isValid = true;

            for (let errorText of this.form.querySelectorAll('.errorText')) {
                errorText.remove();
            }

            for (let input of this.form.querySelectorAll('.validate')) {
                const label = input.previousElementSibling.innerText;
                if (!input.value) {
                    this.createError(input, `The "${label.slice(0, -1)}" cant be empty.`)
                    isValid = false;
                }

                if (input.classList.contains('inpCPF')) {
                    console.log(this.validateCPF)
                    if (!this.validateCPF(input)) isValid = false;
                }

                if (input.classList.contains('inpLogin')) {
                    if (!this.validateUser(input)) isValid = false;
                }
            }
            return isValid;
        }
    }
}