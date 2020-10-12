export default class Timer {
    constructor() {

        this.ms = 0;
        this.cronoCounter;

        this.setTime = (ms) => {
            const time = new Date(ms * 1000);
            return time.toLocaleTimeString('pt-BR', {
                hour12: false,
                timeZone: 'GMT'
            });

        }
    }
}