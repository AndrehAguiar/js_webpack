import { createSpan, createForm, createInput, createButton, createH1, createLabel } from '../../../assets/js/dom';
import ctrlCPF from '../control/ctrlCPF';

export default class CpfForm {
    constructor() {
        this.title = createH1({ text: 'Valid CPF Generator' });

        this.form = createForm({ id: 'formCPF', method: 'dialog' });

        this.label = createLabel({ id: 'lblCPF', for: 'inpCPF', text: 'Type the CPF to check if is valid' })
        this.input = createInput({ type: 'text', id: 'inpCPF' });
        this.input.placeholder = '___.___.___-__';
        this.input.maxLength = 14;
        this.input.minLength = 14;

        this.span = createSpan({ id: 'spnValidate', text: '' });

        this.button = createButton({ type: 'submit', id: 'btnSubmit', text: 'Generate' });


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