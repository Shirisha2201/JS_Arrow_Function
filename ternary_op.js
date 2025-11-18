const isEven = n => n%2===0;

console.log("isEven(10):", isEven(10));
console.log("isEven(7):", isEven(7));

let marks = 40;
let result = marks >= 35 ? "Pass":"Fail";
console.log("Result:", result);

marks = 20;
result = marks >= 35 ? "Pass":"Fail";
console.log("Result:", result);

const greet = name => `Hello, ${name ? name: "Guest"}`;
console.log(greet("Shirisha"));
console.log(greet());