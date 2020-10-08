import Dom from '../../../assets/js/dom';
import ctrlPass from '../control/ctrlPassword';

export default class PassForm {
    constructor() {

        this.dom = new Dom();

        this.title = this.dom.createH1({ text: 'Password Generator' });
        this.form = this.dom.createForm({ id: 'formPass', method: 'dialog' });

        this.span = this.dom.createSpan({ id: 'spnPassword', text: '' });

        this.lblChars = this.dom.createLabel({ id: 'chars', for: 'inpQtdChars', text: 'Number of characters' });
        this.input = this.dom.createInput({ type: 'number', id: 'inpQtdChars', class: 'qtdChars' });
        this.input.value = 6;
        this.input.maxlength = '2';
        this.input.max = 12;
        this.input.minlength = '1';
        this.input.min = 6;
        this.input.required = true;

        this.lblNumber = this.dom.createLabel({ id: 'number', for: 'inpNumber', text: 'Numbers' });
        this.checkNumber = this.dom.createInput({ type: 'checkbox', id: 'inpNumber', class: 'Number' });
        this.checkNumber.checked = true;

        this.lblUpper = this.dom.createLabel({ id: 'upper', for: 'inpUpper', text: 'Capital letters' });
        this.checkUpper = this.dom.createInput({ type: 'checkbox', id: 'inpUpper', class: 'Upper' });
        this.checkUpper.checked = true;

        this.lblLower = this.dom.createLabel({ id: 'lower', for: 'inpLower', text: 'Small letters' });
        this.checkLower = this.dom.createInput({ type: 'checkbox', id: 'inpLower', class: 'Lower' });
        this.checkLower.checked = true;

        this.lblSpecial = this.dom.createLabel({ id: 'special', for: 'inpSpecial', text: 'Special Characters' });
        this.checkSpecial = this.dom.createInput({ type: 'checkbox', id: 'inpSpecial', class: 'Special' });
        this.checkSpecial.checked = true;

        this.btnSubmit = this.dom.createButton({ type: 'submit', id: 'btnSubmit', text: 'Generate' })

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