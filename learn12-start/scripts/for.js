// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 
var song = '';

for (let i = 99; i >= 1; i--) {
    song += `${i} bottles of beer on the wall, ${i} bottles of beer.<br>`;
    song += `Take one down, pass it around, ${i - 1} bottles of beer on the wall.<br><br>`;
}

document.getElementById("beer").innerHTML = song;
//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let txt = "";
for (let month in months) {
  txt += months[month];
}
document.getElementById("for-in").innerHTML = txt;





// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph

const str = "Hello";
var chars = ""
for (const char of str) {
    chars += char + " ";
}
document.getElementById("for-of").innerHTML = chars;

// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph

i = 0
var numbers = "";

while (i <= 50){
    numbers += i + " ";
    i++
}



document.getElementById("while").innerHTML = numbers;