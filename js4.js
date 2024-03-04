// hosting incase of var
var a = 10;
console.log(a, ' ======== printing aaaaa ==='); // 10
console.log(b, ' =========== printing bbbbb before declare and initializing ====='); // undefined
var b;
console.log(b, ' =========== printing bbbbb after declare but not initialized ====='); // undefined
b = 20;
console.log(b, ' =========== printing bbbb again after declare and initializing..  ===='); // 20

// Hosting incase of LET
// console.log(c, ' ======= printing C before declare and initialized '); // This is Reference error ------ you cannot access c b efore initialization
let c;
console.log(c, ' ======= printing C after declare but not initialized '); // Undefined
c=30;
console.log(c, ' ======= printing C after declare and initialized '); // 30

// Hosting in case of CONST
// console.log(d, ' ======= printing d before declare and initialized '); // This is Reference error ------ you cannot access c b efore initialization
const d = 30; // you cannot do assignment later incase of const. we must declare and initialize at once only
console.log(d, ' ======= printing d after declare and initialized '); // 30

// Hosting in case of FUNCTIONS 
greet(); // Hello!!!!!!!!  ====== you can access the function before declaring it also in regular functions
function greet() {
    console.log('Hello!!!!!!!!');
};

// Hosting in case of FUNCTION Expressions using var let and const
// helloVar(); // Uncaught Type Error: HelloVar is not a function
var helloVar = function () {
    console.log('From hello function with var');
};
helloVar();
// helloLet(); // Reference Error cannot access hellovar bfore initialization
let helloLet = function () {
    console.log('From hello function with LET');
};
helloLet();
// helloConst(); // Reference Error cannot access hellovar bfore initialization
const helloConst = function () {
    console.log('From hello function with CONST');
};
helloConst();

// Hostinhg in case of Arrow functions ==== is similar to function Expressions
// helloVarArrow(); // Uncaught Type Error : helloVarArrow is not a Function
var helloVarArrow = () => {
    console.log('From hello function with var Arrow');
};
helloVarArrow();
// helloLetArrow(); // Reference Error cannot access hellovarArrow bfore initialization
let helloLetArrow = () => {
    console.log('From hello function with LET Arrow');
};
helloLetArrow();
// helloConstArrow(); // Reference Error cannot access hellovar bfore initialization
const helloConstArrow = () => {
    console.log('From hello function with CONST Arrow');
};
helloConstArrow();