// getPrototypeOf - method ----- 
const arr = [1,2,3,4];
console.log(arr);
console.log(arr.prototype,' --------- array prototype ------');
const prot = Object.getPrototypeOf(arr);
console.log(prot, arr.prototype, ' =========== ')
console.log(Array.prototype, ' -------- array prototype ------- ');
console.log(arr.__proto__,)
// see the prototype is an array when you try to get it from array --------

// function prototype is object but array prototype is array
// it's not a fixed value, we can change the value --------
function greet () {
    console.log('Welcome!');
}
console.log(greet.name, ' =-------- ');
console.log(greet.prototype, ' ---------- function prototype ---- '); // {}

greet.prototype = [];
greet.prototype.push(1);
greet.prototype.push('hello');
console.log(greet.prototype, ' --------- greet prototype ---- ');
console.log(Object.getPrototypeOf(greet), ' ========== greet prototype ------------ ');
console.log(Object.getPrototypeOf(arr), ' ========== arr prototype ------------ ');


