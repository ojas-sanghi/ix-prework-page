var button = document.getElementById("submit-button");
var input = document.getElementById("guess-input");
var resultText = document.getElementById("result-text");

function generateRandomNumber()
{
  return parseInt(Math.random() * 11);
}

button.addEventListener("click", (event) => {
  let randNum = generateRandomNumber();
  if (input.value == randNum)
  {
    resultText.innerHTML = "Congrats! You guessed it right! Now, try again - this time it's a new number"
  }
  else
  {
    resultText.innerHTML = "Not quite right :/ It was " + randNum + ". Now, try again - this time it's a new number"
  }
})