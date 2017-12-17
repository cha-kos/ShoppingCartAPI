import Item from "./item";
import Discount from "./discount";

export default class Inventory {
  constructor(items){
    if (!items) {
      items = {};
    }
    this.items = items;
    this.itemDiscounts = {};
  }

  addItem(item) {
    let newItem = new Item(item);
    this.items[item.name] = newItem;
  }

  updateItem(updatedItem) {
    this.items[updatedItem.name] = Object.assign({}, this.items[updatedItem.name], updatedItem);
  }

  removeItem(item){
    delete this.items[item];
  }

  addItemQuantity(itemName, quantity = 1){
    this.items[itemName].quantity += quantity;
  }

  removeItemQuantity(itemName, quantity = 1){
    this.items[itemName].quantity -= quantity;
  }

  updateItemQuantity(itemName, quantity){
    if (quantity) {
      this.items[itemName].quantity = quantity;
    }
  }

  addItemDiscount(itemName, amount, quantity = 1){
    this.itemDiscounts[itemName] = new Discount(amount, quantity);
  }

  removeItemDiscount(itemName){
    delete this.discountItems[itemName];
  }

  updateItemDiscount(itemName, amount, quantity = 1){
    this.itemDiscounts[itemName] = new Discount(amount, quantity);
  }
}
