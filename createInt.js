var randomInteger = function(val) {
	val ival = Math.round()*256;
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
	if (rInt == 7)count++;  //notice no {}
	//console.log(rInt+",")
	process.stdout.write(rInt+" ")
}
process.stdout.write("\n\n\n7 hit "+count+" times.");
