export default class Transaction{

    constructor(store){
      super(store);
      // this.id = store.transactionHistory.length;
      // this.inventory = store.inventory;
      this.cart = {};
      this.subTotal = 0;
      this.discounts = 0;
      this.total = 0;
    }

    scanItem(item, quantity){
      if (!quantity) {
        quantity = 1;
      }

      if (store.inventory[item].quantity >= quantity && this.cart[item]){
        this.cart[item] += quantity;
      } else if (store.inventory[item].quantity >= quantity) {
        this.cart[item] = quantity;
      }

      if (store.inventory[item].discount && this.cart[item] >= store.inventory[item].discount.quantity){
        this.discounts += this.invetory[item].discount.amount;
      }

      this.subTotal += store.inventory.prices[item];

      this.total = this.subTotal - this.discounts;
    }

    

    purchase(){
      store.inventory.cart.forEach((item) => {
        store.inventory.itemCount[item] -= 1;
      });
    }
}


var storeOneInv = new Inventory(items);

var transaction1 = new Transaction(storeOneInv);
