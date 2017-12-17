export default class Discounts {
  constructor(amount, quantity){
    this.quantity = discount.quantity;
    this.amount = discount.amount;
  }

  calculateDiscountQuantity (itemID, itemQuantity, currentDiscountQuantity){
    let newDiscountQuantity = Math.floor(this.cart[itemID] / currentItem.discount.quantity);
    if (newDiscountQuantity !== currentDiscountQuantity){
      return newDiscountQuantity;
    }
      return newDiscountQuantity;
  }
}

// this.percent = discount.percent;
