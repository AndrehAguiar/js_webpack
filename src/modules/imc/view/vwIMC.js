import Dom from '../../../assets/js/dom';
import ControlIMC from '../control/ctrlIMC';
import Style from '../assets/style';

export default class ImcForm extends Dom {
    constructor() {
        super(Dom);

        this.css = new Style();
        this.style = this.createStyle({ text: this.css.style });

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

        this.dvTable = this.createDiv({ id: 'flexCol', text: '', class: 'flexCol' });
        const title = this.createH1({ text: 'IMC Table' });

        const dvRowList = this.createDiv({ id: 'flexRow', text: '', class: 'flexRow' });

        const dlIMC = this.createDL({ id: 'imcTable', text: '' });
        const dtIMC = this.createDT({ id: 'imcTitle', text: 'IMC' });
        dlIMC.appendChild(dtIMC);

        const dlResult = this.createDL({ id: 'resultTable', text: '' });
        const dtResult = this.createDT({ id: 'resultTitle', text: 'Resultado' });
        dlResult.appendChild(dtResult);

        const setTable = (val, idx) => {
            let dd = this.createDD({ id: `${idx}`, text: `${val}` });
            dlIMC.appendChild(dd);

            dd = this.createDD({ id: `${idx}`, text: `${this.result[idx]}` });
            dlResult.appendChild(dd);
        }

        this.description.forEach(setTable);

        this.dvForm = this.createDiv({ id: 'formIMC', class: 'flexCol', text: '' });
        const form = this.createForm({ id: 'calculator', action: '', method: 'dialog' });
        const subtitle = this.createH2({ id: 'subtitle', text: 'Calcule seu IMC' });

        const dvFormInputs = this.createDiv({ id: 'flexRow', text: '', class: 'flexRow' });

        const spInpPeso = this.createSpan({ id: 'spPeso', text: '', clas: 'spPeso' });
        const lbPeso = this.createLabel({ id: 'lbPeso', for: 'peso', text: 'Peso(kg):' });
        const inpPeso = this.createInput({ type: 'number', id: 'peso' });
        inpPeso.placeholder = '0.00';
        inpPeso.name = 'peso';
        inpPeso.required = true;
        inpPeso.step = '0.01';

        const spInpAltura = this.createSpan({ id: 'spAltura', text: '', class: 'spAltura' });
        const lbAltura = this.createLabel({ id: 'lbAltura', for: 'altura', text: 'Altura(m):' });
        const inpAltura = this.createInput({ type: 'number', id: 'altura' });
        inpAltura.placeholder = '0.00';
        inpAltura.name = 'peso';
        inpAltura.required = true;
        inpAltura.step = '0.01';

        const spResult = this.createSpan({ id: 'result', text: '', class: 'result' });
        const pResult = this.createP({ id: 'result', text: '', class: 'result' });

        const btnSubmit = this.createButton({ type: 'submit', id: 'btnSubmit', text: 'Calcular' });

        this.dvTable.appendChild(title);
        this.dvTable.appendChild(dvRowList);
        dvRowList.appendChild(dlIMC);
        dvRowList.appendChild(dlResult);

        this.dvForm.appendChild(form);

        form.appendChild(subtitle);
        form.appendChild(dvFormInputs);
        dvFormInputs.appendChild(spInpPeso);
        spInpPeso.appendChild(lbPeso);
        spInpPeso.appendChild(inpPeso);

        form.appendChild(dvFormInputs);
        dvFormInputs.appendChild(spInpAltura);
        spInpAltura.appendChild(lbAltura);
        spInpAltura.appendChild(inpAltura);

        this.dvForm.appendChild(spResult);
        spResult.appendChild(pResult);

        form.appendChild(btnSubmit);

        form.addEventListener('submit', event => {
            event.preventDefault();
            const imc = new ControlIMC(event);
            imc.calcular();

        });

    }
}