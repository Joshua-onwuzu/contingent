const test = require('node:test');
const assert = require('node:assert');
const { Cart } = require('../src/cart.js')

test('it should log inventory', () => {
    const initialisedCart = new Cart([{dove: 39.99}])
    const cartInventory = initialisedCart.inventory
    assert.deepStrictEqual(cartInventory, [{dove: 39.99}])
})