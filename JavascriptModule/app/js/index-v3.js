/*
	index.js
*/
"use strict";

var msg = "Hello Javascript log";
console.log(msg);

var resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = "<p>This is from javascript</p>";

/* object */
/*
var result = {
	name: "jQuery",
	language: "Javascript",
	score: 4.5,
	showLog: function(){
		 
	},
	owner: {
		login: "quirosrw"
		id: 123456789
	}
};

result.phoneNumber = "2243-3134"

console.log(result.name);
*/

var results = [
{
	name: "jQuery",
	language: "Javascript",
	score: 4.5,
	showLog: function(){
		 
	},
	owner: {
		login: "quirosrw",
		id: 123456789
	}
}, 
{
	name: "jQuery UI",
	language: "Javascript",
	score: 3.5,
	showLog: function(){
		 
	},
	owner: {
		login: "quirosrw",
		id: 123456789
	}
}
];

for(var x = 0; x < results.length; x++)
{
	var result = results[x];
	//if(result.score < 4) break;
	if (result.score > 4) continue;
	console.log(result.name);
}	


//console.log(results.length);
//console.log(results[0].name);

/*
results.push(result);
results.push({
	name: "dumy project",
});
*/