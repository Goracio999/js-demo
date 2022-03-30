/*/base in power
let base = prompt("Give me a number:");
console.log(base, typeof base);
base = Number(base);
console.log(base, typeof base);

let power = prompt("Give me a power:");
power = Number(power);
const baseInPower = Math.pow(base, power);
console.log(base, " in power ", power, " is ", baseInPower);
const messageBaseInPower = base + " in power " + power + " is " + baseInPower;
alert(messageBaseInPower);
const result = base ** power;
console.log(result); 
*/
// randomizer 
const max = 500;
const min = 100;
let randomNumber = Math.round(Math.random() * (max - min) + min);
console.log(randomNumber);


// підсумовування чисел, що вводить користувач

let input;
let total = 0;
while (true) {
  input = prompt('Введіть число');

  if (isNaN(Number(input))) {
    alert('Було введено не число, спробуйте ще раз');
    continue;
  }

  if (input === null) {
    break;
  }

  input = Number(input);
  total += input;
}
alert(`Загальна сума чисел дорівнює ${total}`);

/*/check password
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
    console.log(password);  
  switch (password) {
      case null:
          message = "Canceled by user!";
          break;
      
    case ADMIN_PASSWORD:
          message = "Welcome!";
          break;  
             
    default:
      message = "Access denied, wrong password!";
  }
    console.log("jqueryismyjam" === ADMIN_PASSWORD);
  // Change code above this line
  return message;
}

console.log(checkPassword("mangohackzor"));
console.log(checkPassword(null));
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam")); */
