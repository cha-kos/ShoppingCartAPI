/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Discounts = function () {
  function Discounts(amount, quantity) {
    _classCallCheck(this, Discounts);

    this.quantity = quantity;
    this.amount = amount;
  }

  _createClass(Discounts, [{
    key: "calculateItemDiscount",
    value: function calculateItemDiscount(discount, itemQuantity) {
      var currentDiscountQuantity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var newDiscountQuantity = this._calculateQuantity(discount, itemQuantity, currentDiscountQuantity);
      var discountDifference = Math.abs(newDiscountQuantity - currentDiscountQuantity);
      var discountAmount = this._calculateAmount(discount.amount, discountDifference);

      return {
        quantity: newDiscountQuantity,
        amount: discountAmount
      };
    }
  }, {
    key: "_calculateQuantity",
    value: function _calculateQuantity(discount, itemQuantity, currentDiscountQuantity) {
      var newDiscountQuantity = Math.floor(itemQuantity / discount.quantity);
      if (newDiscountQuantity !== currentDiscountQuantity) {
        return newDiscountQuantity;
      }
      return newDiscountQuantity;
    }
  }, {
    key: "_calculateAmount",
    value: function _calculateAmount(amount, discountQuantity) {
      return amount * discountQuantity;
    }
  }]);

  return Discounts;
}();

// this.percent = discount.percent;


exports.default = Discounts;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _test = __webpack_require__(2);

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _test2.default)();

// console.log("entry");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = __webpack_require__(3);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// on the right track, maybe add more stuff
// add expectation messages, success messages, failure messages


var runTests = function runTests() {
  // make runTests() func and put in separate file
  var store = new _store2.default();
  var itemA = { name: "A", price: 2.00, quantity: 30 };
  var itemB = { name: "B", price: 12.00, quantity: 30 };
  var itemC = { name: "C", price: 1.25, quantity: 30 };
  var itemD = { name: "D", price: 0.15, quantity: 30 };
  store.inventory.addItem(itemA);
  store.inventory.addItem(itemB);
  store.inventory.addItem(itemC);
  store.inventory.addItem(itemD);
  store.inventory.addItemDiscount(itemA.name, 1, 4);
  store.inventory.addItemDiscount(itemC.name, 1.5, 6);

  store.newTransaction();
  console.log("Scans items in arbitrary order, and applies discount on item A");
  var cart1 = ["A", "B", "C", "D", "A", "B", "A", "A"];
  cart1.forEach(function (item) {
    store.scan(item);
  });
  console.log(store.total() === 32.4);
  store.closeTransaction();

  store.newTransaction();
  console.log("Computes the total with one instance of discount on Item C");
  var cart2 = ["C", "C", "C", "C", "C", "C", "C"];
  cart2.forEach(function (item) {
    store.scan(item);
  });
  console.log(store.total() === 7.25);

  console.log("Recomputes total after items have been removed and discount no longer applicable");
  store.removeItem("C", 2);
  console.log(store.total() === 6.25);
  store.closeTransaction();
  //

  store.newTransaction();
  console.log("Correctly computes a cart containing one of each item");
  var cart3 = ["A", "B", "C", "D"];
  cart3.forEach(function (item) {
    store.scan(item);
  });
  console.log(store.total() === 15.40);

  console.log("Scans multiple of the same item at once");
  store.scan("A", 7);
  console.log(store.currentTransaction.cart.A === 8);

  console.log("Applies multiple instances of quantity discount");
  console.log(store.currentTransaction.discountQuantities.A === 2 && store.currentTransaction.discountTotal === 2);

  console.log("Applies quantity discount for multiple items");
  store.scan("C", 5);
  console.log(store.currentTransaction.discountTotal === 3.5);

  console.log("Correctly closes a transaction");
  var transaction = store.currentTransaction;
  store.closeTransaction();
  console.log(store.currentTransaction === null);

  console.log("Saves a transaction to the Transaction History");
  console.log(store.transactionHistory[store.transactionHistory.length - 1] === transaction);

  console.log("Correctly tracks inventory");

  // outline what logic it is testing i.e.
  // add > remove > add
  // double wholesale discount
};
exports.default = runTests;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _transaction = __webpack_require__(4);

var _transaction2 = _interopRequireDefault(_transaction);

var _inventory = __webpack_require__(5);

var _inventory2 = _interopRequireDefault(_inventory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
  function Store(inventory) {
    _classCallCheck(this, Store);

    this.inventory = new _inventory2.default(inventory);
    this.currentTransaction = null;
    this.transactionHistory = [];
  }

  _createClass(Store, [{
    key: "newTransaction",
    value: function newTransaction() {
      if (this.currentTransaction) {
        return "Sorry, there is currently an active transaction.";
      }
      this.currentTransaction = new _transaction2.default(this);
    }
  }, {
    key: "scan",
    value: function scan(itemName, quantity) {
      this.currentTransaction.scanItem(itemName, quantity);
      return this.currentTransaction.cart;
    }
  }, {
    key: "removeItem",
    value: function removeItem(itemName, quantity) {
      // const currentItem = this.inventory.items[itemName];
      this.currentTransaction.removeItem(itemName, quantity);
      return this.currentTransaction.cart;
    }
  }, {
    key: "total",
    value: function total() {
      return this.currentTransaction.total;
    }
  }, {
    key: "cancelTransaction",
    value: function cancelTransaction() {
      this.currentTransaction = null;
      return "Transaction Cancelled";
    }
  }, {
    key: "closeTransaction",
    value: function closeTransaction() {
      for (var item in this.currentTransaction.cart) {
        this.inventory.items[item].quantity -= this.currentTransaction.cart[item];
      }
      this.transactionHistory.push(this.currentTransaction);
      this.currentTransaction = null;
      return "Transaction Closed";
    }
  }]);

  return Store;
}();

// calc discounts on close transaction
// maybe a print method on close transaction that takes stock of items, total, discount, discounted total


exports.default = Store;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transaction = function () {
  function Transaction(store) {
    _classCallCheck(this, Transaction);

    this.store = store;
    this.cart = {};
    this.subTotal = 0;
    this.discountQuantities = {};
    this.discountTotal = 0;
    this.total = 0;
  }

  _createClass(Transaction, [{
    key: "scanItem",
    value: function scanItem(itemName) {
      var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var currentItem = this.store.inventory.items[itemName];
      var currentItemCount = this.cart[itemName] ? this.cart[itemName] : 0;

      if (currentItem.quantity >= quantity + currentItemCount && this.cart[itemName]) {
        this.cart[itemName] += quantity;
      } else if (currentItem.quantity >= quantity + currentItemCount) {
        this.cart[itemName] = quantity;
      } else {
        console.log("Sorry, not enought inventory of " + currentItem.name);
        return;
      }

      if (this.store.inventory.itemDiscounts[itemName]) {
        this._updateDiscountAmount(itemName, "add");
      }
      this.subTotal += currentItem.price * quantity;
      this._calculateTotal();
    }
  }, {
    key: "removeItem",
    value: function removeItem(itemName) {
      var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var currentItem = this.store.inventory.items[itemName];
      this.cart[itemName] -= quantity;
      if (this.store.inventory.itemDiscounts[itemName]) {
        this._updateDiscountAmount(itemName, "remove");
      }
      this.subTotal -= currentItem.price * quantity;
      this._calculateTotal();
    }
  }, {
    key: "_calculateTotal",
    value: function _calculateTotal() {
      this.total = this.subTotal - this.discountTotal;
    }
  }, {
    key: "_updateDiscountAmount",
    value: function _updateDiscountAmount(itemName, command) {
      var updatedItemDiscount = this._calculateItemDiscount(itemName);
      this.discountQuantities[itemName] = updatedItemDiscount.quantity;
      if (command === "add") {
        this._addDiscount(updatedItemDiscount.amount);
      } else if (command === "remove") {
        this._removeDiscount(updatedItemDiscount.amount);
      }
    }
  }, {
    key: "_calculateItemDiscount",
    value: function _calculateItemDiscount(itemName) {
      var discount = this.store.inventory.itemDiscounts[itemName];
      return discount.calculateItemDiscount(discount, this.cart[itemName], this.discountQuantities[itemName]);
    }
  }, {
    key: "_addDiscount",
    value: function _addDiscount(amount) {
      this.discountTotal += amount;
    }
  }, {
    key: "_removeDiscount",
    value: function _removeDiscount(amount) {
      this.discountTotal -= amount;
    }
  }]);

  return Transaction;
}();

// have a "calculate discount" that is invoked once, on store.closeTransaction


exports.default = Transaction;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _item = __webpack_require__(6);

var _item2 = _interopRequireDefault(_item);

var _discount = __webpack_require__(0);

var _discount2 = _interopRequireDefault(_discount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Inventory = function () {
  function Inventory(items) {
    _classCallCheck(this, Inventory);

    if (!items) {
      items = {};
    }
    this.items = items;
    this.itemDiscounts = {};
  }

  _createClass(Inventory, [{
    key: "addItem",
    value: function addItem(item) {
      var newItem = new _item2.default(item);
      this.items[item.name] = newItem;
    }
  }, {
    key: "updateItem",
    value: function updateItem(updatedItem) {
      this.items[updatedItem.name] = Object.assign({}, this.items[updatedItem.name], updatedItem);
    }
  }, {
    key: "removeItem",
    value: function removeItem(item) {
      delete this.items[item];
    }
  }, {
    key: "addItemQuantity",
    value: function addItemQuantity(itemName, amount) {
      this.items[itemName].quantity += amount;
    }
  }, {
    key: "removeItemQuantity",
    value: function removeItemQuantity(itemName, amount) {
      this.items[itemName].quantity -= amount;
    }
  }, {
    key: "updateItemQuantity",
    value: function updateItemQuantity(itemName, amount) {
      this.items[itemName].quantity = amount;
    }
  }, {
    key: "addItemDiscount",
    value: function addItemDiscount(itemName, amount) {
      var quantity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      this.itemDiscounts[itemName] = new _discount2.default(amount, quantity);
    }
  }, {
    key: "removeItemDiscount",
    value: function removeItemDiscount(itemName) {
      delete this.discountItems[itemName];
    }
  }, {
    key: "updateItemDiscount",
    value: function updateItemDiscount(itemName, amount) {
      var quantity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      this.itemDiscounts[itemName] = new _discount2.default(amount, quantity);
    }
  }]);

  return Inventory;
}();

// add default parameters, edge cases for invalid quantities / itmes etc.


exports.default = Inventory;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _discount = __webpack_require__(0);

var _discount2 = _interopRequireDefault(_discount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Item = function Item(item) {
  _classCallCheck(this, Item);

  this.name = item.name;
  this.price = item.price;
  this.quantity = item.quantity;
};

exports.default = Item;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map