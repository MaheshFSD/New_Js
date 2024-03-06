// sort method, ----- this will change the original method like splice method.
const arr= [81,4,9,44,2,0,989,933,8,5,1,0];
console.log(arr.sort(), ' just trying to sort without any callback ====');    // [0, 0, 1, 2, 4, 44, 5, 8, 81, 9, 933, 989] ---- this a wrong output cause it treats the values as strings and there by checks their ascii value and sort them like dictionary words.....

// arr.sort((a,b)=>a-b); // asscending --- to trate the elemnts as numbers we pass csllbackv....
arr.sort((a,b)=>b-a); // descending order
console.log(arr, ' ========== arr array aftetr sorting it ==== ');
const person = [
    {
        fullName: 'vsvLC',
        gender: 'Male',
        salary: 500000
    },
    {
        fullName: 'GSMR',
        gender: 'Male',
        salary: 100000
    },
    {
        fullName: 'MM',
        gender: 'Female',
        salary: 200000
    },
    {
        fullName: 'RDP',
        gender: 'Male',
        salary: 500000
    },
];
// sort method chages the original array ----- to prevent that
const newPerson = person.slice(0).sort((a,b)=>a.salary-b.salary);
console.log(newPerson, ' ========== new array after sorting by person salary ===== ');

// find method --- returns an element first occurance in the array
const stringLength3 = (str) => {
return str.fullName.length === 3;
}
const findResult = person.find(stringLength3);
console.log(findResult, ' ============= RESULT FROM A FIND METHOS ..... IN case of Array of objkects .... '); 
const strs = ['abcgd', 'uio', 'oiu', 'hjkl'];
console.log(strs.find(ele=>ele!=='uio'), ' ======== find method on just array === with not equal to'); // abcgd - it gives the first occurance of the condition match
console.log(strs.find(ele=>ele==='uio'), ' ======== find method on just array === with not equal to'); // abcgd - it gives the first occurance of the condition match
console.log(strs.find(ele=>ele==='uio'), ' ======== find method on just array === with not equal to'); // abcgd - it gives the first occurance of the condition match
console.log(strs.find(ele=>ele.length === 4), ' ======== find method on just array === with not equal to'); // abcgd - it gives the first occurance of the condition match

// every Method -   returns true / false when the condition applies to all the elements in the array.
console.log(strs.every(a=>a.length>=3), ' ======== just checking all the elements in the strs array length is 3 or more.. '); // true   
console.log(strs.every(a=>a.length>=4), ' ======== just checking all the elements in the strs array length is 3 or more.. '); // false
console.log(person.every(a=> a.fullName.length >= 3), ' ========== checking every method in array of objects '); // false
console.log(person.every(a=> a.fullName.length >= 2), ' ========== checking every method in array of objects '); // true
console.log(person.every(a=> a.salary >= 100000), ' ========== checking every method in array of objects '); // true
console.log(person.every(a=> a.salary > 100000), ' ========== checking every method in array of objects '); // false

// some Method ----- will check wethere there is at leaast one element that passes the condtion then gives true or false --
console.log(strs.some(a => a.length === 4), ' just checks for atleast one element that passes the condition and gives true or false ===') // true
console.log(strs.some(a => a.length === 6), ' just checks for atleast one element that passes the condition and gives true or false ===') // false
console.log(person.some(a => a.gender === 'other'), ' checks in the array of objects and returns true or false ==='); // false
console.log(person.some(a => a.gender === 'Female'), ' checks in the array of objects and returns true or false ==='); // true
console.log(person.some(a => a.gender === 'female'), ' checks in the array of objects and returns true or false ==='); // false as it checked for small letter female