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

    removeItem(item){
        for(let i = 0; i<this._cart.length; i++){
            if(this._cart[i].name == item){
                this._cart.splice(i, 1)
                return 0
            }
        }        
    }
}