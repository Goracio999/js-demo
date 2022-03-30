
// randomizer in styling
const colors = [
    'tomato',
    'teal',
    'orange',
    'darkturquoise',
    'lightseagreen',
    'olive',
    'aqua',
    'aquamarine',
    'darkcyan',
    'darkolivegreen',
    'skyblue',
    'lightgreen'];
const maxColor = colors.length - 1;
const minColor = 0;
let randomColor = Math.round(Math.random() * (maxColor - minColor) + minColor);
const backColor = colors[randomColor];
console.log(backColor);
document.body.style.backgroundColor = backColor;
console.log("colors: ", colors.join(", "));

// changing element - greeting sensitive by hour       
var myGreeting = document.getElementById('greeting');
console.log(myGreeting);
var currentTime = new Date();
console.log("Current date: ", currentTime);
currentHour = currentTime.getHours();
console.log("Current hour: ", currentHour);
let greetingStart;
if (currentHour < 4) {
    greetingStart = "Добраніч";
} else if (currentHour < 12) {
    greetingStart = "Доброго ранку";
} else if (currentHour < 18) {
    greetingStart = "Доброго дня";
} else {
    greetingStart = "Доброго вечора";
}
const greetingMessage = `${greetingStart}, ми з України!`
console.log(greetingMessage);
myGreeting.innerHTML = greetingMessage;
// status bar
var myFooter = document.getElementById("statusBar");
console.log(myFooter);
myFooter.innerHTML = "Background color: " + backColor;