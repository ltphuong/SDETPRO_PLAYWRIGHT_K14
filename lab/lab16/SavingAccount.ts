import BankAccount from "./BankAccount";

export default class SavingAccount extends BankAccount {
    getBalance(): number {
        return this.balance;
    }
    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
        }
        else {
            throw new Error(`Your current balance is: ${this.balance}, 
                            but you requested ${amount}
                            Maximum amount you can withdraw is ${this.balance}`
            )
        }
    }
    deposit(amount: number): number {
        this.balance = this.balance + amount;
        return this.balance;
    }

}