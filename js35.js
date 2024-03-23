// Synchronos vs Asynchronus
// js is single threaded synchronous language

// ex1 --- Synchronous program
// console.log('Script Start !!!!');
// for(let i=0; i<10000;i++) {
//     console.log(i, 'printing i ----- ');
// }
// console.log('Script ends here')

// ex2 - asynchronous
// console.log('Script starts !!!!!!!');
// for(let i=0;i<1000;i++) 
// console.log('Inside loop ------');
// function func() {
//     console.log(' inside function ----');
// }
// setTimeout(func,1000);
// console.log('Script Ends here.....');

// ex3 -- Asynchronu
// console.log('Script starts !!!!!!!');
// for(let i=0;i<1000;i++) 
// console.log('Inside loop ------');
// function func() {
//     console.log(' inside function ----');
// }
// let timeID = setTimeout(func,1000);
// console.log(timeID, ' ------- set timeout id value ')
// console.log('Script Ends here.....');

// ex4 -- Asynchronus settimeout id clearing
console.log('Script starts !!!!!!!');
let timeID = setTimeout(() => console.log(' ----- inside callback func ----- '),10000);
for(let i=0;i<1000;i++) 
console.log('Inside loop ------');
console.log(timeID, ' ------- set timeout id value ')
console.log('Script Ends here.....');
console.log(clearTimeout(timeID), ' -------- clear timeout ----- ');
clearTimeout(timeID);

// setInterval
console.log('set Interval Example ----- ');
const interval = setInterval(() => {
    console.log('i am from set Interval ---');
},1000);
for(let i=0; i<100; i++) 
console.log('Inside loop ----');
console.log(' script end ---');
setTimeout(() => {
console.log('settimeout called ---- ')
}, 4000);
clearInterval(interval);