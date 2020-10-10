import Access from '../model/Access';
import CtrlAccount from './CtrlAccount.js';

export default class CtrlSession extends Access {
    constructor() {
        super(Access);

        this.getSession = () => {
            const strAccess = localStorage.getItem('Access');
            if (!strAccess) return false;
            const access = JSON.parse(strAccess);
            return access;
        }

        this.revokAccess = () => {
            localStorage.removeItem('Access');
        }

        this.setLogout = () => {
            this.revokAccess();
            window.location.reload();
        }

        this.setUserAccess = (access) => {
            if (!access) return;
            this.registerAccess(access);
        }

        this.checkAccess = () => {

            const access = this.getSession();

            if (!access) return true;

            const date = new Date(access.date);
            date.setHours(date.getHours + 3)
            const now = new Date();
            now.setHours(now.getHours + 3)

            now.setHours(now.getHours() - 1);

            return now > date;
        }
        this.setAccess = (e) => {

            const clientName = e.target.children['inpName'].value;
            const numAccount = e.target.children['inpAccount'].value;

            this.ctrlAcount = new CtrlAccount();
            const access = this.ctrlAcount.getClient(clientName, numAccount);
            if (access) {
                const elChild = document.querySelector(`#${e.target.id}`);
                elChild.remove();

                this.setUserAccess(access);
                return true;
            } else {
                return false;
            }
        }
    }
}
