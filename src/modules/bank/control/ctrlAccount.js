import Pessoa from '../model/Pessoa.js';
import Account from '../model/Account.js';
import Current from '../model/AccCurrent.js';
import Savings from '../model/AccSavings.js';
import Access from '../model/Access.js';
import CtrlSession from './CtrlAccess.js';

export default class CtrlAccount {
    constructor() {

        this.getAccounts = () => {
            const clients = JSON.parse(localStorage.getItem('Client'));
            return clients === null ? {} : clients;
        }

        this.registerPessoa = function (clients) {
            const users = JSON.stringify(clients);
            localStorage.setItem('Client', users);
        }

        this.withdraw = (value) => {

            const session = new CtrlSession().getSession();
            const account = new Account(session.Account, session.Account.number, session.Account.balance);
            account.setDate();
            const current = new Current(account, session.limit)
            current.withdraw(value);

            this.updateAccount(account, current, session);
        }

        this.deposit = (value) => {

            const session = new CtrlSession().getSession();
            const account = new Account(session.Account, session.Account.number, session.Account.balance);
            account.setDate();
            const current = new Current(account, session.limit)
            current.deposit(value);

            this.updateAccount(account, current, session);
        }

        this.updateAccount = (account, current, session) => {

            account.balance = current.balance;

            const client = new Access(account, current.limit, session.income);

            const clients = this.getAccounts();
            clients[account.number] = client;
            this.registerPessoa(clients);
            new CtrlSession().setUserAccess(client);
        }
        this.getClient = (clientName, numAccount) => {

            const clients = this.getAccounts();
            const client = clients[numAccount]
            if (!client) {
                alert('Account not found!');
                return false;
            }

            const check = clientName === client.Account.name && numAccount === client.Account.number;

            if (check) {

                const user = new Pessoa(client.Account.name, client.Account.id);
                const account = new Account(user, client.Account.number, client.Account.balance, client.Account.date);
                const accCurrent = new Current(account, client.limit);
                const accSavings = new Savings(account, client.income);

                account.balance = accSavings.sumIncome();

                const access = new Access(account, accCurrent.limit, accSavings.income);

                return access;

            } else {
                return false;
            }
        }

        this.setAccount = (e) => {

            const clients = this.getAccounts();

            const name = e.target.children['inpName'].value;
            const id = e.target.children['inpID'].value;

            const user = new Pessoa(name, id);
            const account = new Account(user);

            account.createNumber();

            const current = new Current(account, 100);
            const savings = new Savings(account, 0);

            const client = new Access(account, current.limit, savings.income);

            clients[account.number] = client;

            this.registerPessoa(clients);

            const elChild = document.querySelector(`#${e.target.id}`);
            elChild.remove();

            new CtrlSession().setUserAccess(client);
        }
    }
}
