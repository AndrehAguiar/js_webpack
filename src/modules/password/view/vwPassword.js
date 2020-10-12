import Dom from '../../../assets/js/dom';
import CtrlPassword from '../control/ctrlPassword';

export default class PassForm {
    constructor() {

        const dom = new Dom();

        this.form = dom.createForm({ id: 'formPass', method: 'dialog' });

        const title = dom.createH1({ text: 'Password Generator' });

        const span = dom.createSpan({ id: 'spnPassword', text: '' });

        const lblChars = dom.createLabel({ id: 'chars', for: 'inpQtdChars', text: 'Number of characters' });
        const input = dom.createInput({ type: 'number', id: 'inpQtdChars', class: 'qtdChars' });
        input.value = 6;
        input.maxlength = '2';
        input.max = 12;
        input.minlength = '1';
        input.min = 6;
        input.required = true;

        const lblNumber = dom.createLabel({ id: 'number', for: 'inpNumber', text: 'Numbers' });
        const checkNumber = dom.createInput({ type: 'checkbox', id: 'inpNumber', class: 'Number' });
        checkNumber.checked = true;

        const lblUpper = dom.createLabel({ id: 'upper', for: 'inpUpper', text: 'Capital letters' });
        const checkUpper = dom.createInput({ type: 'checkbox', id: 'inpUpper', class: 'Upper' });
        checkUpper.checked = true;

        const lblLower = dom.createLabel({ id: 'lower', for: 'inpLower', text: 'Small letters' });
        const checkLower = dom.createInput({ type: 'checkbox', id: 'inpLower', class: 'Lower' });
        checkLower.checked = true;

        const lblSpecial = dom.createLabel({ id: 'special', for: 'inpSpecial', text: 'Special Characters' });
        const checkSpecial = dom.createInput({ type: 'checkbox', id: 'inpSpecial', class: 'Special' });
        checkSpecial.checked = true;

        const btnSubmit = dom.createButton({ type: 'submit', id: 'btnSubmit', text: 'Generate' })

        this.form.appendChild(title);
        this.form.appendChild(span);
        this.form.appendChild(lblChars);
        lblChars.appendChild(input);
        this.form.appendChild(lblNumber);
        lblNumber.appendChild(checkNumber);
        this.form.appendChild(lblUpper);
        lblUpper.appendChild(checkUpper);
        this.form.appendChild(lblLower);
        lblLower.appendChild(checkLower);
        this.form.appendChild(lblSpecial);
        lblSpecial.appendChild(checkSpecial);
        this.form.appendChild(btnSubmit);

        this.form.addEventListener('submit', event => {
            event.preventDefault();
            const control = new CtrlPassword();
            event.target.children['spnPassword'].innerText = control.ctrlPass(event.target.children);
        });
    }

}