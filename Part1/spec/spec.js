var app = require('../js/app.js');

describe("get n power m", function() {
  it("myPow", function() {  	
  	var result;  	
  	result = app.myPow(2, 3);
  	console.log('2 power 3 = ', result);
    expect(result).toEqual(8);    
  });

  it("myPow", function() {    
    var result;   
    result = app.myPow(-2, 3);
    console.log('-2 power 3 = ', result);
    expect(result).toEqual(-8);    
  });

  it("myPow", function() {    
    var result;   
    result = app.myPow(2, -3);
    console.log('2 power -3 = ', result);
    expect(result).toEqual(0.125);    
  });

  it("myPow", function() {    
    var result;   
    result = app.myPow(-2, -3);
    console.log('-2 power -3 = ', result);
    expect(result).toEqual(-0.125);    
  });

  it("myPow", function() {    
    var result;   
    result = app.myPow(0, -3);
    console.log('0 power -3 = ', result);
    expect(result).toEqual('division by zero');    
  });

});


