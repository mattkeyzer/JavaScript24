function start() {
    // follow the directions in the comments
    // print to the index page

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Matt Keyzer";

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp


    // String length: calculate the string length and print to the length paragraph
    let myString = "Be it ever so humble, there is no place like home.";

    let length = myString.length;
    document.getElementById("length").innerHTML = length;

    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
    let escape = "This is a test of \"using...\" \"escape sequences\" in a \'string\'.";
    document.getElementById("escape").innerHTML = escape;

    // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

    // create a variable named 'name' and store your complete name in it
    let name = "Matthew Richard Keyzer";

    // Use the JavaScript slice function to display your first name to first paragraph
    let firstName = name.slice(0,7);
    document.getElementById("first").innerHTML = firstName;

    // Use the Javascript substring Method to display your middle name to the middle paragraph
    let middleName = name.slice(8,15);
    document.getElementById("middle").innerHTML = middleName;

    // Use the JavaScript subst Method to display your last name to the last paragraph
    let lastName = name.slice(16,name.length);
    document.getElementById("last").innerHTML = lastName;


    // replacing string content - in the following variable use the replace method to put your major 
    // in a new string and print to the major paragraph

    let major = "I'm majoring in Physical Therapy at McHenry County College";
    let newMajor = major.replace("Physical Therapy","Mobile App Design And Development");
    document.getElementById("major").innerHTML = newMajor;

    // convert the following variable to upper case then print to the upper paragraph
    let myText = "It\'s a great day to be alive!";
    let myTextUpper = myText.toUpperCase();
    document.getElementById("upper").innerHTML = myTextUpper;
    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph
    let trimText = "                  McHenry County College                ";
    let trimmedText = trimText.trim();
    document.getElementById("trim").innerHTML = trimmedText;

    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

    let months = "January, February, March, April, May, June, July, August, September, October, November, December"
    let may = months.indexOf("May");
    document.getElementById("index").innerHTML = may;

    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

    // create a template literals for both your first and last name (name the variables first and last)
    
    let firstAndLast = `${firstName} ${lastName}`;
    
    // Use Variable substitutions to create a greeting that incorporates your first and last name and 
    // print to the greeting paragraph
    let greeting = `Hello everyone, my name is ${firstAndLast}!`

    document.getElementById("greeting").innerHTML = greeting;
}