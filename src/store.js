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
    this.currentTransaction = new Transaction(this);
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

// calc discounts on close transaction
// maybe a print method on close transaction that takes stock of items, total, discount, discounted total
