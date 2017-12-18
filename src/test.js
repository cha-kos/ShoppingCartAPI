import Store from "./store";

// on the right track, maybe add more stuff
// add expectation messages, success messages, failure messages


const runTests = () =>{
  let store = new Store();
  let itemA = {name: "A", price: 2.00, quantity: 100};
  let itemB = {name: "B", price: 12.00, quantity: 100};
  let itemC = {name: "C", price: 1.25, quantity: 100};
  let itemD = {name: "D", price: 0.15, quantity: 100};
  store.inventory.addItem(itemA);
  store.inventory.addItem(itemB);
  store.inventory.addItem(itemC);
  store.inventory.addItem(itemD);
  store.inventory.addItemDiscount("A", 1, 4);
  store.inventory.addItemDiscount("C", 1.5, 6);

  store.newTransaction();
    console.log("Scans items in arbitrary order, and applies discount on item A (Example Cart 1)");
      let cart1 = ["A", "B", "C", "D", "A", "B", "A", "A"];
      cart1.forEach(item => {
        store.scan(item);
      });
      console.log(store.total() === 32.4);
  store.closeTransaction();

  store.newTransaction();
    console.log("Computes the total with one instance of discount on Item C (Example Cart 2)");
      let cart2 = ["C", "C", "C", "C", "C", "C", "C"];
      cart2.forEach(item => {
        store.scan(item);
      });
      console.log(store.total() === 7.25);

    console.log("Removes item(s) and correctly recomputes total, removing discount");
      store.removeItem("C", 2);
      console.log(store.total() === 6.25);
  store.closeTransaction();

  store.newTransaction();
    console.log("Correctly computes a cart containing one of each item (Example Cart 3)");
      let cart3 = ["A", "B", "C", "D"];
      cart3.forEach(item => {
        store.scan(item);
      });
      console.log(store.total() === 15.40);

    console.log("Scans multiple of the same item at once");
      store.scan("A", 7);
      console.log(store.currentTransaction.cart.A === 8);

    console.log("Applies multiple instances of quantity discount");
      console.log(store.currentTransaction.discountQuantities.A === 2 &&
        store.currentTransaction.discountTotal === 2);

    console.log("Applies quantity discount for multiple items");
      store.scan("C", 5);
      console.log(store.currentTransaction.discountTotal === 3.5);

    console.log("Correctly closes a transaction");
      let transaction = store.currentTransaction;
      store.closeTransaction();
      console.log(store.currentTransaction === null);

    console.log("Saves a transaction to the Transaction History");
      console.log(store.transactionHistory[store.transactionHistory.length - 1] === transaction);

    console.log("Correctly tracks inventory");
      console.log(store.inventory.items.A.quantity === 88);

    console.log("Successfully cancels a transaction");
      store.newTransaction();
      store.cancelTransaction();
      console.log(store.currentTransaction === null);
};
export default runTests;


// outline what logic it is testing i.e.
// add > remove > add
// double wholesale discount
