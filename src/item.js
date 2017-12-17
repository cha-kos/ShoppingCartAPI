import Discount from "./discount";

export default class Item {
  constructor(item){
    this.name = item.name;
    this.price = item.price;
    this.quantity = item.quantity;
  }
}
