class Item {
  constructor(item){
    this.name = item.name;
    this.price = item.price;
    this.quantity = item.quantity;
    this.discount = item.discount;
  }

  addDiscount(discount){
    this.discount = new Discount(discount);
  }

  removeDiscount(){
    this.discount = undefined;
  }
}
