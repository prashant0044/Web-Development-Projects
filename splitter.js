function calculateTip() {
    const bill_amount = parseFloat(document.getElementById('bill-amount').value);
    const rating_entry = parseFloat(document.getElementById('rating-entry').value);
    const people_entry = parseInt(document.getElementById('people-number').value);

    // Validation Checks
    if (isNaN(bill_amount) || bill_amount <= 0) {
        alert("Please Enter a valid bill amount");
        return;
    }
    if (isNaN(people_entry) || people_entry < 1) {
        alert("Please Enter at least 1 person");
        return;
    }

    // Calculation
    const tip_value = bill_amount * rating_entry;
    const bill_value = bill_amount + tip_value;
    const bill_person = bill_value / people_entry;
    const tip_person = tip_value / people_entry;

    // Update Values in the DOM
    document.querySelector('.tip-value').textContent = `Rs. ${tip_value.toFixed(2)}`;
    document.querySelector('.bill-value').textContent = `Rs. ${bill_value.toFixed(2)}`;
    document.querySelector('.person-value').textContent = `Rs. ${bill_person.toFixed(2)}`;
    document.querySelector('.tip-person-value').textContent = `Rs. ${tip_person.toFixed(2)}`;
}

// Event Listeners
document.getElementById('submit').addEventListener('click', calculateTip);

