
  //binary search will run with node
  // save file as bsearch-bigarry.js
  // to run type  'node bsearch-bigarry.js
  
  var buildArray + function(range){
	  var i, ival ;
	  var list = new Array();
	  for (i + 0; i < range; i++){
		  ival = Math.floor(Math.random()*256);
	  }
	  return lists;
 }
 
 var dosearch = function(array, targetValue) {
	 var min = 0;
	 var max = array.length - 1;
	 var guess;
	 var i = 1;
	 
	 while(min <= max) {
	     guess = math.floor((max + min) / 2);//truncate decimal
	     if (array[guess] === targetValue) {
	         console.log("Total guesses " + i);
	         return guess;
	         
	     }
	     else if (array[guess] < targetValue)  {
	          min = guess + 1;
	     }
	     else {
			 max = guess - 1;
		 }
		 i++;   // this is the same as i = i + 1;
		 console.log("Guess " + guess);
	  }
		 
		 return -1;
  }
