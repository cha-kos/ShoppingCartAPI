import Transaction from "./transaction.js";
import Inventory from "./inventory.js";

export default class Store {
  constructor(inventory) {
    this.inventory = new Inventory(inventory);
    this.currentTransaction = null;
    this.transactionHistory = [];
  }

  newTransaction(){
    if (this.currentTransaction){
      return "Sorry, there is currently an active transaction.";
    }
    this.currentTransaction = new Transaction();
  }

  scan(itemID, quantity){
    const currentItem = this.inventory.items[itemID];
    if (!currentItem){
      return "That item does not exist in our inventory";
    }
    this.currentTransaction.scanItem(currentItem, quantity);
    return this.currentTransaction.cart;
  }

  removeItem(itemID, quantity){
    this.currentTransaction.removeItem(itemID, quantity);
    return this.currentTransaction.cart;
  }

  total(){
    return this.currentTransaction.total;
  }

  cancelTransaction(){
    this.currentTransaction = null;
    return "Transaction Cancelled";
  }

  closeTransaction(){
    for (let item in this.currentTransaction.cart) {
      this.inventory.items[item].quantity -= this.currentTransaction.cart[item];
    }
    this.transactionHistory.push(this.currentTransaction);
    this.currentTransaction = null;
    return "Transaction Closed";
  }

}



// window.store = new Store();
// let itemA = {name: "A", price: 2.00, quantity: 30, discount: {amount: 1.00, quantity: 4}};
// let itemB = {name: "B", price: 12.00, quantity: 30};
// let itemC = {name: "C", price: 1.25, quantity: 30, discount: {amount: 1.50, quantity: 6}};
// let itemD = {name: "D", price: 0.15, quantity: 30};
// store.inventory.addItem(itemA);
// store.inventory.addItem(itemB);
// store.inventory.addItem(itemC);
// store.inventory.addItem(itemD);
// store.newTransaction();
//
// let cart1 = ["A", "B", "C", "D", "A", "B", "A", "A"];
//
// cart1.forEach(item => {
//   store.scan(item);
// });
//
// let cart2 = ["C", "C", "C", "C", "C", "C", "C"];
//
// cart2.forEach(item => {
//   store.scan(item);
// });
//
// let cart3 = ["A", "B", "C", "D"];
//
// cart3.forEach(item => {
//   store.scan(item);
// });
