class Item {
  constructor(item){
    this.name = item.name;
    this.price = item.price;
    this.discount = item.discount;
    this.quantity = item.quantity;
  }

  addDiscount(discount){
    this.discount = new Discount(discount);
  }

  removeDiscount(){
    this.discount = undefined;
  }
}
