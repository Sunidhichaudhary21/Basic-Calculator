// Initialize the display value as '0'
let displayValue = "0";

// Function to add a value to the display
function addToDisplay(value) {
  // Check if the current display value is '0', if so, replace it with the new value
  if (displayValue === "0") {
    displayValue = value;
  } else {
    // If the current display value is not '0', append the new value to it
    displayValue += value;
  }

  // Update the display element with the new value
  document.getElementById("display").innerText = displayValue;
}

// Function to clear the display
function clearDisplay() {
  // Reset the display value to '0'
  displayValue = "0";

  // Update the display element with the new value
  document.getElementById("display").innerText = displayValue;
}

// Function to calculate the result
function calculate() {
  try {
    // Evaluate the expression in the display using the eval() function
    const result = eval(displayValue);

    // Check if the result is a finite number
    if (Number.isFinite(result)) {
      // Limit the result to 4 decimal places
      displayValue = result.toFixed(4);

      // Update the display element with the result
      document.getElementById("display").innerText = displayValue;
    } else {
      // If the result is not a finite number, throw an error
      throw new Error("Invalid expression!");
    }
  } catch (error) {
    // Catch and handle any errors that occur during evaluation
    alert(error.message);

    // Clear the display in case of an error
    clearDisplay();
  }
}
