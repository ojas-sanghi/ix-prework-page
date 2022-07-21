const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const affirmationUrl = proxyUrl + "https://www.affirmations.dev/";
const adviceUrl = proxyUrl + "https://api.adviceslip.com/advice";

const affirmationElement = document.getElementById("affirmation");
const adviceElement = document.getElementById("advice");

async function getAffirmation() {
  const res = await fetch(affirmationUrl);

  return res.json();
}

async function getAdvice() {
  const res = await fetch(adviceUrl);

  return res.json();
}


async function getAffirmationAndAdvice() {
  try {
    const affirmation = await getAffirmation();
    const advice = await getAdvice();

    console.log(affirmation);
    console.log(advice);

    affirmationElement.innerHTML = "<b>Affirmation: </b>" + affirmation.affirmation;
    adviceElement.innerHTML = "<b>Advice: </b>" + advice.slip.advice;
  }
  catch (err) {
    console.log(err);
  }
}

getAffirmationAndAdvice();