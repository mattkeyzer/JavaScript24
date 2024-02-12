function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Matt Keyzer"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
       let num = 10;
       let string = "20";
       let concat = num + string;
       document.getElementById("add").innerHTML = concat;


    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    let ten = 10;
    document.getElementById("to-string").innerHTML = ten.toString();

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    document.getElementById("exponent").innerHTML = ten.toExponential(3);

    // Demonstrate the use of toFixed() and print to the fixed paragraph
    document.getElementById("fixed").innerHTML = ten.toFixed(2);

    // Demonstrate the use of toPrecision() and print to the precision paragraph
    let precision = 9.12345
    document.getElementById("precision").innerHTML = precision.toPrecision(2);

    // Demonstrate the use of parseFloat() and print to the float paragraph
    let pFloat = "1.11 one point one one";
    document.getElementById("float").innerHTML = parseFloat(pFloat);

    // Demonstrate the use of parseInt() and print to the int paragraph
    document.getElementById("int").innerHTML = parseInt(pFloat);


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
    document.getElementById("equals").innerHTML = "the difference between == and === is how strict the comparison is. lets say that we had a var number1 that was set to = 1, and a var number2 that was set to \'1'. with === the return value would be false but with == the return value would be true. there is merit in using both depending on what the desired output is, but it is important to understand this while developing.";
    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
    document.getElementById("logic").innerHTML = "With an and operator, everything in the statement must be true. With an or statement only one needs to be true. The and statements are always eveluated first.";


    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragrah
    let _case = 11;
    switch (_case){
        case 1:
            document.getElementById("switch").innerHTML = "case 1";
        break;
        default:
            document.getElementById("switch").innerHTML = "default";
        break;

    }

    

    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    var food1 = "pizza";
    var food2 = "burger";
    
    food1 === food2
    ? document.getElementById("ternary").innerHTML = "foods are the same"
    : document.getElementById("ternary").innerHTML = "foods are different";

}