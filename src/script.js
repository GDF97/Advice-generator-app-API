// Variables
const getAdviceButton = document.getElementById("getAdvice");
const adviceDisplay = document.getElementById("adviceDisplay");
const adviceNumber = document.getElementById("adviceNumber");

// Functions
const getAdvice = () => {
  fetch(`https://api.adviceslip.com/advice`)
    .then((response) => response.json())
    .then((json) => {
      adviceNumber.textContent = `#${json.slip.id}`;
      adviceDisplay.textContent = `${json.slip.advice}`;
    });
};

// Events
getAdviceButton.addEventListener("click", getAdvice);
