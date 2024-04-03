export default abstract class BankAccount {
    protected accountId: string = '';
    protected balance: number = 0;

    abstract getBalance(): number;
    abstract withdraw(amount: number): void;
    abstract deposit(amount: number): number;
}