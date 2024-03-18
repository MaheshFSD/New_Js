// closures
// function reurns a function
// ex 1
function fullName (fNAme,lNAme) {
    function printname() {
        console.log(fNAme, lNAme, ' ---------- f and l name ------- ');
    }
    return printname;
}
const result = fullName('Mahesh', 'G S');
result();

// ex2 
function calc (a,b) {
    let c = 1000;
    function total () {
        console.log(a+b+c, ' -------- total');
    }
    return total;
}
const ans = calc(10,100);
ans();

// ex3
// function power (p) {
//     function calculatePower (ind) {
//         console.log(ind ** p, ' ----- value ----- ');
//     }
//     return calculatePower;
// }
// const power = (p) => {
//     return (ind) => console.log(ind ** p, ' ----- value ----- ');
// }
const power = (p) =>  (ind) => console.log(ind ** p, ' ----- value ----- ');
const cube = power(3);
console.log(cube, ' -------- function that is returned ---- ');
cube(10);
const square = power(2);
square(9);
const powerOf4 = power(4);
powerOf4(2);
