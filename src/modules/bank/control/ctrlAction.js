import Resume from '../view/vwResume';
import { withdraw, deposit } from './ctrlAccount';

const optWithdraw = (inpWithdraw, bntWithdraw) => {
    const inpDopsit = document.querySelector('#inpDeposit');
    const btnDopsit = document.querySelector('#btnDeposit');
    const formDiv = document.querySelector('#dvInput');
    if (inpDopsit !== null) {
        inpDopsit.value = null;
        formDiv.removeChild(inpDopsit);
        formDiv.removeChild(btnDopsit);
    }

    dvInput.appendChild(inpWithdraw);
    dvInput.appendChild(bntWithdraw);
}

const optDeposit = (inpDeposit, bntDeposit) => {
    const inpWithdraw = document.querySelector('#inpWithdraw');
    const btnWithdraw = document.querySelector('#btnWithdraw');
    const formDiv = document.querySelector('#dvInput');

    if (inpWithdraw !== null) {
        inpWithdraw.value = null;
        formDiv.removeChild(inpWithdraw);
        formDiv.removeChild(btnWithdraw);
    }

    dvInput.appendChild(inpDeposit);
    dvInput.appendChild(bntDeposit);
}

const action = (e) => {
    const action = e.submitter.value;

    const content = document.querySelector('#content');
    const optAccount = document.querySelector('#optAccount');

    switch (action) {
        case 'Withdraw':
            const withdrawValue = Number(e.target[0].value).toFixed(2);
            withdraw(withdrawValue);

            e.target.remove();
            content.remove();
            optAccount.remove();
            new Resume();
            break;

        case 'Deposit':
            const depositValue = Number(e.target[0].value).toFixed(2);
            deposit(depositValue);

            e.target.remove();
            content.remove();
            optAccount.remove();
            new Resume();
            break;
    }
}
export { action, optDeposit, optWithdraw };