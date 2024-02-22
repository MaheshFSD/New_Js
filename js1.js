'use strict'
// firstName='Mahesh'; // Not allowed
// Uncaught ReferenceError: firstName is not defined
// let x =3.14;
// delete x;

const obj1 = {};
Object.defineProperty(obj1, "x", {value:0, writable:false}); // this will cause error in strict mode
// obj1.x = 3.14;
// console.log(obj1, '------');

let obj3 = {get x() {return 20} };
console.log(obj3.x, ' =======');
// obj3.x = 3.14
// console.log(obj3.x, ' =======');
// with (Math){y = cos(0), z = 100};
// console.log(Math.y, z, '11111111');
eval ("z = 8");
alert (z);
eval (' let p = 100');
// alert(p);
function fun () {
    console.log(this);
}
fun()