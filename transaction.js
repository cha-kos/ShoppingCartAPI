class Transaction{

    constructor(inventory){
      this.inventory = inventory;
      this.cart = {};
      this.subTotal = 0;
      this.discounts = 0;
      this.total = 0;
    }

    scanItem(item){
      if (this.inventory.itemCount[item] > 0 && this.cart[item]){
        this.cart[item] += 1;
      } else {
        this.cart[item] = 1;
      }
      this.cart.total += this.inventory.prices[item];
    }

    purchase(){
      this.inventory.cart.forEach((item) => {
        this.inventory.itemCount[item] -= 1;
      });
    }


}


const addItem = () => {

};

const calculateDiscount = () => {

};


var storeOneInv = new Inventory(items);

var transaction1 = new Transaction(storeOneInv);
