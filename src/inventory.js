import Item from "./item";

export default class Inventory {
  constructor(items){
    if (!items) {
      items = {};
    }
    this.items = items;
  }

  addItem(item) {
    let newItem = new Item(item);
    this.items[item.name] = newItem;
  }

  updateItem(updatedItem) {
    this.items[updatedItem.name] = Object.assign({}, this.items[updatedItem.name], updateItem);
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


}
