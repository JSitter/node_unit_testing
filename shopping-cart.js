module.exports = class Cart{
    constructor(){
        this._cart = []
        console.log("instantiated cart class")
    }

    addItem( item, price){
        this._cart.push({item, price})
    }

}