export default class Transaction{

    constructor(store){
      this.store = store;
      this.cart = {};
      this.subTotal = 0;
      this.discountQuantities = {};
      this.discountTotal = 0;
      this.total = 0;
    }

    scanItem(itemName, quantity = 1){
      let currentItem = this.store.inventory.items[itemName];
      let currentItemCount = this.cart[itemName] ? this.cart[itemName] : 0;

      if (currentItem.quantity >= quantity + currentItemCount && this.cart[itemName]){
        this.cart[itemName] += quantity;
      } else if (currentItem.quantity >= quantity + currentItemCount) {
        this.cart[itemName] = quantity;
      } else{
        console.log( `Sorry, not enought inventory of ${currentItem.name}` );
        return;
      }

      if (this.store.inventory.itemDiscounts[itemName]){
        this._updateDiscountAmount(itemName, "add");
      }
      this.subTotal += currentItem.price * quantity;
      this._calculateTotal();
    }

    removeItem(itemName, quantity = 1){
      let currentItem = this.store.inventory.items[itemName];
      this.cart[itemName] -= quantity;
      if (this.store.inventory.itemDiscounts[itemName]){
        this._updateDiscountAmount(itemName, "remove");
      }
      this.subTotal -= currentItem.price * quantity;
      this._calculateTotal();
    }

    _calculateTotal(){
      this.total = this.subTotal - this.discountTotal;
    }

    _updateDiscountAmount(itemName, command){
        let updatedItemDiscount = this._calculateItemDiscount(itemName);
        this.discountQuantities[itemName] = updatedItemDiscount.quantity;
        if (command === "add"){
          this._addDiscount(updatedItemDiscount.amount);
        } else if (command === "remove") {
          this._removeDiscount(updatedItemDiscount.amount);
        }
    }

    _calculateItemDiscount(itemName){
      let discount = this.store.inventory.itemDiscounts[itemName];
      return discount.calculateItemDiscount(discount, this.cart[itemName], this.discountQuantities[itemName]);
    }

    _addDiscount(amount){
      this.discountTotal += amount;
    }

    _removeDiscount(amount){
      this.discountTotal -= amount;
    }
}
