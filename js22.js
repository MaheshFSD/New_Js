// how js code works. - first the code gets compiled before it's gets executed
// compilation has 3 speps - 1. tokenizing/lexing, 2. Parsing 3. code generation
//1. Tokenizing - breaking the code into small chunks
// 2. parsing - understanding the small chunks and then it creates AST - Abstract Syntax Tree
// 3. Code generation - creating executable code

// Execution context - 1. Memory creation phase  2. code execution phase
// when control enters the exection context this gets instantiated and variables get instantiated, scope chain is created and instantiated 



// hosting 
// with var and function 
console.log(variable1, ' ------ variable1'); // undefined
var variable1;
// console.log(variable2, ' =-------- variable2'); // reference error not defined
console.log(variable1, '-     ------  variable1'); // undefined
variable1 = 10;
console.log(variable1, ' ------- variable1 ---- '); // 10
console.log(func1); // func1()
func1(); // '------- func1 ------- called ----- '
function func1 (){
    console.log('------- func1 ------- called ----- ');
}
console.log(func1());// this will print ---- ------- func1 ------- called -----  and undefined cause the func1 is not returning to clg stmt ----

// with let and const 

// console.log(variable3, ' =========== variable3 -====== '); // Error - cannot access variable 3 before initialization
// console.log(variable4, ' ------------ var 4 ------ '); // Error
let variable3;
console.log(variable3, ' ------------ var 3 ------ '); // undefined
variable3 = 3000;
console.log(variable3, ' =========== variable3 -====== ');

// console.log(variable5, ' ----- var 5 const ----- '); // error - can't use before
// console.log(variable6, ' ----- var 5 const ----- '); // error - can't use before
// const variable5; // is error. we can't just declare we must initialize
const variable5 = 111111;
console.log(variable5, ' -------- const variable ------ ');

// hello(); // Error Cannot access 'hello' before initialization ---
console.log(hello, ' -------- printing hello ---------');
const hello = () => {
    console.log('-------- welcome all! ------- ');
};
