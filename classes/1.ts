//A class is a bluebpirnt for creating objects

class Account {
  readonly id: number; //Readonly property
  owner: string;
  private _balance: number; //Private property - cannot be accessed outside the class
  nickame?: string; //Optional chaining

  constructor(id: number, owner: string, _balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = _balance;
  }

  //Method
  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    this._balance += amount;
  }
}
const adeAccount = new Account(1, "Azin", 500_000_000);
console.log(adeAccount);
adeAccount.deposit(40_000_000);
console.log(adeAccount);
