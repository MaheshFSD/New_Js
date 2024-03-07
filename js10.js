// sets - all about sets
// 1. it is iterable 2. can not allowed duplicates(unique items only), 3. index based access not allowed, 4. order is not guaranteed, 5. duplicates are ignored. 6. it has own methods. 7. length property can not be used
const elementsSet = new Set([1,1,1,1,2,2,3,4,5,5,5,6,6,4,6,7,8,9,9,9,9,9])
console.log(elementsSet, ' ========= this set ignored all the duplicate elements and given unique values...');
console.log(elementsSet[0], '======= trying to access by index ==='); // undefined   -- not allowed
console.log(elementsSet.length, '======= trying to access length ==='); // undefined   -- not allowed
const stringSet = new Set('asdsfrdrxfdsdxdfsseseaaadsardtr');
console.log(stringSet, ' ======= string iterable given to set and it ignores the duplicates and gives resultanat set ===');
// const setExample1 = new Set(1,2,3,4,5); // only iterables are allowed .... type error.
// console.log(setExample1, '========== giving values to set not iterables ----') // won't work ---
const multiDatatypeSet = new Set('abc','g',[100,200,300],{hello: 'world'}); // {'a', 'b', 'c'} other than 'abc' all are ignored .... 
console.log(multiDatatypeSet, ' ========== multi datatype set example');
const setExample2 = new Set();
const arr4 = [100,200,300,400];
// add method -
setExample2.add(1);
setExample2.add(1);
setExample2.add(2);
setExample2.add(3);
setExample2.add(4);
setExample2.add(1);
setExample2.add(2);
setExample2.add(13);
console.log(setExample2, ' ============== setExample2 after adding few elements to it......');
// you can add multi data type  values to set
setExample2.add(arr4)
setExample2.add(arr4)
setExample2.add(arr4)// adding arr4 multiple times ignored. cause it is stored in the same memory
setExample2.add([900,800,700]);
setExample2.add([900,800,700]);
setExample2.add([900,800,700]); // this is possible cause javascript treats each array ios different as they stored in different memory locations....
console.log(setExample2, ' ===== after adding different datatypes =======');
// there is no length property on sets. but we have size property.
console.log(setExample2.size, ' ============== size property gives the no of elelments present in the set');
// delete
setExample2.delete([900,800,700]); // returns true or false if the deletion happens -----
console.log(setExample2.delete([900,800,700]), setExample2, ' ======= after deleting the [900,800,700] ======'); // this waay won't possible to delete the array
console.log(setExample2.delete(1),setExample2.delete(2),setExample2.delete(3),setExample2.delete(4), setExample2, ' ======= after deleting the [900,800,700] ======'); // this waay you can delete elements in the set
// has method - returns true or false
console.log(setExample2.has([900,800,700]),setExample2.has(13), ' ======= checking if the array [900,800,700] is present in the set or not. ======'); // checking array is not possible hence false 13 gets found so true
setExample2.forEach(ele=>console.log(ele, ' ========== iterating through set ====='));
for(const ele of setExample2) console.log(ele, ' =========== set iteration from for of loop =======');
// console.log(setExample2.clear(), ' ============= clear method output on sets ====== ');
// console.log(setExample2.size, ' =========== size of set after clearning all the elements ====');
console.log(setExample2.keys(), ' =========== keys of the set ===== ');
console.log(setExample2.values(), ' =========== values of the set ===== ');
console.log(setExample2.entries(), ' =========== key value pairs of the set ===== ');




