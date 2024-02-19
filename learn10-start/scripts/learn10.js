function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    let round = Math.round(1.5);
    document.getElementById("round").innerHTML = round;

    let ceil = Math.ceil(4.8);
    document.getElementById("ceil").innerHTML = ceil;
    let floor = Math.floor(4.8);
    document.getElementById("floor").innerHTML = floor;
    let trunc = Math.trunc(2.5);
    document.getElementById("trunc").innerHTML = trunc;
    let sign = Math.sign(-1);
    document.getElementById("sign").innerHTML = sign;
    let pow = Math.pow(4,4);
    document.getElementById("pow").innerHTML = pow;
    let min = Math.min(0, 34, 67, -200);
    document.getElementById("min").innerHTML = min;
    let random = Math.random();
    document.getElementById("random").innerHTML = random;
    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph

    let random2 = Math.floor(Math.random() * 101);
    document.getElementById("random2").innerHTML = random2;
    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    // comparisons in javascript are more than one dimentional. They have the ability to distinctly tell if it is comparing the same value in different contexts. 
    // for example x === 5 is not the same as x === "5" although they are both five, one is an int and the other a string.  below is an example proving this reporting flase
    let x = 5;
    let comparison = x === "5";
    // result is false
    document.getElementById("comparisons").innerHTML = comparison;


    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}




