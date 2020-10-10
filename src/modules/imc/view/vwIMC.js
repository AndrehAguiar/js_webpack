import Dom from '../../../assets/js/dom';
import ControlIMC from '../control/ctrlIMC';

export default class ImcForm extends Dom {
    constructor() {
        super(Dom);

        this.description = [
            `Menos que 18,5`,
            `Entre 18,5 e 24,9`,
            `Entre 25 e 29,9`,
            `Entre 30 e 34,9`,
            `Entre 35 e 39,9`,
            `Mais que 39,9`
        ]
        this.result = [
            `Resultado`,
            `Abaixo do peso`,
            `Peso normal`,
            `Sobrepeso`,
            `Obesidade grau 1`,
            `Obesidade grau 2`,
            `Obesidade grau 3`
        ]

        this.title = this.createH1({ text: 'IMC Table' });
        this.dvTable = this.createDiv({ id: 'flexCol', text: '', class: 'flexCol' });

        this.dvRowList = this.createDiv({ id: 'flexRow', text: '', class: 'flexRow' });

        this.dlIMC = this.createDL({ id: 'imcTable', text: '' });
        this.dtIMC = this.createDT({ id: 'imcTitle', text: 'IMC' });
        this.dlIMC.appendChild(this.dtIMC);

        this.dlResult = this.createDL({ id: 'resultTable', text: '' });
        this.dtResult = this.createDT({ id: 'resultTitle', text: 'Resultado' });
        this.dlResult.appendChild(this.dtResult);

        this.setTable = (val, idx) => {
            let dd = this.createDD({ id: `${idx}`, text: `${val}` });
            this.dlIMC.appendChild(dd);

            dd = this.createDD({ id: `${idx}`, text: `${this.result[idx]}` });
            this.dlResult.appendChild(dd);
        }

        this.description.forEach(this.setTable);

        this.dvForm = this.createDiv({ id: 'formIMC', class: 'flexCol', text: '' });
        this.form = this.createForm({ id: 'calculator', action: '', method: 'dialog' });
        this.subtitle = this.createH2({ id: 'subtitle', text: 'Calcule seu IMC' });

        this.dvFormInputs = this.createDiv({ id: 'flexRow', text: '', class: 'flexRow' });

        this.spInpPeso = this.createSpan({ id: 'spPeso', text: '', clas: 'spPeso' });
        this.lbPeso = this.createLabel({ id: 'lbPeso', for: 'peso', text: 'Peso(kg):' });
        this.inpPeso = this.createInput({ type: 'number', id: 'peso' });
        this.inpPeso.placeholder = '0.00';
        this.inpPeso.name = 'peso';
        this.inpPeso.required = true;
        this.inpPeso.step = '0.01';

        this.spInpAltura = this.createSpan({ id: 'spAltura', text: '', class: 'spAltura' });
        this.lbAltura = this.createLabel({ id: 'lbAltura', for: 'altura', text: 'Altura(m):' });
        this.inpAltura = this.createInput({ type: 'number', id: 'altura' });
        this.inpAltura.placeholder = '0.00';
        this.inpAltura.name = 'peso';
        this.inpAltura.required = true;
        this.inpAltura.step = '0.01';

        this.spResult = this.createSpan({ id: 'result', text: '', class: 'result' });
        this.pResult = this.createP({ id: 'result', text: '', class: 'result' });

        this.btnSubmit = this.createButton({ type: 'submit', id: 'btnSubmit', text: 'Calcular' });

        this.dvTable.appendChild(this.title);
        this.dvTable.appendChild(this.dvRowList);
        this.dvRowList.appendChild(this.dlIMC);
        this.dvRowList.appendChild(this.dlResult);

        this.dvForm.appendChild(this.form);

        this.form.appendChild(this.subtitle);
        this.form.appendChild(this.dvFormInputs);
        this.dvFormInputs.appendChild(this.spInpPeso);
        this.spInpPeso.appendChild(this.lbPeso);
        this.spInpPeso.appendChild(this.inpPeso);

        this.form.appendChild(this.dvFormInputs);
        this.dvFormInputs.appendChild(this.spInpAltura);
        this.spInpAltura.appendChild(this.lbAltura);
        this.spInpAltura.appendChild(this.inpAltura);

        this.dvForm.appendChild(this.spResult);
        this.spResult.appendChild(this.pResult);

        this.form.appendChild(this.btnSubmit);

        this.form.addEventListener('submit', event => {
            event.preventDefault();
            const imc = new ControlIMC(event);
            imc.calcular();

        });

    }
}