export default class Transaction{

    constructor(store){
      this.store = store;
      this.cart = {};
      this.subTotal = 0;
      this.discounts = 0;
      this.total = 0;
    }

    scanItem(itemID, quantity){
      var currentItem = store.inventory.items[itemID];
      if (!quantity) {
        quantity = 1;
      }

      if (currentItem.quantity >= quantity && this.cart[itemID]){
        this.cart[itemID] += quantity;
      } else if (currentItem.quantity >= quantity) {
        this.cart[itemID] = quantity;
      }

      if (currentItem.discount && this.cart[itemID] >= currentItem.discount.quantity){
        this.discounts += currentItem.discount.amount;
      }

      this.subTotal += currentItem.price;

      this.total = this.subTotal - this.discounts;
    }



    purchase(){
      store.inventory.cart.forEach((item) => {
        store.inventory.itemCount[item] -= 1;
      });
    }
}
