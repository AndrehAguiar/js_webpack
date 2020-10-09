import Dom from '../../../assets/js/dom';

export default class FormIMC extends Dom {
    constructor() {
        super(Dom);

        this.title = this.createH1({ id: 'IMC Table' });
        this.dvTable = this.createDiv({ id: 'flexRow', text: '' });

    }
}