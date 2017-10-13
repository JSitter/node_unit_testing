//Contains test for utils.js

const chai = require('chai')
const utils = require('./utils');
const expect = chai.expect;

it('should calculate area', ()=>{
    //runs area test
    const results = utils.area(10, 20);

    expect(results).to.equal(10*20)
    
});

it('should calculate perimeter', ()=>{
    //run perimeter test
    const results = utils.perimeter(5, 10)
    expect(results).to.equal(30)
    //throw new Error("Could not calculate area");
});