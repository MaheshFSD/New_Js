// fill Method -- fill withndefault values
const arr = new Array(10).fill(0);
console.log(arr, ' ========== array filled with 10 0 elements');
const arr1 = new Array(10).fill(-1);
console.log(arr1, ' ========== array filled with 10 -1 elements');
const arr2 = new Array(10).fill('abc');
console.log(arr2, ' ========== array filled with 10 abc string elements');

// another usecase of this method is we can change the values of an array from certain index to some index
// ex --- it takes value, starting index and till the index
const arr3 = [1,3,4,5,6,7,8,9,10];
console.log(arr3.fill(1000,3,6), ' ======== check the resultant array that replaced to 1000 from index 3 to till 6 but 6 is not included');
console.log(arr3, ' -======== resultant array === '); // fill method changes the existing array.... 

// splice  - this will change the original array- we use this to delete or insert or do both in the array
// start , insert, delete, elements
// start index, no of elements
const arr4 = [1,3,4,5,6,7,8,9,10,11,1,32,3221,11,1111,343];
// deletion
const deletedItemsArray = arr4.splice(3,2); // deleting 2 elemnts from 3rd index ----- 
console.log(deletedItemsArray, arr4, ' ======= resultant array ==== ');
// insertion 
arr4.splice(3,0,1000,2000,3000,4000);
console.log(arr4, ' --------- elements inserted to arr4 ===');
// deetion and insertion both == 
const deletedItemsArray1 = arr4.splice(3,2,9000,8000,7000,6000,5000);
console.log(deletedItemsArray1, arr4, ' ========= arr4 after deletion and insertion both ----- ');

// iterable
// iterables are where we can use for of loop they are iterables 
// ex - arrays, strings

const str1 = 'Mahesh';
for(let char of str1) console.log(char, ' ======== string character ====');
const strArray = ['mahesh', 'abhishek', 'suman', 'ranveer'];
for(let name of strArray) console.log(name, ' ======== names of the array iteration ====');

let arrNew = [1,2,3,4,5,6,7];
for(let key of arrNew) console.log(key, ' ============== key from for of loop  of arrNew');
for(let key in arrNew) console.log(key, arrNew[key], ' ============== key from for in loop of arrNew ');

// Array like Objects
// those have length property 
// those can accessed by indexes
// ex: ------ strings
