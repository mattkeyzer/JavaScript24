//clear text on page refresh
document.getElementById('guessInput').value = "";

//get our target number and display it for testing/ demonstrative purposes
    
const targetNumber = Math.floor(Math.random() * 1001);
document.getElementById('target').innerText = targetNumber;


//check for valid data

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);

    if (guess < 1 || guess > 1000) {
        document.getElementById('feedback').innerText = "Please enter a valid number between 1 and 1000.";

        return;
    }
    // compare distance to target number and then behave dependently on that

    const difference = Math.abs(guess - targetNumber);
    if (difference === 0) {
        document.getElementById('feedback').innerText = "Congratulations! You guessed the correct number!";
        backgroundColor = '#90EE90';
    } else if (difference <= 10) {
        document.getElementById('feedback').innerText = "Very Hot! You're super close to the number.";
        backgroundColor = '#8B0000';
    } else if (difference <= 100) {
        document.getElementById('feedback').innerText = "Hot! You're close-ish to the number.";
        backgroundColor = '#FFCCCC';    
    } else if (difference >= 300 && guess < targetNumber) {
        document.getElementById('feedback').innerText = "Cold! Try a lower number.";
        backgroundColor = '#00008B';
    } else if (difference >= 300 && guess > targetNumber) {
        document.getElementById('feedback').innerText = "Cold! Try a lower number.";
        backgroundColor = '#00008B';
    } else if (difference >= 100 && guess < targetNumber) {
        document.getElementById('feedback').innerText = "Cold! Try a higher number.";
        backgroundColor = '#ADD8E6';
    } else if (difference >= 100 && guess > targetNumber) {
        document.getElementById('feedback').innerText = "Cold! Try a lower number.";
        backgroundColor = '#ADD8E6';
    }
    
    // actually set the background color.
    document.body.style.backgroundColor = backgroundColor;
}