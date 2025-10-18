const { setUpInventory } = require('../src/utils/index.js')

class Cart {
    constructor(inventory = []) {
        this.inventory = setUpInventory(inventory)
        this.cart = {
            products: [],
            totalPrice: 0
        }
    }

    add(productName, quatity){
        const product = this.inventory.get(productName)
        if(!product) return
        const productEntries = Array.from({length: quatity})
        productEntries.forEach(() => {
           this.cart.products.push(product)
           const totalPrice = this.cart.totalPrice + product[productName]
           this.cart.totalPrice = Number(totalPrice.toFixed(2))
        })
    }
    getItems(){
        return this.cart
    }

}

module.exports = { Cart }