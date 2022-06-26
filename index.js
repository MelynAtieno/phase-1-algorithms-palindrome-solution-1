function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here
    
    const wordreverse = reverseString(word);
    return word === wordreverse;
  
  
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here

  // A function called isPalindrome needs to be created. This functions returns
   either true or false. If a string is a palindrome, the function returns "true",
   whereas if the string is not a palindrome, the function returns "false".
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
