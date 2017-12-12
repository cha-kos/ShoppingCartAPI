import Transaction from "transaciton";

class Store {
  constructor(inventory) {
    this.inventory = new Inventory(inventory);
    this.currentTransaction = undefined;
    this.transactionHistory = [];
  }

  newTransaction(){
    this.currentTransaciton = new Transaction(this);
  }

  saveTransaction(){

  }
}
