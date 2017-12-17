export default class Discounts {
  constructor(amount, quantity){
    this.quantity = quantity;
    this.amount = amount;
  }

  calculateItemDiscount(discount, itemQuantity, currentDiscountQuantity){
    let discountQuantity = this._calculateQuantity(discount, itemQuantity, currentDiscountQuantity);
    let discountAmount = this._calculateAmount(discount.amount, discountQuantity);

    return {
      quantity: discountQuantity,
      amount: discountAmount
    };
  }

  _calculateQuantity(discount, itemQuantity, currentDiscountQuantity){
    let newDiscountQuantity = Math.floor(itemQuantity / discount.quantity);
    if (newDiscountQuantity !== currentDiscountQuantity){
      return newDiscountQuantity;
    }
      return newDiscountQuantity;
  }

  _calculateAmount(amount, discountQuantity){
    return amount * discountQuantity;
  }
}

// this.percent = discount.percent;
