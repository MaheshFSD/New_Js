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
