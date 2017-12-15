import Store from "./store";

// on the right track, maybe add more stuff
// add expectation messages, success messages, failure messages


// make runTests() func and put in separate file
let store = new Store();
let itemA = {name: "A", price: 2.00, quantity: 30, discount: {amount: 1.00, quantity: 4}};
let itemB = {name: "B", price: 12.00, quantity: 30};
let itemC = {name: "C", price: 1.25, quantity: 30, discount: {amount: 1.50, quantity: 6}};
let itemD = {name: "D", price: 0.15, quantity: 30};
store.inventory.addItem(itemA);
store.inventory.addItem(itemB);
store.inventory.addItem(itemC);
store.inventory.addItem(itemD);
store.newTransaction();

let cart1 = ["A", "B", "C", "D", "A", "B", "A", "A"];

cart1.forEach(item => {
  store.scan(item);
});
console.log("Computes the sum correctly with one insance of discount on item A");
console.log(store.total() === 32.4);

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


// outline what logic it is testing i.e.
// add > remove > add
// double wholesale discount
