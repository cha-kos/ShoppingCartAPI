class Inventory {
  constructor(items){
    this.items = items;
  }

  addItem(item) {
    this.items[item.name] = new Item(item);
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
