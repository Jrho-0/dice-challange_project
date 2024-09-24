var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random () * 6) + 1;

var randomDiceImage1 = "./images/" + "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "./images/" + "dice" + randomNumber2 + ".png";

document.getElementById("dice-left").setAttribute("src", randomDiceImage1);
document.getElementById("dice-right").setAttribute("src", randomDiceImage2);

var resultText;
if (randomDiceImage1 > randomDiceImage2) {
    resultText = "🚩Player 1 Wins";
} else if (randomDiceImage1 < randomDiceImage2) {
    resultText = "Player 2 Wins🚩";
} else {
    resultText = "It's a Draw!"; 
}

document.getElementById("result").innerHTML = resultText;

document.getElementById("refresh-btn").addEventListener("click", function() {
    location.reload()
});