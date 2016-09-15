var base = 0;
var power = 0;
var myResult = 0;

base = inputInteger ('Enter number');
power = inputInteger ('Enter power');
myResult = myPow (base, power);
alert ('result: ' + base + ' power ' + power + ' = ' + myResult);


function inputInteger (point) {
  var flag = false;
  var inputBase = 0;

  do {
    inputBase = prompt(point);
	inputBase = Number(inputBase);
	flag = false;
	var fraction = 0;
	if (isNaN(inputBase)) {
	  alert ('must be a number, try again');
	  flag = true;
	  inputBase = 0;
	} else {
	  fraction = inputBase - Math.floor(inputBase);
	  if (fraction != 0) {			
	    flag = true;
		inputBase = 0;
		alert ('must be an integer, try again');
	  } 
	}	
  }
  while (flag);

  return (inputBase);
}


function myPow(multiplicand, multiplier) {	
  var iterations = 0;
  var result = 0;

  iterations = Math.abs(multiplier);	
  result = 1;

  for (var i = iterations; i > 0; i--) {
    result = result * multiplicand;
  } 
  if (multiplier < 0) {
  	if (multiplicand != 0) {  
	  result = 1 / result;
    } else {
 	  return ('division by zero');
 	}	
  } else {
    if (multiplier = 0) {
 	  result = 1;
 	}
  }

  return (result);
}


