// Lexical Environment and scope chain 
let msg = 'Hello!';
console.log(msg, ' --------- Msg is available in global scope');
function greet() {
    console.log(msg, ' ----- Msg is available inside GREET func ------ ');
    function welcome () {
        console.log(msg, ' --------- MSG is available inside the inner function also.')
    }
    welcome();
}
greet();
// Above is lexical env Example -
// Above variable msg is lexically available through out the global scope.... 
// means msg lexical environment is global- 
// lexical environment - means the scope where you can access the value is called lexical scope
