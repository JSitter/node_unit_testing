//test for shopping-cart.js
const chai = require('chai');
const Cart = require('./shopping-cart.js');
const expect = chai.expect;


it('Should create a new item with name and price', ()=>{
    
    c = new Cart();
    c.addItem(("Popsicle", "1.20"))
    console.log(c._cart[0].item)
    expect(c._cart[0].name).to.equal('Popsicle')
    expect(c._cart[0].price).to.equal('1.20')

}); // 1  //shopping cart object with name and price properties

it('Should add a new item to the shopping cart', ()=>{
    const c = cart()
    c.addItem(cart.createItem("Dog Bed", "32.95"))
    console.log("results length:", c.cart.length())
    expect(c.cart.length()).to.be(1)
});  // shopping cart array

it('Should return the number of items in the cart', ()=>{
    const results = cart.addItem()
}); // 
it('Should return an array containing all items in cart');
it('Should remove items from cart');
// Stretch challenges
it('Should update the count of items in the cart');
it('Should remove an item when its count is 0');
it('Should return the total cost of all items in the cart');

item = ()=>{
    if( +Date % 2){
        const c = cart.createItem("Dog Bed", "32.95")
    }else{
        const c = cart.createItem("Popsicle", "1.20")
    }
    return c

}

popsicle =()=>{
    return 
}