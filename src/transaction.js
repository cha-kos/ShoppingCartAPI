export default class Transaction{

    constructor(store){
      // this.store = store;
      this.cart = {};
      this.subTotal = 0;
      this.discounts = {};
      this.totalDiscounts = 0;
      this.total = 0;
    }

    scanItem(currentItem, quantity = 1){
      // const currentItem = store.inventory.items[itemID];
      let itemID = currentItem.name;
      let currentItemCount = this.cart[itemID] ? this.cart[itemID] : 0;

      if (currentItem.quantity >= quantity + currentItemCount && this.cart[itemID]){
        this.cart[itemID] += quantity;
      } else if (currentItem.quantity >= quantity + currentItemCount) {
        this.cart[itemID] = quantity;
      } else{
        console.log( `Sorry, item ${currentItem.name} is currently out of stock.` );
        return;
      }

      if (currentItem.discount){
        let discountQuantity = Math.floor(this.cart[itemID] / currentItem.discount.quantity);
        if (discountQuantity > 0 && discountQuantity !== this.discounts[itemID]){
          this.discounts[itemID] = Math.floor(this.cart[itemID] / currentItem.discount.quantity);
          this.updateTotalDiscounts(currentItem);
        }
      }

      this.subTotal += currentItem.price * quantity;

      this.calculateTotal();
    }

    removeItem(itemID, quantity = 1){
      this.cart[itemID] -= quantity;
    }

    calculateTotal(){
      this.total = this.subTotal - this.totalDiscounts;
    }

    updateTotalDiscounts(currentItem){
      this.totalDiscounts = 0;
      for (let item in this.discounts){
        this.totalDiscounts += this.discounts[item] * currentItem.discount.amount;
      }
    }

    // purchase(){
    //   for (let item in this.cart) {
    //     store.inventory.items[item].quantity -= this.cart[item];
    //   }
    // }
}
