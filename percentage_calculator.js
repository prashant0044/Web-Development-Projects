// Selecting elements
const button = document.getElementById('button');
const amount_input = document.getElementById('amount');
const percent_input = document.getElementById('percentage'); // Fixed the ID
const amount_output = document.getElementById('amount-value'); // Fixed duplicate ID
const percent_output = document.getElementById('percentage-value');

function calculate() {
    const numvalue = parseFloat(amount_input.value);
    const percentvalue = parseFloat(percent_input.value);

    // Validation for empty or invalid inputs
    if (isNaN(numvalue) || isNaN(percentvalue)) {
        alert("Please enter valid numbers for both fields.");
        return;
    }

    // Correct formula for percentage calculation
    const result = (numvalue * percentvalue) / 100;
    const final = numvalue + result;

    // Display results
    percent_output.textContent = formatNumber(result);
    amount_output.textContent = formatNumber(final);
}

// Function to format numbers (rounding to 2 decimal places)
function formatNumber(number) {
    return number.toFixed(2);
}

// Event Listener for Button Click
button.addEventListener('click', calculate);
