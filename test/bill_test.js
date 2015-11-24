var assert = require("assert");
var Provider = require('./itemisedBill');

describe('find data in the csv itemisedBill', function(){
	it('return all the phone calls for specified provider', function(){

		var results = Provider.provider('./ItemisedBill.csv');
			console.log(results);

assert.equal(36, results.length);
  
	});


describe('calculates the total number of calls made to numbers for each cell phone provider', function(){
    it('should get totalnumber of calls', function(){

    })
  })
});