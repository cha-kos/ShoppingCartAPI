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

      if (currentItem.quantity >= quantity && this.cart[itemID]){
        this.cart[itemID] += quantity;
      } else if (currentItem.quantity >= quantity) {
        this.cart[itemID] = quantity;
      }


      // if (currentItem.discount && this.cart[itemID] % currentItem.discount.quantity === 0){
      //   this.discounts += currentItem.discount.amount;
      // }
      if (currentItem.discount && Math.floor(this.cart[itemID] / currentItem.discount.quantity) !== this.discounts[itemID]){
        this.discounts[itemID] = Math.floor(this.cart[itemID] / currentItem.discount.quantity);
      }

      this.subTotal += currentItem.price * quantity;

      this.calculateTotal();
    }

    calculateTotal(){
      this.updateTotalDiscounts();
      this.total = this.subTotal - this.totalDiscounts;
    }

    updateTotalDiscounts(){
      this.totalDiscounts = 0;
      for (let item in this.discounts){
        this.totalDiscounts += this.discounts[item] * this.store.inventory.items[item].discount.amount;
      }
    }

    purchase(){
      store.inventory.cart.forEach((item) => {
        store.inventory.itemCount[item] -= 1;
      });
    }
}
