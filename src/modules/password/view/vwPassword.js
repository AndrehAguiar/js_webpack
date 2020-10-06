import { createSpan, createForm, createInput, createLabel, createButton, createH1 } from '../../../assets/js/dom';
import ctrlPass from '../control/ctrlPassword';

export default class PassForm {
    constructor() {
        this.title = createH1({ text: 'Password Generator' });
        this.form = createForm({ id: 'formPass', method: 'dialog' });

        this.span = createSpan({ id: 'spnPassword', text: '' });

        this.lblChars = createLabel({ id: 'chars', for: 'inpQtdChars', text: 'Number of characters' });
        this.input = createInput({ type: 'number', id: 'inpQtdChars', class: 'qtdChars' });
        this.input.value = 6;
        this.input.maxlength = '2';
        this.input.max = 12;
        this.input.minlength = '1';
        this.input.min = 6;
        this.input.required = true;

        this.lblNumber = createLabel({ id: 'number', for: 'inpNumber', text: 'Numbers' });
        this.checkNumber = createInput({ type: 'checkbox', id: 'inpNumber', class: 'Number' });
        this.checkNumber.checked = true;

        this.lblUpper = createLabel({ id: 'upper', for: 'inpUpper', text: 'Capital letters' });
        this.checkUpper = createInput({ type: 'checkbox', id: 'inpUpper', class: 'Upper' });
        this.checkUpper.checked = true;

        this.lblLower = createLabel({ id: 'lower', for: 'inpLower', text: 'Small letters' });
        this.checkLower = createInput({ type: 'checkbox', id: 'inpLower', class: 'Lower' });
        this.checkLower.checked = true;

        this.lblSpecial = createLabel({ id: 'special', for: 'inpSpecial', text: 'Special Characters' });
        this.checkSpecial = createInput({ type: 'checkbox', id: 'inpSpecial', class: 'Special' });
        this.checkSpecial.checked = true;

        this.btnSubmit = createButton({ type: 'submit', id: 'btnSubmit', text: 'Generate' })

        this.form.appendChild(this.title);
        this.form.appendChild(this.span);
        this.form.appendChild(this.lblChars);
        this.lblChars.appendChild(this.input);
        this.form.appendChild(this.lblNumber);
        this.lblNumber.appendChild(this.checkNumber);
        this.form.appendChild(this.lblUpper);
        this.lblUpper.appendChild(this.checkUpper);
        this.form.appendChild(this.lblLower);
        this.lblLower.appendChild(this.checkLower);
        this.form.appendChild(this.lblSpecial);
        this.lblSpecial.appendChild(this.checkSpecial);
        this.form.appendChild(this.btnSubmit);

        this.form.addEventListener('submit', event => {
            event.preventDefault();
            event.target.children['spnPassword'].innerText = ctrlPass(event.target.children);
        });
    }

}