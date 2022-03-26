//base in power
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
// randomizer
const max = 500;
const min = 100;
let randomNumber = Math.round(Math.random() * (max - min) + min);
console.log(randomNumber);
const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
const maxColor = colors.length - 1;
const minColor = 0
let randomColor = Math.round(Math.random() * (maxColor - minColor) + minColor);
const backColor = colors[randomColor];
console.log(backColor);
document.body.style.backgroundColor = backColor;



//check password
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
console.log(checkPassword("jqueryismyjam"));