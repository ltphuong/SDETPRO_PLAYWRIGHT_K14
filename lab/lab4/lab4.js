const readline = require('readline-sync')

// Declare bank account number 1
const objBankAccountNum1 = {
    accountNumber: "111122223333",
    routingNumber: "123456789",
    balance: 1000000
};

// Declare bank account number 2
const objBankCountNum2 = JSON.parse(JSON.stringify(objBankAccountNum1));
objBankCountNum2.accountNumber = "666677778888";
objBankCountNum2.routingNumber = "987654321";
objBankCountNum2.balance = 9000000;

const bankAccounts = [objBankAccountNum1, objBankCountNum2]

let isPlaying = true;
while (isPlaying) {
    printMenu();
    let userOption = getUserOptionFromKeyboard();

    if (userOption == 0) {
        isPlaying = false;
    }
    else if (userOption == 1) {
        findAndShowAccountNumber(bankAccounts);
    }
    else if (userOption == 2) {
        let returnAccount = findAndShowAccountNumber(bankAccounts);
        if (returnAccount != null) {
            let moneyInput = getMoneyFromKeyboard();
            withdraw(returnAccount, moneyInput);
        }
    }
    else {
        console.log('Wrong number. Please input from 0 to 2');
    }
    console.log("\n");
}

function printMenu() {
    console.log('* ===== Banking application =====');
    console.log('1. Find an account');
    console.log('2. Withdraw money');
    console.log('0. Exit the program!');
}

/**
 * Find account number in array
 */
function findAccountNumber(accountNumInput, bankAccounts) {
    for (const bankAccount of bankAccounts) {
        let currentAccountNum = bankAccount.accountNumber;
        if (currentAccountNum === accountNumInput) {
            return bankAccount
        }
    }
    return null
}

/**
 * Show account details
 */
function showAccountNumberInfo(bankAccount) {
    if (bankAccount == null) {
        console.log("=> Can not find your account number");
    }
    else {
        console.log(`=> Account Number: ${bankAccount.accountNumber}`);
        console.log(`=> Current Balance: ${bankAccount.balance}`);
    }
}

/**
 * Find and show account number
 * if found -> show account details
 */
function findAndShowAccountNumber(bankAccounts) {
    let accountNumInput = getAccountNumberFromKeyboard();
    let returnAccount = findAccountNumber(accountNumInput, bankAccounts);
    showAccountNumberInfo(returnAccount);
    return returnAccount
}

/**
 * Withdraw
 */
function withdraw(accountNumber, moneyInput) {
    if (isNaN(moneyInput)) {
        console.log("Your input is not a number. Please input again!");
    }
    else if(moneyInput < 0){
        console.log("Your input is invalid. You should input positive number");
    }
    else {
        if(moneyInput > accountNumber.balance){
            console.log('Current balance is not enough. Please input again!');
        }
        else{
            console.log('Withdraw Success');
            accountNumber.balance = accountNumber.balance - Number(moneyInput);
            console.log('Remaining balance: ', accountNumber.balance);
        }
    }
}

/**
 * Input option
 */
function getUserOptionFromKeyboard() {
    return readline.question('Please select your option: ')
}

/**
 * Input your account number
 */
function getAccountNumberFromKeyboard() {
    return readline.question('Input your account number: ')
}

/**
 * Input your money to withdraw
 */
function getMoneyFromKeyboard() {
    return readline.question('Input your money: ')
}