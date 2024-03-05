// call back functions
function func1 () {
    console.log('from func1');
};
function func2 (param) {
console.log('from func2');
console.log(param, ' ======== parameter ===');
param(); // === from func1 ======= here we are calling param as function cause we passed a function as a callback so we can call it in the func2 function
}
func2(func1);

// Function returning a function
function func3 () {
    function func4 () {
        console.log('i am inside a function that is returned.....');
    }
    return func4;
}
const funcReturned = func3();
console.log(funcReturned, ' ========= this is the function that is returned from the called function .....');
funcReturned(); // this gives the output after calling the returned function -------- i.e ------ i am inside a function that is returned.....