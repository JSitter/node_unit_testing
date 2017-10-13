//test for shopping-cart.js
const chai = require('chai');
const cart = require('./shopping-cart.js');
const expect = chai.expect;

it('Should create a new item with name and price', ()=>{
    const results = cart.createItem("Popsicle", "1.20")
    expect(results.name).to.equal('Popsicle')
    expect(results.price).to.equal('1.20')

}); // 1  //shopping cart object with name and price properties

it('Should add a new item to the shopping cart', ()=>{
    const results = cart.addItem(cart.createItem("Dog Bed", "32.95"))
    expect(results.length).to.be(1)
});  // shopping cart array

it('Should return the number of items in the cart'); // 
it('Should return an array containing all items in cart');
it('Should remove items from cart');
// Stretch challenges
it('Should update the count of items in the cart');
it('Should remove an item when its count is 0');
it('Should return the total cost of all items in the cart');