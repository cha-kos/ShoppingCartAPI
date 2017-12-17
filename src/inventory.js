import Item from "./item";

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

  addItemQuantity(itemName, amount){
    this.items[itemName].quantity += amount;
  }

  removeItemQuantity(itemName, amount){
    this.items[itemName].quantity -= amount;
  }

  updateItemQuantity(itemName, amount){
    this.items[itemName].quantity = amount;
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

// add default parameters, edge cases for invalid quantities / itmes etc.
