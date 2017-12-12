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

    scanItem(item){
      if (store.inventory[item].quantity > 0 && this.cart[item]){
        this.cart[item] += 1;
      } else if (store.inventory[item].quantity > 0) {
        this.cart[item] = 1;
      }

      if (store.inventory[item].discount && this.cart[item] >= store.inventory[item].discount.quantity){
        this.discounts += this.invetory[item].discount.amount;
      }

      this.cart.subTotal += store.inventory.prices[item];



    }

    purchase(){
      store.inventory.cart.forEach((item) => {
        store.inventory.itemCount[item] -= 1;
      });
    }
}


const addItem = () => {

};

const calculateDiscount = () => {

};


var storeOneInv = new Inventory(items);

var transaction1 = new Transaction(storeOneInv);
