const alphabet = ["A", "B", "C", "D", "E", "F"];
const numbers = ["1", "2", "3", "4", "5", "6"];

// const a = alphabet[0];
// const b = alphabet[1];
const [a,, c, ...rest] = alphabet;

const newArray = [...alphabet, ...numbers]

console.log("a: " + a);
console.log("b: b is skipped because it is left blank with a comma");
console.log("c: " + c);
console.log("all of the rest: " + rest);
console.log("newArray is essentially both concatenated: " + newArray);

const sumAndMultiply = (a, b) => {
    // swap comments to test division
    return [a+b, a*b]
    // return [a+b, a*b, a/b]
}
const array = sumAndMultiply(2, 3);
console.log("sum: " + array[0] + "\nmultiply: " + array[1]);

// or 
const [sum, multiply, division = "no division"] = sumAndMultiply(2, 3);
console.log("sum: " + sum);
console.log("multiply: " + multiply);
console.log("division: " + division);