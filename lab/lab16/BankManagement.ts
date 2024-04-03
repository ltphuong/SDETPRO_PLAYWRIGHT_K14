import BankAccount from "./BankAccount";
import SavingAccount from "./SavingAccount";

const savingAccount = new SavingAccount();
console.log((`Before depositing: ${savingAccount.getBalance()}`));
savingAccount.deposit(1000);

console.log((`After depositing: ${savingAccount.getBalance()}`));
savingAccount.withdraw(500);

console.log((`After withdraw: ${savingAccount.getBalance()}`));
savingAccount.withdraw(501);
console.log((`After withdraw: ${savingAccount.getBalance()}`));
