/*
	index.js
*/

$(document).ready(function(){
"use strict";

//var msg = "Hello Javascript log";
//console.log(msg);

//var resultsDiv = document.getElementById("results");
//resultsDiv.innerHTML = "<p>This is from javascript</p>";

var resultList = $("#resultList");
resultList.text("This is from JQuery");

var toggleButton = $("#toggleButton");
toggleButton.on("click", function(){
	resultList.toggle(500);
	
	if(toggleButton.text() == "Hide"){
		toggleButton.text("Show");
	}else{
		toggleButton.text("Hide");
	}
});

//$("header nav li").text("Test");
//$("header nav li").css("font-weight","bold");

var listItem = $("header nav li");
listItem.css("font-weight","bold");
//listItem.css("font-size","18px");
listItem.filter(":first").css("font-size","18px");

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

$("#gitHubSearchForm").on("submit", function(){
	
	var searchPhrase = $("#searchPhrase").val();
	var useStars = $("#useStars").val();
	var langChoice = $("#langChoice").val();
	
	if(searchPhrase){	
		resultList.text("Performing search...");
	
		var gitHubSearch = "https://api.github.com/search/repositories?q=" + encodeURIComponent(searchPhrase);
		
		if (langChoice != "All"){
			gitHubSearch += "+language:" + encodeURIComponent(langChoice);
		}
	
		if(useStars){
			gitHubSearch += "&sort=stars";
		}
	
	
		//var gitHubSearch = "https://api.github.com/search/repositories?q=jquery+language:javascript&sort=stars";
		
		$.get(gitHubSearch)
		.success(function(r){
			//console.log(r.items.length);	
			displayResults(r.items);
		})	
		.fail(function(err){
			console.log("Failed to query GitHub");
		})
		.done(function(){
			
		});
	}
	
	
	return false;
});




/*
$.get(gitHubSearch, function(r){
	//console.log(r.items.length);	
	displayResults(r.items);
});
*/


/*
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
*/

function displayResults(results){	
	resultList.empty();
	$.each(results, function(i, item){
		
		var newResult = $("<div class='result'>" +
			"<div class='title'>" + item.name + "</div>"	+
			"<div>Language: " + item.language + "</div>" +
			"<div>Owner: " + item.owner.login + "</div>" +
		"</div>");// use $() to convert the text in a jquery object
		
		//hover work with jquery object
		newResult.hover(function(){
			//make ir darker
			$(this).css("background-color", "lightgray");
		}, function(){
			//reverse
			$(this).css("background-color", "transparent");
		});
		
		
		resultList.append(newResult);
		
	});
}


/*
for(var x = 0; x < results.length; x++)
{
	var result = results[x];
	//if(result.score < 4) break;
	if (result.score > 4) continue;
	console.log(result.name);
}	
*/

//console.log(results.length);
//console.log(results[0].name);

/*
results.push(result);
results.push({
	name: "dumy project",
});
*/

});