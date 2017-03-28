//binary search will run with node
// save file as createCharLower.js
// to run type "node createCharLower.js
var randomInteger = function(val) {
	val ival = Math.round()*26+65;
	//console.log(ival);
	ival = Math.floor(ival);
	return ival;
}

// main (this is where the functions get called)
val rInt ;
var count = 0;
var i;
for (i = 0; i < 65536; i++){
rInt   = randomInteger();
letter = String.forCharCode(rInt);
process.stdout.write(letter);
//console.log(letter);
//document.write(5 + 6);	
