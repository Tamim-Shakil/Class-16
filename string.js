// console.log("test");

let stringValue = "";
// console.log(stringValue);
let sentence = "Bangladesh is highly populated country";
let newUser = "Jamal";
// console.log(sentence);

// console.log(sentence.length);
// console.log(newUser.length); // 6 with whitespace // length is used to determine size of a string

let greeting = "Good Night";
let user = " Rakib";

let newGreeting = greeting.concat(user);

// using concat method
newGreeting = greeting.concat(" Himeel");
// console.log(newGreeting);

// using console
// console.log(greeting, user);

// using operetor
// console.log(greeting + user);

// subString - take a portion of a string
let newCountry = sentence.substring(10, 20);
// newCountry = newUser.substring(0, 4);
// console.log(newCountry);

// slice - take a portion of a string (it'stake negative index as well)
let slice = newUser.slice(-5);
slice = sentence.slice(-20, -5);
// console.log(slice);

let blogPost =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam fuga nulla, delectus error at est corrupti, quo distinctio totam enim quod adipisci dicta, pariatur consectetur facere earum voluptatibus nisi illo!";

// console.log(blogPost.slice(0, 50) + ".....");

//Search index
let newSentence = "I Love to Drink Coffee!";

// use to search a index uusing word / letter
let searchWord = newSentence.indexOf("coffee");
console.log("search:", searchWord); // return an index - 10, 20, 4, 6, r jodi na khuje pai - > -1

// use to find a specipic letter using index
let searchLetter = newSentence.charAt(10);
console.log(searchLetter);

// to search specipic word from a string
console.log(newSentence.includes("love")); // return true or false

console.log(newSentence.includes("Love")); // return true or false

//case changing----

// to convert every letter in lowercase
let lowerCase = newSentence.toLowerCase();
console.log(lowerCase);

// to convert every letter in uppercase
let upperCase = newSentence.toUpperCase();
console.log(upperCase);

// removes spaces from string
let cleanInput = "    Hello my name is Neel...   ";
console.log(cleanInput.trim());

// find if the word "hello" present in the new given sentence

let natureWord = "Hello, i always love to enjoy the beauty of nature";

let natureWordInLowerCase = natureWord.toLowerCase();

let searchFor = "Always";

let searchInLowerCase = searchFor.toLowerCase();

// if (natureWord.toLowerCase().includes(searchFor.toLowerCase())) {
//   console.log(searchFor, "word is present in the sentence");
// } else {
//   console.log(searchFor, "word is absent in the sentence");
// }

// if (natureWordInLowerCase.includes(searchInLowerCase)) {
//   console.log(searchFor, "word is present in the sentence");
// } else {
//   console.log(searchFor, "word is absent in the sentence");
// }

if (natureWordInLowerCase.indexOf(searchInLowerCase) === -1) {
  console.log(searchFor, "word is absent in the sentence");
} else {
  console.log(searchFor, "word is present in the sentence");
}

// console.log(natureWordInLowerCase.indexOf(searchInLowerCase));

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);

let bio = "Mr.Blue has a blue house";
let position = text.search("Blue");
console.log(position);

let quote = "Life is short! Enjoy it";
let output = quote.substring(5, 10);
console.log(output);

// slice
let saying = `       Time Flies! Wake up before it gone!`;

let newSaying = saying.slice(0, 20);
console.log(newSaying + "...view more");

//chartAt (index)
console.log(saying.charAt(28));

//indexOf
console.log(saying.indexOf("!"));
console.log(saying.lastIndexOf("el"));

// includes
let includes = saying.includes("Wake");
console.log(includes);

let search = saying.search("wake");
console.log(search);

// trim
let trim = saying.trim();
console.log(trim);

// find if the word "Enjoy" present in the new given sentence.

let organicWord = "Hello, i always love to enjoy the beauty of nature";
let findhWord = "enJoy";

let neworganicWords = organicWord.toLowerCase();

if (organicWord.includes(findhWord)) {
  console.log(`Yes, ${findhWord} is present in the sentence`);
} else {
  console.log("404 not found!");
}

let emailAddress = "tamim720sk@Gmail.com";
let checkFor = "@gmail.com";

console.log(emailAddress.search(checkFor));

if (emailAddress.toLowerCase().search(checkFor.toLowerCase()) !== -1) {
  console.log("Correct Email Format");
} else {
  console.log("Incorrect format use", checkFor);
}

function gmailChecker(emailAddress) {
  const checkFor = "@gmail.com";
  if (emailAddress.toLowerCase().search(checkFor.toLowerCase()) !== -1) {
    console.log("Correct Email Format");
  } else {
    console.log("Incorrect format use", checkFor);
  }
}
