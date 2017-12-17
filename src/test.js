import Store from "./store";

// on the right track, maybe add more stuff
// add expectation messages, success messages, failure messages


const runTests = () =>{
    // make runTests() func and put in separate file
  let store = new Store();
  let itemA = {name: "A", price: 2.00, quantity: 30};
  let itemB = {name: "B", price: 12.00, quantity: 30};
  let itemC = {name: "C", price: 1.25, quantity: 30};
  let itemD = {name: "D", price: 0.15, quantity: 30};
  store.inventory.addItem(itemA);
  store.inventory.addItem(itemB);
  store.inventory.addItem(itemC);
  store.inventory.addItem(itemD);
  store.inventory.addItemDiscount(itemA.name, 1, 4);
  store.inventory.addItemDiscount(itemC.name, 1.5, 6);

  store.newTransaction();
    console.log("Scans items in arbitrary order, and applies discount on item A");
      let cart1 = ["A", "B", "C", "D", "A", "B", "A", "A"];
      cart1.forEach(item => {
        store.scan(item);
      });
      console.log(store.total() === 32.4);
  store.closeTransaction();

  store.newTransaction();
    console.log("Computes the total with one instance of discount on Item C");
      let cart2 = ["C", "C", "C", "C", "C", "C", "C"];
      cart2.forEach(item => {
        store.scan(item);
      });
      console.log(store.total() === 7.25);

    console.log("Recomputes total after items have been removed and discount no longer applicable");
      store.removeItem("C", 2);
      console.log(store.total() === 6.25);
  store.closeTransaction();
  //

  store.newTransaction();
    console.log("Correctly computes a cart containing one of each item");
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
      



  // outline what logic it is testing i.e.
  // add > remove > add
  // double wholesale discount
};
export default runTests;
