/*
	index.js
*/
"use strict";

var msg = "Hello Javascript log";
console.log(msg);

var resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = "<p>This is from javascript</p>";

console.log("msg is: " + typeof(msg));
console.log("resultsDiv is: " + typeof(resultsDiv));

var none;
console.log("none is: " + typeof(none));

var aNumber = 10;
console.log("aNumber is: " + typeof(aNumber));

var trueFalse = true;
console.log("trueFalse is: " + typeof(trueFalse));

/*solve the problem using the text 'use strict' (this create a ) */
//noneExistent = "this shouldn't work"; //variables not need be defined previously
//msgs = "this shouldn't work"//common error, create a new variable when it want to use an existing variable

if (none == undefined) {
		console.log("none is undefined");
}

if (aNumber == 10){
	console.log("10 is 10");
}

if (aNumber === "10"){
	console.log("'10' is 10 too");
}else{
	console.log("'10' is not 10");
}


/ * Functions */
//function showMsg(msg){
//	console.log("showMsg " + msg);
//}

function showMsg(msg, more){
	if(more){
		console.log("showMsg+ " + msg + more);
	}else{
		console.log("showMsg+ " + msg);
	}
}




showMsg("some information");
showMsg("some information", "more information");



var showIt = function (msg){
	console.log(msg);
}

showIt("some message");

function showItThen(msg, callback){
	showIt(msg);
	callback();
}

showItThen("showItThen called", function() {
	console.log("callback called");
});


/* Scope */
var inGlobal = true;

function testMe(){
	console.log("TestMe(): " + inGlobal);
	
	var someMsg = "some message";
	console.log("testMe(): "+ someMsg);
	
	showItThen("with Clousure", function(){
		showIt("testMe with Clousure(): " + someMsg);
	});
}

//console.log("global: " + someMsg); //don't work
testMe(); //it's work