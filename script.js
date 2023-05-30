// 1. Write a JavaScript function that reverse a number.
const reverse = () => {
  console.log(x.toString().split("").reverse().join(""));
};
// reverse(98765);

/* 2. Write a JavaScript function that accepts a string
as a parameter and converts the first letter of each
word of the string in upper case. */

const capitalize = (txt) => {
  //   turn the string into an array
  const arr = txt.split("");
  //    grab the first character of both words and turn the to uppercase.
  const t = arr[0].toUpperCase() + txt.slice(1, 6);
  const a = arr[7].toUpperCase() + txt.slice(7);

  console.log(t, a);
};
// capitalize('tuwaiq academy');

/* 3. Write a JavaScript function that accepts a string
as a parameter and counts the number of vowels within
the string. */

const vowelsCount = (txt) => {
  let pattern = /[^a, e, i, o, u]/g;
  const t = txt.replaceAll(pattern, "").replaceAll(" ", "");
  console.log(t.length);
};
// vowelsCount('javascript is awesome');

/* 4. Write a JavaScript function that accepts a number
as a parameter and check the number is prime or not. */

const checkNumber = (num) => {
  if (num % 2 === 0) {
    console.log("not a prime number");
  } else {
    console.log("prime");
  }
};

// checkNumber(1);

/* 5. Write a JavaScript function that accepts a string
as a parameter and find the longest word within the
string.
*/
const findMaxLength = (txt) => {
  // split the string and turn it into an array
  const arr = txt.split(" ");
  //   define a vriable with the value of zero so you can compare with
  let maxCount = 0;
  let maxIndex = "";

  //   loop through the array and get the length and the string
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].length);
    if (arr[i].length > maxCount) {
      // assign the max length to the variable above 'maxCount'

      maxCount = arr[i].length;
      maxIndex = arr[i];
    }
  }
  console.log(`the longest word is: ${maxIndex} ${maxCount}`);
};
// findMaxLength("Kingdom of Saudi arabia");

/* 6. Write a JavaScript function that returns a passed
string with letters in alphabetical order.
Example
*/

const sortString = (txt) => {
  const arr = txt.split("");
  arr.sort();
  console.log(arr);
};
// sortString("webmaster");

/* 7.Create a function that takes two numbers as
arguments and returns their sum 
*/

const addition = (n1, n2) => {
  console.log(n1 + n2);
};
// addition(3, 5);

/* 8. Create a function that takes the age in years and
returns the age in days.
*/

const calcAge = (age) => {
  console.log(age * 365);
};
// calcAge(13);

/* 9.Write a function that converts hours into
seconds.
*/

const calcHours = (hour) => {
  console.log(hour * 3600);
};
// calcHours(3);

/*
10. Create a function that takes a number as its
only argument and returns true if it's less than or
equal to zero, otherwise return false.
*/

const findNum = (num) => {
  if (num <= 0) {
    console.log("true");
  } else {
    console.log("false");
  }
};

// findNum(-34333);

/* 
11. Create a function that will return an integer number
corresponding to the amount of digits in the given
integer num
*/

const findDigitNum = (num) => {
  const arr = num.toString().split("");
  const len = arr.length;

  console.log(arr, len);
};
// findDigitNum(9);

/* 
12 .Write a function that converts an object into
an array, where each element represents a keyvalue pair 
in the form of an array.
*/

const convert = () => {
  const obj = { a: 1, b: 2 };
  const keys = Object.entries(obj);
  console.log(keys);
};
// convert(22);

/*
13. salesman has a number of cities to visit. They
want to calculate the total number of possible paths
they could take, visiting each city once before
returning home. Return the total number of possible
paths a salesman can travel, given n cities.
*/
const paths = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * paths(n - 1);
  }
};
console.log(paths(3));
/*
14.Create a function that takes a word and
returns true if the word has two consecutive identical
letters.
*/
const doubleLetters = (word) => {
  let w = word.split("");
  let tempArr = [];
  let count = 1;
  for (let i = 0; i < w.length; i++) {
    if (w[i] === w[i + 1]) {
      console.log("true", w);
      count++;
    } else {
      console.log("false");
      return;
    }
  }
};
// doubleLetters("apple");

/*
15.Write a JavaScript program to get the current date.
Expected 
*/

const currentDate = () => {
  const today = new Date();
  console.log(today.toLocaleDateString());
};
// currentDate();

/*
16. Create a function that takes two dates and returns
the number of days between the first and second date
*/

// const calcDays = () => {
//   const today = new Date().toLocaleTimeString();

//   later = "02-06-2023";

//   const def = now - later;
//   console.log(def);
// };
// calcDays();

/*
18. Write a JavaScript program that accept two numbers and
print the larger number
*/

const findLargerNumber = (n1, n2) => {
  if (n1 > n2) {
    console.log(`${n1} is larger than ${n2}`);
    return;
  }
  console.log(`${n2} is larger than ${n1}`);
};

// findLargerNumber(4, 3);
