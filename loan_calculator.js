document.addEventListener('DOMContentLoaded', function (e) {
    const button = document.getElementById('calculate');
    const ammount = document.getElementById('ammount');
    const input_interest = document.getElementById('interest');
    const year = document.getElementById('year');
    const monthly_payment = document.getElementById('monthly');
    const total_payment = document.getElementById('total');
    const total_interest = document.getElementById('totalinterest');

    function calculateLoan() {
        const principal = parseFloat(ammount.value);
        const interest = parseFloat(input_interest.value) / 100 / 12; // Convert percentage to monthly decimal
        const payments = parseFloat(year.value) * 12; // Convert years to months

        if (isNaN(principal) || isNaN(interest) || isNaN(payments) || principal <= 0 || interest < 0 || payments <= 0) {
            alert("Please enter valid positive numbers");
            return;
        }

        const x = Math.pow(1 + interest, payments);
        const monthly = (principal * x * interest) / (x - 1);

        if (isFinite(monthly)) {
            const total = monthly * payments;
            const totalinterest = total - principal;

            animateValue(monthly_payment, 0, monthly, 1000);
            animateValue(total_payment, 0, total, 1000);
            animateValue(total_interest, 0, totalinterest, 1000);

        } else {
            alert("Please check your numbers");
        }
    }

    function animateValue(element, start, end, duration) {
        const starttime = performance.now();
        function update(currentTime) {
            const elapsed = currentTime - starttime;
            const progress = Math.min(elapsed / duration, 1);

            const current = start + (end - start) * progress;
            element.textContent = current.toFixed(2);
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        requestAnimationFrame(update);
    }
    button.addEventListener('click', calculateLoan);
});
