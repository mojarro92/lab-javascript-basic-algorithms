// Iteration 1: Names and Input
let hacker1 = "John";
console.log("The driver's name is " + hacker1);
let hacker2 = "Bob";
console.log("The navigator's name is " + hacker2);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has a longer name!, it has " + hacker1.length + " characters.");
} else if (hacker1.length < hacker2.length) {
    console.log("The navigator has a longer name!, it has " + hacker2.length + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters.");
}
// Iteration 3: Loops
// 3.1
let str = "";
for (let i = 0; i < hacker1.length; i++) {
    str = str + `${hacker1[i]} `;
}
console.log(str.toUpperCase());
// 3.2
let str2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    str2 = str2 + hacker2[i];
}
console.log(str2);
// 3.3
if (str > str2) {
    console.log("The driver's name goes first.");
} else if (str < str2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What! You both have the same name?");
}