import AccessForm from '../view/vwAccess';
import AccountForm from '../view/vwAccount';
import ResumeAccount from '../view/vwResume';
import LogoutForm from '../view/vwLogout';
import CtrlSession from './CtrlAccess';

export default class CtrlBank extends CtrlSession {
    constructor() {
        super(CtrlSession);

        this.resumeAccount = () => {
            if (!document.querySelector('#content')) {
                const btnLogout = document.querySelector('#btnLogout');
                if (btnLogout) btnLogout.remove();
                new ResumeAccount();
            }
        }

        this.accountForm = () => {
            if (!document.querySelector('#formAccount')) {
                const formAccess = document.querySelector('#formAccess');
                if (formAccess) formAccess.remove();
                new AccountForm();
            }
        }

        this.accessForm = () => {
            if (!document.querySelector('#formAccess')) {
                const formAccount = document.querySelector('#formAccount');
                if (formAccount) formAccount.remove();
                new AccessForm();
            }
        }

        this.logoutForm = () => {
            if (!document.querySelector('#btnLogout')) {
                const content = document.querySelector('#content');
                const optAccount = document.querySelector('#optAccount');
                const numAccount = document.querySelector('#numAccount');
                if (numAccount) numAccount.remove();
                if (optAccount || content) {
                    content.remove();
                    optAccount.remove();
                }
                new LogoutForm();
            }
        }

        this.setOption = (event) => {
            const bankForm = document.querySelector('#bankForm');
            if (bankForm) bankForm.remove()
            const optUser = event.target.children[0].value;
            const check = event.target.children[0];
            check.checked = true;

            switch (optUser) {

                case 'account':
                    this.checkAccess() ? this.accountForm() : this.logoutForm();
                    break;

                case 'access':
                    this.checkAccess() ? this.accessForm() : this.resumeAccount();
                    break;
            }

        };
    }
}