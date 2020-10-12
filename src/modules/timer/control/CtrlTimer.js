import Timer from '../model/Timer';

export default class CtrlTimer extends Timer {
    constructor() {
        super(Timer);

        this.timerInit = () => {
            this.cronoCounter = setInterval(() => {
                this.ms++
                crono.innerText = this.setTime(this.ms);
            }, 1000);
            crono.style.color = 'black';
        }

        this.timerPause = () => {
            clearInterval(this.cronoCounter);
            crono.style.color = 'red';
        }

        this.timerReset = () => {
            clearInterval(this.cronoCounter);
            this.ms = 0;
            crono.innerText = this.setTime(this.ms);
            crono.style.color = 'black';
        }
    }
    action(event) {
        const el = event.target;
        if (el.classList.contains('init')) this.timerInit();
        if (el.classList.contains('pause')) this.timerPause();
        if (el.classList.contains('reset')) this.timerReset();
    }
}