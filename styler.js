
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
    'azure',
    'biege',
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
console.log("colors: ", colors.join(", "))
// changing element       
        var myFooter = document.getElementById("statusBar");
        console.log(myFooter);
myFooter.innerHTML = "Background color: " + backColor;