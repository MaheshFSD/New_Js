// how js code works. - first the code gets compiled before it's gets executed
// compilation has 3 speps - 1. tokenizing/lexing, 2. Parsing 3. code generation
//1. Tokenizing - breaking the code into small chunks
// 2. parsing - understanding the small chunks and then it creates AST - Abstract Syntax Tree
// 3. Code generation - creating executable code

// Execution context - 1. Memory creation phase  2. code execution phase
// when control enters the exection context this gets instantiated and variables get instantiated, scope chain is created and instantiated 



// hosting 
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
