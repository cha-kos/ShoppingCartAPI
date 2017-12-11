class Item {
  constructor(item){
    this.name = item.name;
    this.price = item.price;
    this.wholesaleDiscount = item.wholesaleDiscount;
  }

  updateWholesaleDiscount(discount){
    this.wholesaleDiscount = discount;
  }

  removeWholesaleDiscount()
}
