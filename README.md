## ShoppingCartAPI

In order to run the tests, first please make sure you have node installed on your computer
by typing `node -v` into your terminal.

If you do not have node installed, please install via the download webpage
https://nodejs.org/en/download/


###Running Tests
Once you have confirmed node is installed, navigate to the ShoppingCartAPI
folder in your teminal. Once inside of the ShoppingCartAPI folder, run the tests
by typing the command `node bundle.js` into your command line.

The tests should print each test case on one line, and then wether or not the
test case is proven true or false on the next line.

###Building Tests
You can find existing tests in the `test.js` file located in the `src` folder.
Inside of the `test.js` file you can see a store is built inside if the `runTests` function.

To further test the already built store first initiate a transaction with
`store.newTransaction()` This will create a new transaction with empty attributes
and access to the store and inventory.

You can then begin scanning items with the `store.scan(itemName, quantity)` method. You can
scan amounts > 1 by passing a value into the optional quantity argument. If there is no value
passed in the quantity argument will default to 1.

The current transaction's cart total can be accessed using the `store.total()` method.

You can then close the current transaction with the `store.closeTransaction()` method.
This method call will update the store inventory, save the transaction into the
`store.transactionHistory` array, and reset `store.currentTransaction` to null.


There is additional functionality in the store class including
`store.removeItem(itemName, quantity)`
`store.cancelTransaction()`
