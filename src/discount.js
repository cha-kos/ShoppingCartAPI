export default class Discounts {
  constructor(amount, quantity){
    this.quantity = quantity;
    this.amount = amount;
  }

  calculateItemDiscount(discount, itemQuantity, currentDiscountQuantity = 0){
    let newDiscountQuantity = this._calculateQuantity(discount, itemQuantity, currentDiscountQuantity);
    let discountDifference = Math.abs(newDiscountQuantity - currentDiscountQuantity);
    let discountAmount = this._calculateAmount(discount.amount, discountDifference);

    return {
      quantity: newDiscountQuantity,
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
