import Discount from "./discount";

export default class Item {
  constructor(item){
    this.name = item.name;
    this.price = item.price;
    this.quantity = item.quantity;
    if (item.discount){
      this.discount = new Discount(item.discount);
    } else {
      this.discount = null;
    }
  }

  addDiscount(discount){
    this.discount = new Discount(discount);
  }

  removeDiscount(){
    this.discount = null;
  }
}
