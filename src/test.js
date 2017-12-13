import Store from "./store";

window.store = new Store();
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

let cart2 = ["C", "C", "C", "C", "C", "C", "C"];

cart2.forEach(item => {
  store.scan(item);
});

let cart3 = ["A", "B", "C", "D"];

cart3.forEach(item => {
  store.scan(item);
});
