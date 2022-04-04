// Operation with strings
function slugify(title) {
    // Change code below this line
    const normalString = title.toLowerCase();
    console.log(normalString);
    const arrayFromTitle = normalString.split(" ");
    console.log(arrayFromTitle)
    const slugString = arrayFromTitle.join("-");
    console.log(slugString);
    return slugString;
}

 const words = ["JavaScript", "це", "цікаво"];
 console.log(words.join(" ")); // "JavaScript це цікаво"
 console.log(words.join("_")); // "JavaScript-це-цікаво"
 
console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
console.log(slugify("putin must DIE"));
console.log(slugify(words.join(" ")));