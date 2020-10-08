import Dom from '../../../assets/js/dom';
import ControlRegister from '../control/ctrlRegister';

export default class RegiterForm {
    constructor() {

        this.dom = new Dom();

        this.title = this.dom.createH1({ text: 'Register Form' });
        this.form = this.dom.createForm({ id: 'registerForm', action: '', method: 'dialog' });

        this.lblName = this.dom.createLabel({ for: 'inpName', id: 'lbName', text: 'Name:' });
        this.inpName = this.dom.createInput({ type: 'text', id: 'inpName' });
        this.inpName.className = 'validate';
        this.inpName.placeholder = 'Type your name';

        this.lblLastName = this.dom.createLabel({ for: 'inpLastName', id: 'lbLastName', text: 'Last Name:' });
        this.inpLastName = this.dom.createInput({ type: 'text', id: 'inpLastName' });
        this.inpLastName.className = 'validate';
        this.inpLastName.placeholder = 'Type your last name';

        this.lblCPF = this.dom.createLabel({ id: 'lblCPF', for: 'inpCPF', text: 'Type the CPF:' });
        this.inpCPF = this.dom.createInput({ type: 'text', id: 'inpCPF' });
        this.inpCPF.className = 'validate';
        this.inpCPF.classList.add('inpCPF');
        this.inpCPF.placeholder = '___.___.___-__';
        this.inpCPF.maxLength = 14;
        this.inpCPF.minLength = 14;

        this.lblUser = this.dom.createLabel({ for: 'inpLogin', id: 'lbLogin', text: 'Username:' });
        this.inpUser = this.dom.createInput({ type: 'text', id: 'inpLogin' });
        this.inpUser.className = 'validate';
        this.inpUser.placeholder = 'Create a login user';

        this.lblPass = this.dom.createLabel({ for: 'inpPassord', id: 'lbPassword', text: 'Password:' });
        this.inpPass = this.dom.createInput({ type: 'password', id: 'inpPassword' });
        this.inpPass.className = 'validate';
        this.inpPass.placeholder = 'Create a password';

        this.lblConfirmPass = this.dom.createLabel({ for: 'inpConfirmPass', id: 'lbConfirmPass', text: 'Confirm Password:' });
        this.inpConfirmPass = this.dom.createInput({ type: 'password', id: 'inpConfirmPass' });
        this.inpConfirmPass.className = 'validate';
        this.inpConfirmPass.placeholder = 'Retype the password';

        this.btnSubmit = this.dom.createButton({ type: 'submit', id: 'btnSubmit', text: 'Register' });

        this.form.appendChild(this.title);
        this.form.appendChild(this.lblName);
        this.form.appendChild(this.inpName);
        this.form.appendChild(this.lblLastName);
        this.form.appendChild(this.inpLastName);
        this.form.appendChild(this.lblCPF);
        this.form.appendChild(this.inpCPF);
        this.form.appendChild(this.lblUser);
        this.form.appendChild(this.inpUser);
        this.form.appendChild(this.lblPass);
        this.form.appendChild(this.inpPass);
        this.form.appendChild(this.lblConfirmPass);
        this.form.appendChild(this.inpConfirmPass);
        this.form.appendChild(this.btnSubmit);

        this.form.addEventListener('submit', event => {
            event.preventDefault();
            const control = new ControlRegister();
            control.handleSubmit(event);
        });
    }
}