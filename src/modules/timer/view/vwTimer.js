import Dom from '../../../assets/js/dom';
import Style from '../assets/style';
import CtrlTimer from '../control/CtrlTimer';

export default class TimerForm {
    constructor() {

        const dom = new Dom();
        const ctrlTimer = new CtrlTimer();

        const css = new Style();
        this.style = dom.createStyle({ text: css.style });

        this.dvTimer = dom.createDiv({ id: 'dvTimer', text: '', class: 'timer' });
        const title = dom.createH1({ text: 'Timer' });
        const timer = dom.createSpan({ id: 'crono', text: `${ctrlTimer.setTime(ctrlTimer.ms)}`, class: 'crono' });
        const btnInit = dom.createButton({ id: 'init', class: 'init', type: 'button', text: 'Start' });
        const btnPause = dom.createButton({ id: 'pause', class: 'pause', type: 'button', text: 'Pause' });
        const btnReset = dom.createButton({ id: 'reset', class: 'reset', type: 'button', text: 'Reset' });

        this.dvTimer.appendChild(title);
        this.dvTimer.appendChild(timer);
        this.dvTimer.appendChild(btnInit);
        this.dvTimer.appendChild(btnPause);
        this.dvTimer.appendChild(btnReset);

        document.addEventListener('click', event => {
            event.preventDefault();
            ctrlTimer.action(event);
        });
    }
}