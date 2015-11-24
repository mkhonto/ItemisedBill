var assert = require("assert");
var Provider = require('./itemisedBill');

describe('find data in the csv itemisedBill', function(){
	it('read the phone bill and create a list of maps', function(){

		var results = Provider.provider('./ItemisedBill.csv');
			console.log(results);

assert.equal(36, results.length);
  
	});

//var Counter = require('./itemisedBill');

// describe('return all the phone calls for specified provider', function(){
   
//         var duration = new duration('./ItemisedBill.csv');
//         var totalCalls = duration.length();
//         var length = duration.length(totalCalls);

//         var results = {
//         	'mtn': 16,
//         	'vodacom' : 8,
//         	'cellC' : 10,
//         }

// assert.equal(results, length);           
//      });
});