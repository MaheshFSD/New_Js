console.log('Checking git');
let obj={
    a: 'hello',
    b: 100
}
console.table(obj);
console.error('I am a big Error');
console.warn('i am a warning');
console.info('Just for your information');
console.group('group started');
console.log('1111111');
console.log('2222222');
console.groupEnd();
console.clear();
function x(x1,x1) { // This causes error in strict mode
    console.log(x1);
}
x(10,20);
let a = 0O10;
// console.log(a);
let b = "\xA9"
console.log(b);
// const obj1 = {};
// Object.defineProperty(obj1, "x", {value:0, writable:true}); // this will cause error in strict mode
// obj1.x = 3.14;
// console.log(obj1);
let obj2 = {get x() {return 10} };
console.log(obj2.x, ' =======');
obj2.x = 3.14
console.log(obj2.x, ' =======');
with (Math){y = cos(0), z = 100};
console.log(Math.y, z, '11111111');
eval ("x = 2");
// alert(x);
function fun () {
    console.log(this);
}
fun()
document.write('Hello from document.write')
let p=1,q=2,r=3;console.log(p,q,r,'======');
let sq = 2;
console.log(2 ** 4, ' ======== square');
console.log(36 ** .5, ' ======== squareRoot');
console.log(Math.cbrt(8), ' === cuberoot');

// Strings, properties and methods.....
let str = 'qwertyuiop';
console.log(str.length, ' length');
console.log(str.charAt(0), str.charAt(2), str.charAt(str.length-2), ' ===== string charAt method.');
console.log(str.charAt(-3),' --------- negative value doesnot work in charAt but no error');
console.log(str.charCodeAt(0), str.charCodeAt(3), str.charCodeAt(5),'A'.charCodeAt(), 'a'.charCodeAt(), '------ CharcodeAt returns the utf16 ascii value of the character');