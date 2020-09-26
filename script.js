var y = Math.floor(Math.random() * 10 + 1);

var guess = 1

document.getElementById("submitGuess").onclick  = function (){

    var x = document.getElementById("guessField").value

    if (x == y)
    {
        alert("CONGRATULATIONS!!!!! YOU GUESSED IT RIGH IN " + guess + " GUESSEES ");


    }
    else if (x > y)

    {
        guess++;
        alert("OOPS!! THE NUMBER YOU GUESSED IS TOO HIGH, TRY A SMALLER NUMBER")

    }
    else 
    {
        guess++;
        alert("OOPS!! THE NUMBER YOU GUESSED IS TOO LOW, TRY A GREATER NUMBER") 

    }
}