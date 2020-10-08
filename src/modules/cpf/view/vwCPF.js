import Dom from '../../../assets/js/dom';
import ctrlCPF from '../control/ctrlCPF';

export default class CpfForm {
    constructor() {
        this.dom = new Dom();
        this.title = this.dom.createH1({ text: 'Valid CPF Generator' });

        this.form = this.dom.createForm({ id: 'formCPF', method: 'dialog' });

        this.label = this.dom.createLabel({ id: 'lblCPF', for: 'inpCPF', text: 'Type the CPF to check if is valid' })
        this.input = this.dom.createInput({ type: 'text', id: 'inpCPF' });
        this.input.placeholder = '___.___.___-__';
        this.input.maxLength = 14;
        this.input.minLength = 14;

        this.span = this.dom.createSpan({ id: 'spnValidate', text: '' });

        this.button = this.dom.createButton({ type: 'submit', id: 'btnSubmit', text: 'Generate' });


        this.form.appendChild(this.title);
        this.form.appendChild(this.label);
        this.form.appendChild(this.input);
        this.form.appendChild(this.span);
        this.form.appendChild(this.button);

        this.form.addEventListener('submit', event => {
            this.input.value = ctrlCPF(event);
        });

        this.form.addEventListener('keyup', event => {
            ctrlCPF(event);
        });

    }

}