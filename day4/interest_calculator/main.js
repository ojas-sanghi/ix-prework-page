const amountInput = document.getElementById("amount-input")
const interestInput = document.getElementById("interest-input")
const yearInput = document.getElementById("year-input")
const button = document.getElementById("button")
const cardBody = document.getElementById('card-body')

button.addEventListener("click", (event) => {
  const amount = amountInput.value
  const interest = interestInput.value
  const years = yearInput.value

  let total = amount * Math.pow(1 + (interest/100), years);

  console.log(total);

  const resultDiv = document.createElement('div')
  resultDiv.innerHTML = '$' + total.toFixed(2);

  resultDiv.classList.add('alert')
  resultDiv.classList.add('alert-primary')
  resultDiv.classList.add('mt-4')

  cardBody.append(resultDiv);
})