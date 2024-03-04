/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/

const games = ["monopoly","chess","poker", "snakes & slides", "scrabble"];
var stringGames = "";
for (const x of games) {
    stringGames += x + " "
}
document.getElementById("list").innerHTML = stringGames;


/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/
const songs = new Set(["Doctor","Texas Hold Em","Vampire", "Saturn", "Feather"]);
var stringSongs1 = "";
for (const x of songs) {
    stringSongs1 += x + " "
}

document.getElementById("set1").innerHTML = stringSongs1
// add two more songs to the set then display in the set2 paragraph
songs.add("Sugar");
songs.add("Watermelon Sugar");
var stringSongs2 = "";
for (const x of songs) {
    stringSongs2 += x + " "
}

document.getElementById("set2").innerHTML = stringSongs2


/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
var emails = new Map([
    ["matt", "matt@awesome.com"],
    ["sammy", "sammy@awesome.com"],
    ["mom", "mom@awesome.com"],
    ["dad", "dad@awesome.com"],
    ["amy", "amy@awesome.com"],
  ]);


let stringEmails1 = "";
emails.forEach((value, key) => {
    stringEmails1 += key + ": " + value + "<br>";
});

document.getElementById("map1").innerHTML = stringEmails1;

// add two new names and emails and display in map2 use the forEach() method

let stringEmails2 = "";
emails.set("teacher", "teacher@awesome.com");
emails.set("dean", "dean@awesome.com");
emails.forEach((value, key) => {
    stringEmails2 += key + ": " + value + "<br>";
});
document.getElementById("map2").innerHTML = stringEmails2;
// get and display the email of one person, display in map3


const emailOfMatt = emails.get("matt");
document.getElementById("map3").innerHTML = "matt: " + emailOfMatt;
