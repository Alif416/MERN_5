// Day -05

//  Logical and operator
// console.log("Logical and operator");
// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);

// console.log("sumon" && null);

// console.log(50 > 10 && 90 < 5);

/* 
"" == false
0 == false 

*/

//  Logical or operator
// console.log("Logical or operator");
/* console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false); */

// console.log("Dhaka" && "Khulna");

// console.log(NaN || "Khulna" || "Hello");

//  Logical not operator
// console.log("Logical not operator");
// console.log(!"Dhaka");

// Nullish Coalescing

/* console.log(null ?? "sumon ");
console.log(undefined ?? "khulna ");
console.log(-0 ?? "khulna "); */

// console.log(!-10000 && "khulna");

const num1 = 100;
const num2 = 200;

// const result = "hello" ? "Yes" : "No";
// console.log(result);

let score = 75;
let grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";

// condition ? "value1": "value2"

const result = typeof [2, 3]; // birth Array
const objType = [2, 3] instanceof String; // birth Object

console.log(objType);