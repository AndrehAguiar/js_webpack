import Dom from '../../../assets/js/dom';
import ControlRegister from '../control/ctrlRegister';

export default class RegiterForm {
    constructor() {

        const dom = new Dom();

        this.form = dom.createForm({ id: 'registerForm', action: '', method: 'dialog' });

        const title = dom.createH1({ text: 'Register Form' });

        const lblName = dom.createLabel({ for: 'inpName', id: 'lbName', text: 'Name:' });
        const inpName = dom.createInput({ type: 'text', id: 'inpName' });
        inpName.className = 'validate';
        inpName.placeholder = 'Type your name';

        const lblLastName = dom.createLabel({ for: 'inpLastName', id: 'lbLastName', text: 'Last Name:' });
        const inpLastName = dom.createInput({ type: 'text', id: 'inpLastName' });
        inpLastName.className = 'validate';
        inpLastName.placeholder = 'Type your last name';

        const lblCPF = dom.createLabel({ id: 'lblCPF', for: 'inpCPF', text: 'Type the CPF:' });
        const inpCPF = dom.createInput({ type: 'text', id: 'inpCPF' });
        inpCPF.className = 'validate';
        inpCPF.classList.add('inpCPF');
        inpCPF.placeholder = '___.___.___-__';
        inpCPF.maxLength = 14;
        inpCPF.minLength = 14;

        const lblUser = dom.createLabel({ for: 'inpLogin', id: 'lbLogin', text: 'Username:' });
        const inpUser = dom.createInput({ type: 'text', id: 'inpLogin' });
        inpUser.className = 'validate';
        inpUser.placeholder = 'Create a login user';

        const lblPass = dom.createLabel({ for: 'inpPassord', id: 'lbPassword', text: 'Password:' });
        const inpPass = dom.createInput({ type: 'password', id: 'inpPassword' });
        inpPass.className = 'validate';
        inpPass.placeholder = 'Create a password';

        const lblConfirmPass = dom.createLabel({ for: 'inpConfirmPass', id: 'lbConfirmPass', text: 'Confirm Password:' });
        const inpConfirmPass = dom.createInput({ type: 'password', id: 'inpConfirmPass' });
        inpConfirmPass.className = 'validate';
        inpConfirmPass.placeholder = 'Retype the password';

        const btnSubmit = dom.createButton({ type: 'submit', id: 'btnSubmit', text: 'Register' });

        this.form.appendChild(title);
        this.form.appendChild(lblName);
        this.form.appendChild(inpName);
        this.form.appendChild(lblLastName);
        this.form.appendChild(inpLastName);
        this.form.appendChild(lblCPF);
        this.form.appendChild(inpCPF);
        this.form.appendChild(lblUser);
        this.form.appendChild(inpUser);
        this.form.appendChild(lblPass);
        this.form.appendChild(inpPass);
        this.form.appendChild(lblConfirmPass);
        this.form.appendChild(inpConfirmPass);
        this.form.appendChild(btnSubmit);

        this.form.addEventListener('submit', event => {
            event.preventDefault();
            const control = new ControlRegister();
            control.handleSubmit(event);
        });
    }
}