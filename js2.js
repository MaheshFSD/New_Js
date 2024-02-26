// 1. Sum of n natural nums
let n = +prompt('please eneter a number'), result = 0;
// console.log(n*(n+1)/2, ' is the sum of natural numbers till ' + n); // this is using formulae
while(n>0) {
result+=n;
n--;
}
console.log(result, ' is the sum of natural numbers till ' + n);

// 2. Prime number checking
let prime = +prompt('please eneter a number'), flag = true;
if(prime < 2) console.log(' not a prime number')
else if(prime === 2) console.log(' it is a prime number');
else {
    for(let i =2; i*i<=prime; i++) {
        if(prime%i === 0) {
            flag = false;
            break;
        }
    }
}
console.log(flag? ' it is a prime number': ' it is not a prime number');
console.log(Symbol('optional string'), '      ========= symbol ');
console.log((Symbol() === Symbol()), '      ========= symbol ');
let x = ['hello', 20, 'say it', { a: 20, b: 30}];
console.log(x, ' ========= ordered collection of items... is reference type');
x[2] = 100.123;
console.log(x, ' ========= ordered collection of items...');
console.log(Array.isArray(x) , ' =========== iArray will tell if it is a Array or not. returns true or false');
x.push(10000);
console.log(x, ' =====after pushing elememt');
let catchEle = x.pop();
console.log(x, ' ======== after popping elememt');
let catchEle1 = x.shift();
console.log(x, ' ======= after removing element in the beginning  elememt');
x.unshift(22222);
console.log(x, ' ======= after adding element in the beginning  elememt');
// understand the diff btw primitive type and reference type
// primitive types gets stored in stack
// why? -- because they will take minimum memory only.
// reference type - they gets stored in heap. 
// why - they might take up large memory spaces. 
// and the variable x in stack has the address of the array value stored in heap.
// if yu assign one array to another variable or reference type variable to another then it has the same address in the stack like the reference type variable but the data that is stored at the address is the array elements.
// primitives are call by values and references are call by reference
let y = x;
console.log(x,y, ' ========= printing both the arrays ====');
x.unshift('asdfgh');
console.log(x,y, ' ========= printing both the arrays and they both gets the updated data. because x and y are reference types and tthey has the address stored in stack and values in heap. ====');
// Cloning one array to another
// let z = x.splice(0); // one way
// let z = x.concat([]); // another way
// let z = [].concat(x); // another way 
let z = [...x];
let p = [...z, ...y, ' Hello']
console.log(z, ' ============= new cloned z array')
console.log(p, ' ============= new cloned p array')
let q = 'qwertyu';
console.log(q.length, ' ================== string length ===');
console.log(p.length, ' ================ p array length ==');
for(let ele of p) console.log(ele, ' -------- Each element travered in FOR OF Loop ==='); // One way ------ to travrse through array
p.forEach(ele => console.log(ele, ' =========== Each element in FOREACH loop'));
p.forEach(ele => console.log(JSON.stringify(ele), ' =========== stringifying Each element  JSON - javascript object notation'));
// use Const while creating arrays. this way you can not re-assign a new array to the same variable as it gives error. but in case of let.

