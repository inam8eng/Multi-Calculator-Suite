// Select all the buttons and the screen
import { createDropdown } from "./CurrencyCalcData/currencies.js";
import { goodLuck, averageLuck, badLuck } from "./LuckCalcData/texts.js";
import { switchCalculator } from "./switchCalculators.js";
const mainButtons = document.querySelectorAll("button[data-calculator-type]");
const standardCalculator = document.querySelector(".standardCalculator");
const standardScreen = document.querySelector(".standard-calculator__screen");
const ageCalculator = document.querySelector(".ageCalculator");
const luckCalculator = document.querySelector(".luckCalculator");
const fs = require("fs");
const buttons = document.querySelectorAll(".calculator__button");
const flags = document.querySelectorAll(".flag");
const screen = document.querySelector(".calculator__screen");
const screenAge = document.querySelector(".age-calculator__screen");
const historyButton = document.querySelector(".history__button");
const historyScreen = document.querySelector(".history__screen");
const currencyScreen = document.querySelector(".currency-calculator__screen");
const luckScreen = document.querySelector(".luck-calculator__screen");
const luckScreenElements = document.querySelectorAll(".luck-screen");
const goodluckScreen = document.querySelector(".good-luck-screen");
const averluckScreen = document.querySelector(".average-luck-screen");
const badluckScreen = document.querySelector(".bad-luck-screen");
const hintIcon = document.getElementById("hint-icon");
const hintTooltip = document.querySelector(".hint-tooltip");
const messageBox = document.getElementById("message-box");

//Main Button Controllers
mainButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.calculatorType;
    currencyScreen.textContent = "0";

    switchCalculator(type);
  });
});

//Hints

hintIcon.addEventListener("click", () => {
  hintTooltip.style.opacity = 0;

  showMessage(
    "Don't Worry! Your screen may flicker sometimes. and it's on purpose to have a realistic calculator screen effect! Also in Luck Calculator, Your luck depends on how much smart you are to keep numbers difference maximum"
  );
});

function showMessage(message) {
  messageBox.innerHTML = message;
  messageBox.classList.add("show");

  setTimeout(() => {
    messageBox.classList.remove("show");
  }, 6000);
}

//Standard Calculator
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the value of the clicked button

    const buttonValue = button.textContent;

    // Check if the value is a number or an operator

    if (isNaN(buttonValue)) {
      handleOperator(buttonValue);
    } else {
      handleNumber(buttonValue);
    }
  });
});
let calculations = [];
let answer = "";
// Function to handle number inputs

function calculate() {
  const textToCalculate = standardScreen.textContent.substring(
    0,
    standardScreen.textContent.length - 1
  );
  answer = eval(textToCalculate); //eval is a built-in function that evaluates a string and returns the result as a number or a string
  calculations.push(`${standardScreen.textContent}  ${answer}`);
  standardScreen.textContent = answer;
  localStorage.setItem("calculations", JSON.stringify(calculations));
  calculations = JSON.parse(localStorage.getItem("calculations")) || [];
  historyButton.classList.remove("off");
}

function handleHistory() {
  //Show history

  const isHidden = historyScreen.classList.contains("hidden");

  if (isHidden) {
    // Show history
    historyScreen.classList.remove("hidden");
    historyScreen.textContent = calculations[calculations.length - 1];
  } else {
    historyScreen.classList.add("hidden");
  }
}

//Age Calculator

function calculateAge(birthYear) {
  const currentDate = new Date().getFullYear();
  console.log(currentDate);
  const age = `You are ${currentDate - birthYear} Years Old`;
  screenAge.textContent = age;
}

//Currency Calculator

flags.forEach((flag) => {
  flag.addEventListener("click", function () {
    //Get ID of flag
    const id = flag.id;
    try {
      const data = fs.readFileSync("./currencyCalcData/countries.json", "utf8");
      const jsonData = JSON.parse(data);

      createDropdown(jsonData, `${id}`);
    } catch (error) {
      // Handle any errors
    }
  });
});

//Luck Calculator
let numbers = [];

function resetEverything() {
  luckScreenElements.forEach((element) => {
    element.classList.add("hidden");
    element.classList.add("inactive-grid-screen");
  });

  numbers = [];
  luckScore = "";

  const childDivs = document.createElement("div");
  childDivs.classList.add("screen-numbers");

  childDivs.innerHTML = `<div class = "calculator__screen">Number 1</div>
  <div class = "calculator__screen">Number 2</div>
  <div class = "calculator__screen">Number 3</div>
  <div class = "calculator__screen">Number 4</div>`;
  luckScreen.innerHTML = childDivs.outerHTML;
  childElements = childDivs.querySelectorAll("div");
}

function calculateLuckScore(numbers) {
  const diff1 = Math.abs(numbers[0] - numbers[1]);
  const diff2 = Math.abs(numbers[1] - numbers[2]);
  const diff3 = Math.abs(numbers[2] - numbers[3]);

  luckScreenElements.forEach((element) => {
    element.classList.remove("hidden");
    element.classList.remove("active-grid-screen");
  });

  if (diff1 >= 5 && diff2 >= 5 && diff3 >= 5) {
    // return "You are active, fast, and a risk taker!";
    goodluckScreen.classList.add("active-grid-screen");
    goodluckScreen.classList.remove("inactive-grid-screen");

    return { resutlFunction: goodLuck(), resultText: "Lucky" };
  } else if (diff1 <= 5 && diff2 <= 5 && diff3 <= 5) {
    badluckScreen.classList.add("active-grid-screen");
    badluckScreen.classList.remove("inactive-grid-screen");

    return { resutlFunction: badLuck(), resultText: "Unlucky" };
  } else {
    averluckScreen.classList.add("active-grid-screen");
    averluckScreen.classList.remove("inactive-grid-screen");

    return { resutlFunction: averageLuck(), resultText: "Average" };
  }
}

//Handle Numbers Function

export function handleNumber(number) {
  //If Standard Calculator is Active
  if (!standardCalculator.classList.contains("hidden")) {
    if (
      (!/[+\-*/]/.test(standardScreen.textContent) && answer !== "") ||
      standardScreen.textContent === "0"
    ) {
      standardScreen.textContent = number;
      answer = "";
    } else {
      standardScreen.textContent += number;
    }
  }

  //If Age Calculator is Active

  if (!ageCalculator.classList.contains("hidden")) {
    if (/Enter Your Birthyear/.test(screenAge.textContent)) {
      screenAge.textContent = number;
    } else if (screenAge.textContent.length <= 4) {
      screenAge.textContent += number;
    }

    if (screenAge.textContent.length > 4) {
      screenAge.textContent = "A Year is of 4 digits";
    }
  }

  //If Currency Calculator is Active

  if (!currencyScreen.classList.contains("hidden")) {
    if (currencyScreen.textContent === "0") {
      currencyScreen.textContent = number;
    } else {
      currencyScreen.textContent += number;
    }
  }

  if (!luckScreen.classList.contains("hidden")) {
    let childElements = document.querySelectorAll(".screen-numbers>div");
    const i = numbers.length;

    if (number && numbers.length < 5) {
      numbers.push(number);

      childElements[i].textContent = number;
    }
  }
}

// Function to handle operator inputs
historyButton.addEventListener("click", () => {
  handleHistory();
});

//Creating Audio Sounds

function createAudioElementWithSource(source, type) {
  const audioElement = document.createElement("audio");
  const sourceElement = document.createElement("source");
  sourceElement.src = source;
  sourceElement.type = type;
  audioElement.appendChild(sourceElement);

  // Set the autoplay attribute
  audioElement.autoplay = true;

  // Append the audio element to the document body
  document.body.appendChild(audioElement);

  return audioElement;
}

let luckScore = "";

function handleOperator(operator) {
  // console.log(typeof operator);

  //If Standard Calculator is Active
  if (!standardCalculator.classList.contains("hidden")) {
    if (screen.textContent === "0") {
      screen.textContent = "You must enter a number before operator";
    }
    if (screen.textContent.slice(-1) != operator) {
      screen.textContent += operator;
    }

    if (operator === "=") {
      calculate();
    }

    if (operator === "AC") {
      clear();
    }
    function clear() {
      screen.textContent = "0";
    }
  }

  function adjustFontSize() {
    const textLength = luckScreen.textContent.length;
    const screenWidth = 480;

    const maxFontSize = 1.8;
    const minFontSize = 1.1;

    const scaleFactor = (maxFontSize - minFontSize) / 20;

    let fontSize = maxFontSize - scaleFactor * (textLength - 1);
    fontSize = Math.max(fontSize, minFontSize);

    luckScreen.style.fontSize = `${fontSize}rem`;
  }

  //If Age Calculator is Active
  if (!ageCalculator.classList.contains("hidden")) {
    if (operator === "Calculate") {
      // calculateAge(1990 - 05 - 19);
      calculateAge(screenAge.textContent);
    }
    if (operator === "Reset") {
      screenAge.textContent = "Enter Your Birthyear";
    }
  }

  if (!luckCalculator.classList.contains("hidden")) {
    if (operator === "Try it Now" && numbers.length > 3 && luckScore === "") {
      luckScore = calculateLuckScore(numbers);

      luckScreen.textContent = luckScore.resutlFunction;

      if (luckScore.resultText === "Average") {
        const audio = createAudioElementWithSource(
          "./audio/Average.mp3",
          "audio/mpeg"
        );
      }
      if (luckScore.resultText === "Lucky") {
        const audio = createAudioElementWithSource(
          "./audio/Lucky.mp3",
          "audio/mpeg"
        );
      }
      if (luckScore.resultText === "Unlucky") {
        const audio = createAudioElementWithSource(
          "./audio/Unlucky.mp3",
          "audio/mpeg"
        );
      }
      adjustFontSize();
    }
    if (operator === "Reset") {
      resetEverything();
    }
  }
}

$(document).ready(function () {
  $(".data-button").click(function () {
    $(".data-button").not(this).removeClass("active");
    $(this).toggleClass("active");
  });
});
