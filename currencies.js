import { handleNumber } from "./script";

const getResult = document.getElementById("calculate");
const currencyScreen = document.querySelector(".currency-calculator__screen");

const dropdowns = {};
const flagCurrencies = {};

//Create Dropdown Element

export function createDropdown(data, containerId) {
  // Check if dropdown already exists
  if (dropdowns[containerId]) {
    return; // If dropdown already exists, exit the function
  }
  // Create the select element
  const selectElement = document.createElement("select");
  selectElement.classList.add("dropdown");

  // Get the dropdown container element
  const dropdownContainer = document.getElementById(containerId);

  // Iterate over each country
  data.forEach((country) => {
    // Create an option element for each country
    const optionElement = document.createElement("option");
    optionElement.value = country.currency; // Set the value of the option
    optionElement.textContent = country.name; // Set the text of the option

    // Append the option to the select element
    selectElement.appendChild(optionElement);
  });

  // Append the select element to the dropdown container
  dropdownContainer.appendChild(selectElement);

  dropdowns[containerId] = selectElement;

  // Add an event listener for the "change" event
  selectElement.addEventListener("change", function () {
    // Retrieve the selected value
    const selectedValue = this.value;

    flagCurrencies[containerId] = selectedValue;
    console.log(containerId);

    // Do something with the selected value
    // console.log(flagCurrencies[containerId]);

    //My API

    getResult.addEventListener("click", () => {
      const fromFlagId = document.querySelector(".flag-left").id;
      const toFlagId = document.querySelector(".flag-right").id;
      console.log(flagCurrencies[fromFlagId]);

      const fromValue = flagCurrencies[fromFlagId];
      const toValue = flagCurrencies[toFlagId];

      console.log(currencyScreen.textContent);
      // console.log(flagCurrencies);

      // var myHeaders = new Headers();
      // myHeaders.append("apikey", "sIRnQJi16KEhm44IoL49deE9815XUcam");

      // var requestOptions = {
      //   method: "GET",
      //   redirect: "follow",
      //   headers: myHeaders,
      // };

      // fetch(
      //   `https://api.apilayer.com/currency_data/convert?to=${toValue}&from=${fromValue}&amount=${currencyScreen.textContent}`,
      //   requestOptions
      // )
      //   .then((response) => response.text())
      //   .then((data) => {
      //     console.log(data);
      //     const parsedData = JSON.parse(data);
      //     const resultValue = data.result; // Extract the "result" value from the response
      //     console.log(resultValue);
      //     currencyScreen.textContent = resultValue; // Update the screen with the result value
      //   })
      //   .catch((error) => console.log("error", error));
    });
  });
}
