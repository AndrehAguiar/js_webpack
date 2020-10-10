import CtrlSession from './CtrlAccess';
import CreateCurrent from '../view/vwCurrent';
import CreateSavings from '../view/vwSavings';

export default class CtrlResume extends CtrlSession {
    constructor() {
        super(CtrlSession);

        this.createSavings = (session) => {
            if (!document.querySelector('#spnIncome')) {
                const spnLimit = document.querySelector('#spnLimit');
                if (spnLimit) spnLimit.remove();
                if (document.querySelector('#bankForm')) bankForm.remove();
                new CreateSavings(session);
            }
        }

        this.createCurrent = (session) => {
            if (!document.querySelector('#spnLimit')) {
                if (document.querySelector('#spnIncome')) spnIncome.remove();
                if (document.querySelector('#bankForm')) bankForm.remove();
                new CreateCurrent(session);
            }
        }
    }

    resumeAccount(e) {

        const session = this.getSession();
        if (!e) return session;

        const optAccount = e.target.children[0].value;
        e.target.children[0].checked = true;

        switch (optAccount) {

            case 'savings':
                this.createSavings(session);
                break;
            case 'current':
                this.createCurrent(session);
                break;
        }
        const numAccount = document.querySelector('#numAccount');
        if (numAccount) numAccount.remove();
    }
}
