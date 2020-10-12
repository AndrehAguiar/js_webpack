import Dom from '../../../assets/js/dom';
import ctrlCPF from '../control/ctrlCPF';

export default class CpfForm {
    constructor() {

        const dom = new Dom();

        this.form = dom.createForm({ id: 'formCPF', method: 'dialog' });

        const title = dom.createH1({ text: 'Valid CPF Generator' });

        const label = dom.createLabel({ id: 'lblCPF', for: 'inpCPF', text: 'Type the CPF to check if is valid' })
        const input = dom.createInput({ type: 'text', id: 'inpCPF' });
        input.placeholder = '___.___.___-__';
        input.maxLength = 14;
        input.minLength = 14;

        const span = dom.createSpan({ id: 'spnValidate', text: '' });

        const button = dom.createButton({ type: 'submit', id: 'btnSubmit', text: 'Generate' });


        this.form.appendChild(title);
        this.form.appendChild(label);
        this.form.appendChild(input);
        this.form.appendChild(span);
        this.form.appendChild(button);

        this.form.addEventListener('submit', event => {
            input.value = ctrlCPF(event);
        });

        this.form.addEventListener('keyup', event => {
            ctrlCPF(event);
        });

    }

}