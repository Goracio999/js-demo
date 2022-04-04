const btnAdd = document.querySelector('button[data-add]');
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('.js-output span');
const resetBtn = document.querySelector('button[data-reset]');
let totalSum = 0;
console.log(valueInput.value);
console.log(outputEl);
// Event handler for "Add" button
btnAdd.addEventListener('click', function () {
    console.log('clicked');
    const valAdd = Number(valueInput.value);
    totalSum += valAdd;
    console.log(valAdd, typeof valAdd);
    valueInput.value = '';
    console.log("total : ", totalSum);
    outputEl.textContent = totalSum;
    if (totalSum < 0) {
      // change color to "red" for negative value 
      outputEl.style.color = "red";
    } else {
      // set color to "blue" for not negative value
      outputEl.style.color = "blue";
    }
});

// Event handler for "Clear" button
resetBtn.addEventListener('click', function () {
    totalSum = 0;
    outputEl.textContent = totalSum;
});