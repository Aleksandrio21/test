const mainTittle = document.querySelector('#tittle');
let result = 0;

const btnDecrement = document.querySelector('#decrement');
const btnReset = document.querySelector('#reset');
const btnIncrement = document.querySelector('#increment');
console.log(btnIncrement)

btnIncrement.addEventListener('click', () => {
    result++;
    mainTittle.textContent = result;
});

btnDecrement.addEventListener('click', () => {
    result--;
    mainTittle.textContent = result;
})

btnReset.addEventListener('click', () => {
    result = 0;
    mainTittle.textContent = result;
})