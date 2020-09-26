var y = Math.floor(Math.random() * 10 + 1);

var guess = 1


document.getElementById("resetForm").onclick = function clear1 (){
    document.getElementById("guessField").value = ""
    location.reload();
}


document.getElementById("submitGuess").onclick  = function (){

    var x = document.getElementById("guessField").value

    if (x == y)
    {
        alert("CONGRATULATIONS!!!!! YOU GUESSED IT RIGH IN " + guess + " GUESSEES!! ");
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
}