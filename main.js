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
let str1 = '         Hello world       ';
console.log(str.length, ' length');
console.log(str.charAt(0), str.charAt(2), str.charAt(str.length-2), ' ===== string charAt method.');
console.log(str.charAt(-3),' --------- negative value doesnot work in charAt but no error');
console.log(str.charCodeAt(0), str.charCodeAt(3), str.charCodeAt(5),'A'.charCodeAt(), 'a'.charCodeAt(), '------ CharcodeAt returns the utf16 ascii value of the character');
console.log(str.at(0), str.at(3), str.at(-3), ' at is introduced in 2022 and it can take negative values also as output');
console.log(str.slice(2,5),str.slice(3,15), str.slice(4,4), str.slice(0,-5), str.slice(-2,6), str.slice(-2,-5), str.slice(0,0), ' =========== slice method which gives a part of the string as output which takes two values as input, first is strting index and second is till the index. it doesnot include the till index value in outpu.');
console.log(str.substring(1,5), str.substring(4), str.substring(0,0), str.substring(-4), str.substring(3, -6), str.substring(-3, 7), str.substring(-2,-7), ' ========== substring is similar to slice but the start and till the end vaues if less than 0(zero) they treat them as 0');
console.log(str.substr(3,5), str.substr(4), str.substr(-6), ' ----------- substr gives a part of the string from the starting value to the no of characters specified.');
console.log(str.toUpperCase(), ' ========= uppercase');
console.log('str'.toUpperCase().toLowerCase(), 'ABC'.toLowerCase(), ' ========= lowerCase');
console.log('abcd'.concat(' connecting with ', 'xyz'), ' =========== concating two strings with some middle string.');
console.log('abcd'.concat('xyz'), ' =========== concating two strings without some middle string.');
console.log(str1.trimStart(), str1.trimEnd(), str1.trim(), ' =========== removes white spaces from start, from end and bothsides respectively');
console.log(str.padStart(20, 'xyz'), ' ========== string padding to start untill the string length reaches to the 20');
console.log(str.padEnd(22, 'xyz'), ' ========== string padding to End untill the string length reaches to the 22');
console.log(str.repeat(4), ' =============== the input string gets repeated specified no of times and returned');
let str2 = 'hello Hello HELLO Hello hello, please listen to me';
console.log(str2.replace('hello', 'hey'), ' ============ replacing first occurance of hello');
console.log(str2.replace(/hello/g, 'hey'), ' ============ replacing All occurances of hello with global flag');
console.log(str2.replace(/HELLO/i, 'hey'), ' ============ replacing first occurance of hello/Hellow case insensitive');
console.log(str2.replaceAll('Hello', 'hey'), ' ============ replacing All occurance of Hello');
console.log(str2.replaceAll('hello', 'hey'), ' ============ replacing All occurance of hello');
console.log(str2.replaceAll(/HELLO/gi, 'hey'), ' ============ replacing All occurance of hello');
console.log(str2.replaceAll(/hello/g, 'hey'), ' ============ replacing All occurance of hello');
console.log(typeof str2, ' ========= type');
let str3 = ' asdffg asds kjk,jkj, kkl,jkkll asdf|ghjkl'
let str4 = 'Hello world';
let str5 = 'Hello hello HELLO hello Hello HELLO World world WORLD '
console.log(str2.split(' '), ' --------- split by white spaces');
console.log(str3.split(','), ' --------- split by comma spaces');
console.log(str3.split('|'), ' --------- split by pipe spaces');
console.log(str4.split(''), ' --------- split Each character');
console.log(str4.split(), ' --------- If nothing provided, then it gives an array and the 0th element is the entire string');
console.log(str4.indexOf('llo'), ' ========== index of gives the first occurance position or index of the string in the given string if it is there. otherwise it returns -1');
console.log(str4.indexOf('lll'), ' ==========  otherwise it returns -1');
console.log(str4.lastIndexOf('o'), ' ========== last index of gives the last occurance position/index of the string in the given string if it is there. otherwise it returns -1');
console.log(str4.indexOf('aaa'), ' ========== lastindex otherwise it returns -1');
console.log(str4.indexOf('l', 5), ' ========== it starts searching from 5th position');
console.log(str4.lastIndexOf('o', 6), ' ========== it starts searching from 6th position');
console.log(str4.search('wor'), ' --------- gives the first occurance of the index if the string gets found or -1. it can not take second parameter like indexOf. but takes powerful search expressions like regular where as indexof doulnot support');
console.log(str4.search('lp'), ' --------- gives the first occurance of the index if the string gets found or -1. it can not take second parameter like indexOf. but takes powerful search expressions like regular where as indexof doulnot support');
console.log(str4.match('wo')[0], ' ----------- match returns array of the matched string / (strings if multiple matches done) in array if it finds. array size 1, value is in array[0]');
console.log(str5.match(/Hello/gi), ' ----------- returns array of multiple matches of o in the string.');
console.log(str5.match(/HELLO/ig), ' ----------- returns array of multiple matches of o in the string.');
console.log(str5.match(/HELLs/), ' ----------- returns nothing....');
console.log(str4.matchAll('l'), ' ----------- MatchAll returns all the matches in regExpStringIterator if finds.if not match returns nothing....');
let regexpstriterator = str4.matchAll('l');
console.log(regexpstriterator[0], Array.from(regexpstriterator)[0][0], ' ----------- MatchAll returns all the matches in regExpStringIterator if finds.if not match returns nothing....');
let regexpstriterator1 = str4.matchAll('H');
console.log(regexpstriterator1[0], Array.from(regexpstriterator1)[0][0], ' ----------- MatchAll returns all the matches in regExpStringIterator if finds.if not match returns nothing....');
console.log(str4.matchAll('abc'), ' ----------- MatchAll returns nothing if not matched....');
console.log(str5.includes('hello'), ' ============== includes returns true if the string is present in the given one or false.');
console.log(str5.includes('hello', 25), ' ============== includes starts checking the string from the starting value.');
console.log(str5.includes('hello', -25), ' ============== includes starts checking the string from right to left.');
console.log(typeof 7, typeof 'hello', typeof {}, typeof true, ' =================== data types')
// console.log(typeof variable,  ' ================ variable'); // we cannot access let and const variables before initialization...
console.log(variable1, ' =================== variable1');
let variable2;
const variable3=100;
console.log(variable3, ' =========================== variable3 ----');
console.log(variable2, ' =========================== variable2 ----');
let variable = 10;
console.log(variable, ' =================== variable');
var variable1 =100;
console.log(typeof variable, typeof String(10), typeof Number('100'), ' ========== type conversion num to string and string to num');
console.log(typeof (variable+''), typeof (+'10'), ' ========== type conversion num to string and string to num');
let variable4 = null;
console.log(variable4, typeof variable4, ' =================== variable 4'); // type of null is object in JS. it is a bug but lots of code and many ides wrote code based on this that's why they left it as bug, heard from a person - not sure
let variable5 = 1234567890123456789087;
console.log(variable5, ' ======================== variable5 ====='); // exponentially saved. to avoid this we use BigInt
let variable6 = BigInt(123412345678901232);
console.log(variable6, ' ---------------------------- variable6 with bigInt');
let variable7 = 123456789123456789n;
console.log(variable7, ' ==================== variable7 ========= ')
console.log(variable6+variable7, ' ==================== we can add bigint with bigint but not with just number');
console.log(123n+456n, ' ============ bigint with bigint works')
console.log(123n + 1234, ' ================================= big with normal') // Error
