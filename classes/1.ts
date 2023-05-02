//A class is a bluebpirnt for creating objects

class Account {
  readonly id: number;
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  //Method
  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    this.balance += amount;
  }
}
const adeAccount = new Account(1, "Azin", 500_000_000);
console.log(adeAccount);
adeAccount.deposit(40_000_000);
console.log(adeAccount);
