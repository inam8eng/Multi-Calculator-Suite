// Select all the buttons and the screen
import { createDropdown } from "./currencies.js";
import { goodLuck, averageLuck, badLuck } from "./texts.js";
import { switchCalculator } from "./switchCalculators.js";
import { stringify } from "querystring";
const mainButtons = document.querySelectorAll("button[data-calculator-type]");
const calculators = document.querySelectorAll(".calculator");
const standardCalculator = document.querySelector(".standardCalculator");
const standardScreen = document.querySelector(".standard-calculator__screen");
const ageCalculator = document.querySelector(".ageCalculator");
const currencyCalculator = document.querySelector(".currencyCalculator");
const luckCalculator = document.querySelector(".luckCalculator");
const fs = require("fs");
const buttons = document.querySelectorAll(".calculator__button");
const flags = document.querySelectorAll(".flag");
const screen = document.querySelector(".calculator__screen");
const screenAge = document.querySelector(".age-calculator__screen");
const historyButton = document.querySelector(".history__button");
const historyScreen = document.querySelector(".history__screen");

const currencyScreen = document.querySelector(".currency-calculator__screen");
const screenNumber = document.querySelector(".screen-numbers>div");

const luckScreen = document.querySelector(".luck-calculator__screen");
const luckScreenElements = document.querySelectorAll(".luck-screen");
const goodluckScreen = document.querySelector(".good-luck-screen");
const luckButton = document.querySelector(".luckCheck");
const averluckScreen = document.querySelector(".average-luck-screen");
const badluckScreen = document.querySelector(".bad-luck-screen");

// Loop through all the buttons and add a click event listee:\Course\JS\The Complete JavaScript Course 2022 From Zero to Expert!\TutsNodenet The Complete JavaScript Course 2022 From Zero to Expert\01 Welcome, Welcome, Welcome!\complete-javascript-course-master\18-forkify\final\src\js\controller.jsner

//Screen Controller
let numbers = [];

//Main Button Controllers
mainButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.calculatorType;
    console.log(type);
    console.log(screen.textContent);
    currencyScreen.textContent = "0";

    switchCalculator(type);
  });
});

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

  // console.log(calculations);
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
    // Hide history
    historyScreen.classList.add("hidden");
  }

  //Hide history
}

// //Age Calculator
// ageCalculatorButton.addEventListener("click", function () {
//   console.log("Hello Age Calculator");

//   // Example usage
//   // const birthdate = "1990-05-19";
//   // const age = calculateAge(birthdate);
//   // console.log(age); // Output: The calculated age based on the given birthdate

//   standardCalculator.classList.toggle("hidden");
// });

function calculateAge(birthYear) {
  const currentDate = new Date().getFullYear();
  console.log(currentDate);
  const age = `You are ${currentDate - birthYear} Years Old`;
  screenAge.textContent = age;
}

//Currency Calculator

// fetch("countries.json")
//   .then((response) => {
//     response.json();
//   })
//   .then((data) => {
//     createDropdown(data, "countryDropdown");
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

flags.forEach((flag) => {
  flag.addEventListener("click", function () {
    //Get ID of flag
    const id = flag.id;
    try {
      const data = fs.readFileSync("countries.json", "utf8");
      const jsonData = JSON.parse(data);

      createDropdown(jsonData, `${id}`);

      console.log(createDropdown(jsonData), `${id}`);
      console.log(id);
    } catch (error) {
      // Handle any errors
    }
  });
});

// currencyCalculatorButton.addEventListener("click", function () {
//   console.log("Hello Currency Calculator");

//   standardCalculator.classList.toggle("hidden");
// });

//Luck Calculator

function resetEverything() {
  luckScreenElements.forEach((element) => {
    element.classList.add("hidden");
    element.classList.add("inactive-grid-screen");
    console.log(element);
  });
  console.log("reset clicked");

  numbers = [];

  const childDivs = document.createElement("div");
  childDivs.classList.add("screen-numbers");

  childDivs.innerHTML = `<div class = "calculator__screen">Number 1</div>
  <div class = "calculator__screen">Number 2</div>
  <div class = "calculator__screen">Number 3</div>
  <div class = "calculator__screen">Number 4</div>`;
  luckScreen.innerHTML = childDivs.outerHTML;
  childElements = childDivs.querySelectorAll("div");
  console.log(childElements);
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
    console.log(diff1, diff2, diff3);
    badluckScreen.classList.add("active-grid-screen");
    badluckScreen.classList.remove("inactive-grid-screen");

    return { resutlFunction: badLuck(), resultText: "Unlucky" };
  } else {
    // return "You are lazy and a time waster.";
    averluckScreen.classList.add("active-grid-screen");
    averluckScreen.classList.remove("inactive-grid-screen");

    return { resutlFunction: averageLuck(), resultText: "Average" };
  }

  // const randomText = generateRandomText();
  // console.log("Random Text:", randomText);
}

//Handle Numbers

export function handleNumber(number) {
  console.log(`Number clicked: ${number}`);

  //If Standard Calculator is Active
  if (!standardCalculator.classList.contains("hidden")) {
    // console.log(!/[+\-*/]/.test(screen.textContent));
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

  console.log(luckScreen.textContent);
  if (!luckScreen.classList.contains("hidden")) {
    let childElements = document.querySelectorAll(".screen-numbers>div");
    const i = numbers.length;
    console.log(i);
    if (number && numbers.length < 5) {
      numbers.push(number);

      childElements[i].textContent = number;
    }

    // luckScreen.textContent += number;
  }
}

// Function to handle operator inputs
historyButton.addEventListener("click", () => {
  handleHistory();
});
// function createAudioElement(audioName) {
//   let audio = new Audio(audioName);
//   return audio.play();
// }

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

  console.log(audioElement);

  return audioElement;
}

let luckScore = "";

function handleOperator(operator) {
  console.log(`Operator clicked: ${operator}`);

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
    const screenWidth = 480; // Desired screen width in pixels

    const maxFontSize = 1.8; // Maximum font size in rem
    const minFontSize = 1.1; // Minimum font size in rem

    const scaleFactor = (maxFontSize - minFontSize) / 20; // Adjust scale factor as needed

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
      console.log(luckScore);
      luckScore = calculateLuckScore(numbers);
      console.log(luckScore);

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

      // standardCalculator.classList.add("hidden");
      // ageCalculator.classList.add("hidden");
    }
    if (operator === "Reset") {
      resetEverything();
    }
  }
}

$(document).ready(function () {
  // Button Click Event Handling
  $(".data-button").click(function () {
    // Remove active class from other buttons
    $(".data-button").not(this).removeClass("active");

    // Toggle active class for the clicked button
    $(this).toggleClass("active");
  });
});
