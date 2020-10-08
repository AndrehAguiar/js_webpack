import { getSession } from './ctrlAccess';
import CreateCurrent from '../view/vwCurrent';
import CreateSavings from '../view/vwSavings';

const createSavings = (session) => {
    if (!document.querySelector('#spnIncome')) {
        const spnLimit = document.querySelector('#spnLimit');
        if (spnLimit) spnLimit.remove();
        if (document.querySelector('#bankForm')) bankForm.remove();
        new CreateSavings(session);
    }
}

const createCurrent = (session) => {
    if (!document.querySelector('#spnLimit')) {
        if (document.querySelector('#spnIncome')) spnIncome.remove();
        if (document.querySelector('#bankForm')) bankForm.remove();
        new CreateCurrent(session);
    }
}

const resumeAccount = (e) => {

    const session = getSession();
    if (!e) return session;

    const optAccount = e.target.children[0].value;
    e.target.children[0].checked = true;

    switch (optAccount) {

        case 'savings':
            createSavings(session);
            break;
        case 'current':
            createCurrent(session);
            break;
    }
    const numAccount = document.querySelector('#numAccount');
    if (numAccount) numAccount.remove();
}

export default resumeAccount;