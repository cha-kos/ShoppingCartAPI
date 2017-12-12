import Transaction from "./transaction.js";
import Inventory from "./inventory.js";

class Store {
  constructor(inventory) {
    this.inventory = new Inventory(inventory);
    this.currentTransaction = null;
    this.transactionHistory = [];
  }

  newTransaction(){
    if (this.currentTransaction){
      return "Sorry, there is currently an active transaction.";
    }
    this.currentTransaction = new Transaction(this);
  }

  scan(item, quantity){
    this.currentTransaction.scanItem(item, quantity);
    return this.currentTransaction.cart;
  }

  total(){
    return this.currentTransaction.total;
  }

  closeTransaction(){
    this.currentTransaction.purchase();
    delete this.currentTransaction.store;
    this.transactionHistory.push(this.currentTransaction);
    this.currentTransaction = null;
    return "Transaction Closed";
  }
}


window.store = new Store();
var itemA = {name: "A", price: 2.00, quantity: 30, discount: {amount: 1.00, quantity: 4}};
var itemB = {name: "B", price: 12.00, quantity: 30};
var itemC = {name: "C", price: 1.25, quantity: 30, discount: {amount: 1.50, quantity: 6}};
var itemD = {name: "D", price: 0.15, quantity: 30};
store.inventory.addItem(itemA);
store.inventory.addItem(itemB);
store.inventory.addItem(itemC);
store.inventory.addItem(itemD);
store.newTransaction();

var cart1 = ["A", "B", "C", "D", "A", "B", "A", "A"];

cart1.forEach(item => {
  store.scan(item);
});

// var cart2 = ["C", "C", "C", "C", "C", "C", "C"];
//
// cart2.forEach(item => {
//   store.scan(item);
// });

// var cart2 = ["A", "B", "C", "D"];
//
// cart2.forEach(item => {
//   store.scan(item);
// });
