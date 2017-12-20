## ShoppingCartAPI

###Overview

I solved this challenge with OOP based JavaScript using ES6 Classes. To effectively
create the desired functionality I designed this API using five class Objects. The
class hierarchy can be illustrated as follows:
  - Store
    - Transaction
    - Inventory
      - Item
      - Discount

In short, the Store class holds the Inventory and handles Transactions. The Inventory
holds Items created using the Item class, along with Discounts created using the Discount
class. A Transaction can be initiated from within the Store, and has access to the Inventory
in order to successfully complete a transaction.

### Getting Started

In order to run the tests, first please make sure you have `node` installed on your computer
by typing the commands `node -v` into your terminal. The current running version
should be displayed.

If you do not have node installed, please install via the download webpage
https://nodejs.org/en/download/

Once you have confirmed node is installed, navigate to the `ShoppingCarAPI` folder
and install the package dependencies by running the command `npm install`. Once
you have the dependencies installed, you can run the test by following the directions
outlined in the next section.

###Running Tests
You can run the existing tests by typing the command `node bundle.js` into your command line.

The `runTests()` function will be executed from within the `entry.js` file. Each test case
will print out on one line, and the result of the test case on the following line.

###Building Tests
You can find the existing tests in the `test.js` file located in the `src` folder.
Inside of the `test.js` file you can see an example Store class named `store` is built inside
of the enclosing `runTests()` function. The tests themselves can be found below the
logic that builds `store`.

Before adding any additional tests, please make sure that Webpack and Babel are actively
compiling any new additions to the `test.js` file. You can do so by going to your terminal and
running the command `webpack --watch` from within the `ShoppingCartAPI` folder.

To further test the already built `store` inside of the `runTests()` function, first initiate
a transaction with `store.newTransaction()` This will create a new transaction with empty attributes
and access to the store and inventory.

Be sure to print the outline of your test case using `console.log()`. Below that
you can perform the logic to be tested. Once the logic is performed you can simply
`console.log()` the resulting value against the expected output to be observed
as a Boolean.

You can scan items with the `store.scan(itemName, quantity)` method. Amounts > 1
can be scanned by passing a value into the optional quantity argument. If there is no value
passed in, the quantity argument will default to 1.

The current transaction's cart total can be accessed using the `store.total()` method.

You can then close the current transaction with the `store.closeTransaction()` method.
This method call will update the store inventory, save the transaction into the
`store.transactionHistory` array, and reset `store.currentTransaction` to null. You
are now ready for a whole new transaction.


There is additional functionality in the store class including
`store.removeItem(itemName, quantity)`
`store.cancelTransaction()`


Once you have written your test cases, you can test them by running the command
`node bundle.js` and observe if your cases pass or fail!
