import Account from "./Account.js";

export default class Savings extends (Account) {
    constructor(Account, income) {
        super(Account);
        this.number = Account.number;
        this.balance = Account.balance;
        this.date = Account.date;
        this.income = income;

    }

    sumIncome() {
        const now = new Date();
        now.setHours(now.getHours() - 3);
        const lastMoviment = new Date(this.date);
        const period = ((now.getTime() - lastMoviment.getTime()) / (1000 * 60 * 60)).toFixed(0);

        this.income = Number(this.balance) * (0.01 * Number(period));

        return Number(this.balance) + Number(this.income);
    }
}