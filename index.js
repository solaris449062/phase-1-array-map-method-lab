const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCaseWord(word) {
  return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
}

const titleCased = function() {
  return tutorials.map(sentence => {
  let wordArray = sentence.split(' ');
  // console.log(wordArray)
  let titleCasedSentence = "";
  for (let i = 0; i < wordArray.length; i++) {
    if (i === wordArray.length - 1) {
      titleCasedSentence += titleCaseWord(wordArray[i]);
    }
    else {
      titleCasedSentence += titleCaseWord(wordArray[i]) + " ";
    }
  }
  // console.log(titleCasedSentence)
  return titleCasedSentence;
})
}


// let testArray = ["abc def", "bcd efg", "cde fgh"]

// const testFunction = function(array) {
  
// }(

console.log(titleCased());

// testString = "abc";
// testString = testString.replace(testString.charAt(0), testString.charAt(0).toUpperCase());
// console.log(testString);

