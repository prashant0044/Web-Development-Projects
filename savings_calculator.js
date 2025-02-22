document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('button');
    const result = document.getElementById('solution');

    function calculateSavings() {
        const goal_amount = parseFloat(document.getElementById('amount-goal').value);
        const monthly_contribution = parseFloat(document.getElementById('monthly-goal').value);
        const current_savings = parseFloat(document.getElementById('current-goal').value);

        if (isNaN(goal_amount) || isNaN(monthly_contribution) || isNaN(current_savings) || monthly_contribution <= 0) {
            alert("Please enter valid numeric values.");
            return;
        }

        const savings_left = goal_amount - current_savings;
        if (savings_left <= 0) {
            result.textContent = "You have already reached your savings goal!";
            return;
        }

        const months = Math.ceil(savings_left / monthly_contribution);
        result.textContent = `You need to save for ${months} more months.`;
    }

    button.addEventListener('click', calculateSavings);
});
