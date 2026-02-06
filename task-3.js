// const str = "a e i u o ";


// let result =
//   str.includes('a') &&
//   str.includes('e') &&
//   str.includes('i') &&
//   str.includes('o') &&
//   str.includes('u');


// console.log(result);

const str = "a i u o ";
const vowels = "aeiou";

let result = true;

for (const v of vowels) {
  if (!str.includes(v)) {
    result = false;
  }
}

console.log(result)