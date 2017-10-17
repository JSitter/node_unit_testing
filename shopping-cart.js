module.exports = class Cart{
    constructor(){
        this._cart = []
    }

    createItem(name, price){
        return {name, price}
    }

    addItem(name, price){
        this._cart.push({name, price})
    }

    numItems(){
        return this._cart.length
    }

    getCart(){
        return this._cart
    }
}