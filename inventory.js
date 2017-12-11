class Inventory {
  constructor(items){
    this.items = items;
  }

  addItem(item) {
    this.items[item.name] = new Item(item);
  }

  updateItem(currentItem, updatedItem) {
    this.items[currentItem.name] = Object.assign({}, this.items[currentItem.name], updateItem);
  }

  addItemQuantity(itemName, amount){
    this.items[itemName].quantity += amount;
  }

  removeItemQuantity(itemName, amount){
    this.items[itemName].quantity -= amount;
  }

  updateItemQuantity(itemName, amount){
    this.items[itemName].quantity += amount;
  }


}
