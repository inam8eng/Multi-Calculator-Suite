const buttons = document.querySelectorAll("button[data-calculator-type]");
const calculators = document.querySelectorAll(".calculator");

export function switchCalculator(target) {
  calculators.forEach((calculator) => {
    if (calculator.classList.contains(target)) {
      console.log(target);
      calculator.classList.remove("hidden");
      calculator.querySelectorAll("button").forEach((button) => {
        button.disabled = false;
      });
    } else {
      calculator.classList.add("hidden");
      calculator.querySelectorAll("button").forEach((button) => {
        button.disabled = true;
      });
    }
  });
}
