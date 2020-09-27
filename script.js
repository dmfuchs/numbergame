var y = Math.floor(Math.random() * 10 + 1);

var guess = 0




document.getElementById("resetForm").onclick = function clear1 (){
    document.getElementById("guessField").value = ""
    location.reload();
}

document.getElementById("submitGuess").onclick  = function (){

    var x = document.getElementById("guessField").value
    if (x == y)
    {
        alert("CONGRATULATIONS!!!!! YOU GUESSED IT RIGHT IN " + guess + " GUESSES!! ");
        document.getElementById("guessField").value = ""
        location.reload();
    }
    else if (x > y)

    {
        guess++;
        alert("OOPS!! THE NUMBER YOU GUESSED IS TOO HIGH, TRY A SMALLER NUMBER")
        document.getElementById("guessField").value = ""
    }
    else 
    {
        guess++;
        alert("OOPS!! THE NUMBER YOU GUESSED IS TOO LOW, TRY A GREATER NUMBER") 
        document.getElementById("guessField").value = ""

    }
    var counter = 5 - guess
    document.getElementById("amountGuesses").innerHTML = counter + " Guesses Left"

    const maxGuesses = 5

    if (guess == maxGuesses)
    {
        alert("GAME OVER!! ALL 5 GUESSES USED UP, TRY AGAIN!!")
        location.reload();
    }

 }
 
