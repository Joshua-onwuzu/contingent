const { setUpInventory } = require('../src/utils/index.js')

class Cart {
    constructor(inventory = [], taxRate=0) {
        this.inventory = setUpInventory(inventory)
        this.taxRate = taxRate
        this.cart = {
            products: [],
            totalPrice: 0,
            totalSalesTax: 0,
        }
    }

    add(productName, quantity) {
    const product = this.inventory.get(productName);
    if (!product) return;

    const unitPrice = product[productName];

    for (let i = 0; i < quantity; i++) {
        this.cart.products.push({ [productName]: unitPrice });
    }
    const currentSubtotal = this.cart.totalPrice - this.cart.totalSalesTax;
    const newSubtotal = currentSubtotal + unitPrice * quantity;
    const tax = this.taxRate / 100 * newSubtotal;
    this.cart.totalSalesTax = Math.round(tax);
    this.cart.totalPrice = Number((newSubtotal + this.cart.totalSalesTax).toFixed(2));
    }
    getItems(){
        return this.cart
    }

}

module.exports = { Cart }