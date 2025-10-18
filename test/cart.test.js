const test = require('node:test');
const assert = require('node:assert');
const { Cart } = require('../src/cart.js')

test('cart should contain 5 Dove Soaps each with a unit price of 39.99 and total price should equal 199.95', () => {
    const cart = new Cart([{'Dove Soap': 39.99}])
    cart.add('Dove Soap', 5)
    const cartItems = cart.getItems()
    const totalCartItems = cartItems.products.length
    const totalCartPrice = cartItems.totalPrice
    assert.strictEqual(totalCartItems, 5)
    assert.strictEqual(totalCartPrice, 199.95)

})


test('cart should contain 8 Dove Soaps each with a unit price of 39.99 and total price should equal 319.92', () => {
    const cart = new Cart([{'Dove Soap': 39.99}])
    cart.add('Dove Soap', 5)
    cart.add('Dove Soap', 3)
    const cartItems = cart.getItems()
    const totalCartItems = cartItems.products.length
    const totalCartPrice = cartItems.totalPrice
    assert.strictEqual(totalCartItems, 8)
    assert.strictEqual(totalCartPrice, 319.92)
})

test('it should calculate the tax rate of the shopping cart with multiple items', () => {
    const inventory = [{'Dove Soap': 39.99}, {'Axe Deo': 99.99 }]
    const taxRate = 12.5
    const cart = new Cart(inventory, taxRate)
    cart.add('Dove Soap', 2)
    cart.add('Axe Deo', 2)
    const cartItems = cart.getItems()
    const products = cartItems.products
    const has2DoveSoapsEntries = products.filter(product => Object.keys(product)[0] === 'Dove Soap').length === 2
    const has2DAxeDeosEntries = products.filter(product => Object.keys(product)[0] === 'Axe Deo').length === 2
    const totalSalesTax = cartItems.totalSalesTax
    const totalCartPrice = cartItems.totalPrice
    assert.strictEqual(has2DoveSoapsEntries, true)
    assert.strictEqual(has2DAxeDeosEntries, true)
    assert.strictEqual(totalCartPrice, 314.96)
    assert.strictEqual(totalSalesTax, 35.00)
    
})