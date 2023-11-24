const { alphabet, palindromes } = require("../utilities/string");
const validatePalindromeOne = (str) => {
  let isPalindrome = true;

  const charArray = str.toLowerCase().split("");

  const purgedCharArray = [];
  for (let k = 0; k < charArray.length; k++) {
    if (alphabet.includes(charArray[k])) purgedCharArray.push(charArray[k]);
  }

  const joinedStr = purgedCharArray.join("");

  for (let index = 0; index < joinedStr.length / 2; index++) {
    if (
      index < joinedStr.length / 2 &&
      joinedStr[index] !== joinedStr[joinedStr.length - index - 1]
    ) {
      isPalindrome = false;

      break;
    }
    // if (index === Math.round(charArray.length / 2) && index < Math.round(charArray.length / 2) )
  }

  console.log(str, isPalindrome);
  return isPalindrome;
};

const validatePalindromeTwo = (str) => {
  const charArray = str.toLowerCase().split("");

  const purgedCharArray = [];
  for (let k = 0; k < charArray.length; k++) {
    if (alphabet.includes(charArray[k])) purgedCharArray.push(charArray[k]);
  }

  const joinedStr = purgedCharArray.join("");

  const isPalindrome = joinedStr.split("").every((char, i) => {
    return char === joinedStr[joinedStr.length - i - 1];
  });
  console.log(str, isPalindrome);
};

const validatePalindromeThree = (str) => {
  const charArray = str.toLowerCase().split("");

  const purgedCharArray = [];
  for (let k = 0; k < charArray.length; k++) {
    if (alphabet.includes(charArray[k])) purgedCharArray.push(charArray[k]);
  }

  const joinedStr = purgedCharArray.join("");

  const reversed = joinedStr.split("").reverse().join("");
  const isPalindrome = joinedStr === reversed;
  console.log(str, isPalindrome);
};

const validatePalindromeFour = (str) => {
  let isPalindrome = true;
  if (str.length === 1) {
    console.log(str, isPalindrome);
    return isPalindrome;
  }

  const purgedChar = str
    .toLowerCase()
    .split("")
    .filter((a) => alphabet.includes(a));

  for (let index = 0; index < Math.round(purgedChar.length / 2); index++) {
    if (purgedChar[index] !== purgedChar[purgedChar.length - index - 1]) {
      isPalindrome = false;
      console.log(str, isPalindrome);
      return isPalindrome;
    }
  }
  console.log(str, isPalindrome);
};

console.time("starting");
console.log("Start Functions");
console.timeEnd("starting");
console.time("validatePalindromeOne");
for (let one = 0; one < palindromes.length; one++) {
  validatePalindromeOne(palindromes[one]);
}
console.timeEnd("validatePalindromeOne");

console.log(" ");

console.time("validatePalindromeTwo");
for (let one = 0; one < palindromes.length; one++) {
  validatePalindromeTwo(palindromes[one]);
}
console.timeEnd("validatePalindromeTwo");

console.log(" ");
console.time("validatePalindromeThree");
for (let one = 0; one < palindromes.length; one++) {
  validatePalindromeThree(palindromes[one]);
}
console.timeEnd("validatePalindromeThree");

console.log(" ");
console.time("validatePalindromeFour");
for (let one = 0; one < palindromes.length; one++) {
  validatePalindromeFour(palindromes[one]);
}
console.timeEnd("validatePalindromeFour");

console.log(" ");
