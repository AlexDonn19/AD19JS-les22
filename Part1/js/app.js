var app = {			
		myPow: function (multiplicand, multiplier) {	
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
	}

try {
module.exports = app;

} catch (e) {
	console.log('error = ', e);
}