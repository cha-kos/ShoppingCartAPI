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


      if (currentItem.discount && Math.floor(this.cart[itemID] / currentItem.discount.quantity !== this.discounts[itemID])){
        this.discounts += currentItem.discount.amount;
      }

      this.subTotal += currentItem.price;

      this.calculateTotal();

      // this.total = this.subTotal - this.discounts;
    }

    calculateTotal(){
      for (let item in discounts){
        this.totalDiscounts = discounts[item] * this.inventory.item.discount.amount;
      }
    }

    purchase(){
      store.inventory.cart.forEach((item) => {
        store.inventory.itemCount[item] -= 1;
      });
    }
}
