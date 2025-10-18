function setUpInventory (inventory=[]){
    const inventoryMap = new Map(
        inventory.map(product => {
            const [productName, price] = Object.entries(product)[0];
            return [productName, { [productName]: price }];
        })
    );
    return inventoryMap
}

module.exports = {
    setUpInventory
}