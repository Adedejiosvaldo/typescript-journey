//A class is a bluebpirnt for creating objects
var Account = /** @class */ (function () {
    function Account(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    //Method
    Account.prototype.deposit = function (amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        this.balance += amount;
    };
    return Account;
}());
var adeAccount = new Account(1, "Azin", 500000000);
console.log(adeAccount);
adeAccount.deposit(40000000);
console.log(adeAccount);
