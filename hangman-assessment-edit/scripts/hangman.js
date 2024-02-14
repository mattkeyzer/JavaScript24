// declare and initialize array
let game = ["SAND", "WAVES", "SUNSHINE", "SEASHELLS", "UMBRELLA", "SUNSCREEN", "SURFBOARD", "BEACHBALL", "FLIPFLOPS", "PALMTREE"];
let choice = Math.floor(Math.random() * 4);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
let found = false;
let guessedletters = "";
let hangmanImages = [
    "images/01.png",
    "images/02.png",
    "images/03.png",
    "images/04.png",
    "images/05.png",
    "images/06.png",
    "images/07.png"

];


// game setup works fine --steffen
function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}


document.getElementById("submit").addEventListener("click", function(event){

    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; //would this reset value to null
    guessedletters += userLetter;
    document.getElementById("guessedletters").innerHTML = guessedletters;
    for (let c = 0; c < answer.length; c++) {
        //alert(letters[c]);
        
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
            found = true;
            
        }
        
        output = output + display[c] + ' ';
       
        
    }
    
    if (found == false){
        attemptsLeft--;
        // change image if letter not found! 
        document.getElementById("hangman").src = hangmanImages[6 - attemptsLeft];
    }
    
        if (win < 1) {
            document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
        } else if (attemptsLeft < 1) {
            document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
            
        } else {
            document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
        }
    document.getElementById("word").innerHTML = output;
    output = '';
    

    
});


//scirpt connected fine somereason the button and the script are not registering.