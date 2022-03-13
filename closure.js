/*
const bank = owner => {

    balance = 0;
    return amount => {

        // balance = balance + amount;
        balance += amount;
        return balance;

    }

}

const myBank = bank('me');
console.log(myBank(100));
console.log(myBank(300));
console.log(myBank(50));
console.log(myBank.balance);
console.log(myBank(200));
*/

const bank = owner => {

    balance = 0;
    return {

        deposite: amount => {

            // balance = balance + amount;
            balance += amount;
            return balance;

        },

        withdraw: amount => {

            // balance = balance - amount;
            balance -= amount;
            return balance;

        }

    }

}

const myBank = bank('me');
console.log(myBank.deposite(100));
console.log(myBank.deposite(300));
console.log(myBank.deposite(50));
console.log(myBank.balance);
console.log(myBank.deposite(200));
console.log(myBank.withdraw(100));
console.log(myBank.withdraw(200));