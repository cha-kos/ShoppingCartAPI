export default class Transaction{

    constructor(store){
      this.store = store;
      this.cart = {};
      this.subTotal = 0;
      this.discounts = {};
      this.totalDiscounts = 0;
      this.total = 0;
    }

    scanItem(itemID, quantity = 1){
      var currentItem = store.inventory.items[itemID];
      var currentItemCount = this.cart[itemID] ? this.cart[itemID] : 0;

      if (currentItem.quantity >= quantity + currentItemCount && this.cart[itemID]){
        this.cart[itemID] += quantity;
      } else if (currentItem.quantity >= quantity + currentItemCount) {
        this.cart[itemID] = quantity;
      } else{
        console.log( `Sorry, item ${currentItem.name} is currently out of stock.` );
        return;
      }

      if (currentItem.discount){
        var discountQuantity = Math.floor(this.cart[itemID] / currentItem.discount.quantity);
        if (discountQuantity > 0 && discountQuantity !== this.discounts[itemID]){
          this.discounts[itemID] = Math.floor(this.cart[itemID] / currentItem.discount.quantity);
          this.updateTotalDiscounts();
        }
      }

      this.subTotal += currentItem.price * quantity;

      this.calculateTotal();
    }

    calculateTotal(){
      this.total = this.subTotal - this.totalDiscounts;
    }

    updateTotalDiscounts(){
      this.totalDiscounts = 0;
      for (let item in this.discounts){
        this.totalDiscounts += this.discounts[item] * this.store.inventory.items[item].discount.amount;
      }
    }

    purchase(){
      for (let item in this.cart) {
        store.inventory.items[item].quantity -= this.cart[item];
      }
    }
}
