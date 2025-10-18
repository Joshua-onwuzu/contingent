const test = require('node:test');
const assert = require('node:assert');
const { Cart } = require('../src/cart.js')

test('cart should contain 5 Dove Soaps each with a unit price of 39.99 and total price should equal 199.95', () => {
    const cart = new Cart([{dove: 39.99}])
    cart.add('dove', 5)
    const cartItems = cart.getItems()
    const totalCartItems = cartItems.products.length
    const totalCartPrice = cartItems.totalPrice
    assert.strictEqual(totalCartItems, 5)
    assert.strictEqual(totalCartPrice, 199.95)

})


test('cart should contain 8 Dove Soaps each with a unit price of 39.99 and total price should equal 319.92', () => {
    const cart = new Cart([{dove: 39.99}])
    cart.add('dove', 5)
    cart.add('dove', 3)
    const cartItems = cart.getItems()
    const totalCartItems = cartItems.products.length
    const totalCartPrice = cartItems.totalPrice
    assert.strictEqual(totalCartItems, 8)
    assert.strictEqual(totalCartPrice, 319.92)
})