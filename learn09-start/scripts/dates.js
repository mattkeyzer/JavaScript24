/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object

// display the variable in the basic paragraph
const date = new Date();
document.getElementById("basic").innerHTML = date;


// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)

const today = new Date("2024,02,19");
document.getElementById("today").innerHTML = today;


// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
const birthday = new Date("July 15, 2004 07:04:00");
document.getElementById("birthday").innerHTML = birthday;

// Convert your basic date to the ISO string format and display the result
// in the iso paragraph

let iso = date.toISOString();
document.getElementById("iso").innerHTML = iso;


//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
let date1 = new Date("02/19/2024");
let date2 = new Date("2024-02-19");
let date3 = new Date("2024");
document.getElementById("date1").innerHTML = date1;
document.getElementById("date2").innerHTML = date2;
document.getElementById("date3").innerHTML = date3;


//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs

let get1 = date.getFullYear();
let get2 = date.getSeconds();
let get3 = date.getTime();
let get4 = date.getMilliseconds();
document.getElementById("get1").innerHTML = get1;
document.getElementById("get2").innerHTML = get2;
document.getElementById("get3").innerHTML = get3;
document.getElementById("get4").innerHTML = get4;


// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs

const d1 = new Date();
d1.setHours(22);
const d2 = new Date();
d2.setMinutes(59);
const d3 = new Date();
d3.setSeconds(59);
const d4 = new Date();
d4.setMilliseconds(99);
document.getElementById("set1").innerHTML = d1;
document.getElementById("set2").innerHTML = d2;
document.getElementById("set3").innerHTML = d3;
//set this up so we can see the miliseconds that I set... :)
document.getElementById("set4").innerHTML = d4.getMilliseconds().toString();


