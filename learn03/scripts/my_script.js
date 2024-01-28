// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Meri";

const taxRate = .07; // This is a constant
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {

    //fix the errors
    var firstName = "Meredith",
        lastName = "Engel";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors

    var firstName = "Meredith";
    document.getElementById("global").innerHTML = name1;
    document.getElementById("local").innerHtml = firstName;
    var taxRate = .07;
    document.getElementById("tax").innerHTML = taxRate;
    taxRate = .08;
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    //dog2 = "Nessie";
    var dog3 = "Paisley";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2="Ory";
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    
    const breed = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breeds").innerHTML = breed;
    
    
}
function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 10 + 31
    document.getElementById("addition").innerHTML = "10 + 32 = " + addition;
    let subtraction = 10 - 31
    document.getElementById("subtraction").innerHTML = "10 - 32 = " + subtraction;
    let multiplication = 10 * 31
    document.getElementById("multiplication").innerHTML = "10 * 32 = " + multiplication;
    let exponent = 10 ** 31
    document.getElementById("exponent").innerHTML = "10 ** 32 = " + exponent;
    let division = 10 / 31
    document.getElementById("division").innerHTML = "10 / 32 = " + division;
    let modulus = 10 % 31
    document.getElementById("modulus").innerHTML = "10 % 32 = " + modulus;


    let increment = 10
    increment++
    document.getElementById("increment").innerHTML = "10++ = " + increment;

    let decrement = 10
    decrement--
    document.getElementById("decrement").innerHTML = "10-- = " + decrement;



}


function assignments() {
    // create statements demonstrating the use of each assignment type
    var x = 10
    document.getElementById("equals").innerHTML = "x = 10" + "x = " + x;
    x += 1
    document.getElementById("plus-equals").innerHTML = "x += 1" + "x = " + x ;
    x -= 1
    document.getElementById("minus-equals").innerHTML = "x -= 1" + "x = " + x ;
    x *= 2
    document.getElementById("times-equals").innerHTML = "x *= 2" + "x = " + x ;
    x /= 2
    document.getElementById("divide-equals").innerHTML = "x /= 2" + "x = " + x ;
    x %= 4
    document.getElementById("modulus-equals").innerHTML = "x %= 4" + "x = " + x ;
}   

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const lizards = ["uromastyx", " bearded dragon", " gecko"];
    document.getElementById("array").innerHTML = lizards;
    const guitar = {type: "Electric", model:"Gibson", color:"Red"}
    document.getElementById("object").innerHTML = guitar.model;

}
