//create new item with name and price
module.exports.createItem = (itemName, itemPrice)=>{
    return {name: itemName, price: itemPrice}
}

module.exports.addItem = ( item, cart = [] )=>{
   cart.push(item)
   return cart
}