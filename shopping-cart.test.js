//test for shopping-cart.js
const chai = require('chai');
const Cart = require('./shopping-cart.js');
const expect = chai.expect;



it('Should create a new item with name and price', ()=>{
    c = new Cart();
    item = c.createItem("Popsicle", "1.50")
    expect(item.name).to.equal("Popsicle")
    expect(item.price).to.equal("1.50")
}); // 1  //shopping cart object with name and price properties

it('Should add a new item to the shopping cart', ()=>{
    c = new Cart();
    c.addItem("Popsicle", "1.20")
    expect(c._cart[0].name).to.equal('Popsicle')
    expect(c._cart[0].price).to.equal('1.20')
});  // shopping cart array

it('Should return the number of items in the cart', ()=>{
    c = new Cart()
    c.addItem("pop", "1.50")
    c.addItem("nuts", ".89")
    c.addItem("nuts", ".89")
    expect(c.numItems()).to.equal(3)
    
}); // 
it('Should return an array containing all items in cart', ()=>{
    c = makeCart()
    expect(c.getCart().length).to.equal(3)
});

it('Should remove items from cart', ()=>{
    c = makeCart()
    c.removeItem("nuts")
    expect(c.numItems()).to.equal(2)
});
// Stretch challenges
it('Should update the count of items in the cart', ()=>{
    c = makeCart()
    c.addItem("cotton candy", "2.25")
    expect(c.numItems()).to.equal(4)
});
it('Should remove an item when its count is 0');
it('Should return the total cost of all items in the cart', ()=>{
    c = makeCart()
    expect(c.getCartAmt()).to.equal(1.5+.89+.89)
});


makeCart = ()=>{
    c = new Cart()
    c.addItem("pop", "1.50")
    c.addItem("nuts", ".89")
    c.addItem("nuts", ".89")
    return c
}