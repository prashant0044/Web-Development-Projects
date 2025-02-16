console.log("Hello World");
console.log(window.document);
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const counter = document.getElementById('counter')

let count = 0;

increase.addEventListener('click', function () {
    count++;
    counter.textContent = count;
})

decrease.addEventListener('click', function () {
    count--;
    counter.textContent = count;
})


reset.addEventListener('click', function () {
    counter.textContent = 0;
})