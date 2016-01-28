// Take the contents of the sonnet div and place it in a variable
var contents = document.getElementById("sonnet").innerHTML;
console.log("contents",contents );

// Find and output the starting position of the word "orphans"
var start = contents.indexOf("orphans");
console.log("start",start );

// Output the number of characters in the sonnet
var numChar = contents.length;
console.log("numChar",numChar );


// Replace the first occurance of the string "winter" with "yuletide"
var replaceWinter = contents.replace("winter", "yuletide");
console.log("replaceWinter",replaceWinter );


// Replace all occurances of the string "the" with "a large"
// for replacing “the” with “a large” the modifier you need is \b in RegEx
replaceWinter = replaceWinter.replace(/the\b/g, "a large");
console.log("replaceWinter",replaceWinter );

// Set the content of the sonnet div with the new string
var contentDiv = document.getElementById("sonnet");
contentDiv.innerHTML = replaceWinter;