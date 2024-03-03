// For In Loop
let colours = ['red', 'blue', 'orange','green', 'yellow', 'white'];
for(let idx in colours) console.log(colours[idx], ' -', idx); /// one way 
for( let colour of colours) console.log(colour.toUpperCase(), ' ========= changing each element to upper case');
// Spreading of Array [ ...colours]
let colours1 = [...colours, ' Black', 'voilet'];
console.log(colours1, ' ------------ New array after spreading...');
// Destructuring array ....
let [colour1, colour2, cols,...cols2] = colours;
console.log(colour1,colour2,cols, cols2, ' --------------- values after destructuring colours array');
let [myColor1, myColor2, ...myColorArray] = colours1;
console.log(myColor1,myColor2,myColorArray, ' --------------- values after destructuring colours array');
const names = ['first'];
let [firstName, lastName] = names;
console.log(firstName,lastName, ' =========== after destructuring the Array names');
//usually when ever we use arrays destructuring we prefer constant than let. by this we can avoid the changing values unknowingly...
// if you don't want some variables while destructurung you can avoid them by just giving , (comma) without any name..
const stds = [ 'std1', 'std2', 'std3', 'std4', 'std5'];
// say you don't need std3 and std4 values. ex
const [s1,s2,,,s5] = stds;
console.log(s1,s2,s5, ' -=============== getting only required vales by destructuring the array =====');
const [ss1,ss2, ...remainingElementsArray] = stds;
console.log(ss1,ss2, remainingElementsArray, ' ================== taking the remaining elements into a new array');
// object creation and accessing and modification 
const person = {
    fName: 'Abhinay',
    hobbies: ['cricket', 'singing', 'cooking'],
    age: 28,
};
console.log(person, person.age, person.hobbies, person.hobbies[2], person.gender, ' ================= just accesing the v alues of the object ==' );
person.gender = 'Male';
// console.log(person, person[age], person[gender], person[hobbies], ' =============== just ytrying to access properties through bracket notation -===-'); // Error because we didn't specify the property name in string format in bracket notation.
// we can't access properties like above
console.log(person, person['age'], person['gender'], person['hobbies'], ' =============== just ytrying to access properties through bracket notation -===-'); 
// person.111 = 'just some value'; // won't work with this kind of keys. here you must use bracket notion. this is a Error. won't work
person['111'] = 'key with numbers'; // this is fine. we can use this format...
person.hobbies.forEach(ele=>console.log('elements of the array in the object are using ForEach Method...', ele));
// there is one more difference to dot and bracket ===
// const employee = {
//     full name : ' abhinay shukla', // we can't write two words like this for a property name. there is no spaces allowed in names of varables...
// }
// what we can do is 
const employee ={
    'full name': ' Abhinay shukla',
    age: 29,
};
// now access the properties of the object through both notations
// console.log(employee, employee.full name, employee.age, ' =========== using dot notation ------'); // this won't work as it clearly is out of the dot notaion. it's an error
// here we must use bracket notation only.
console.log(employee, employee['full name'], employee['age'], ' =========== using bracket notation ------'); // this works
// one more difference
let objKey = 'email';
// now you want to create a key with objKey.
person.objKey = 'hello@gmail.com';
console.log(person, " =========== you can clearly see that it took objKey as it's key instead of email as it's key === "); // to avoid this we use bracket notation 
delete person.objKey;
person[objKey] = 'abhijith@hello.com';
console.log(person, ' =========== NOW CHECK THE DIFFERENCE BETWEEN NOTATIONS IN THIS CASE ===');
// OBJECT ITERATION
Object.keys(person).forEach(ele => console.log(person[ele], ' ============ Object iteration for elements === '));
console.log(Object.values(person), ' ================ Object values array ==== ');
for(let key in person) {
    console.log(key, ' == ', person[key], '   =========   key value pairs === using FOR IN');
}
console.log(Object.entries(person), ' ===================== using Object.entries method to iterate === ');
const personObjectArray = Object.entries(person);
console.log(personObjectArray[0], personObjectArray[1], personObjectArray[2], personObjectArray[3], ' ================ object.entries array elements ==');
personObjectArray.forEach(ele => console.log(ele, ele[0]+' = '+ ele[1], ' ================= entries object output iteration -==== '));
let resArray = Object.entries(person).map(eachEntry => console.log(eachEntry[0]+' = '+eachEntry[1], ' just printing from iteration usinhg entries using MAP'));
Object.entries(person).forEach(ele => console.log(ele[0]+' = '+ele[1], ' just printing from iteration usinhg entries with FOREACH'));
console.log(person.hasOwnProperty('age'), person.hasOwnProperty('salary'), ' ========== returns true or false ==== ');
// computed properties ..... 
let var1 = 'variable1';
const var2 = 'variable2';
const var3 = 'variable3';
const value1 = 'value1';
const value2 = 'value2';
const value3 = 'value3';
// create a new object with computed properties ....
const computedObj = {
    [var1]: value1,
    [var2]: value2,
    [var3]: value3
};
console.log(computedObj, ' -======== Computed properties of the object..... ');

// array spreading  ...
let array1 = [1,2,3,4];
let array2 = [5,6,7,8];
let array3 = [...array1,array2,9,10];
console.log(array3, ' =============== creaating a new array with spreading operator ==== ');
console.log([...array1,...array2, 10,20,30], ' ========= sample spreading');
console.log([...'ABCDEFG', ...'987654', ...'1234567'], ' ================ spreading strings'); //  ['A', 'B', 'C', 'D', 'E', 'F', 'G', '9', '8', '7', '6', '5', '4', '1', '2', '3', '4', '5', '6', '7'] 

//Array destructuring ....
const arrayDestruct = ['v1', 'v2', 'v3'];
// const [v1,v2,v3] = arrayDestruct;
// const [v1,v3] = arrayDestruct;
// const [v1,,v3] = arrayDestruct; // skipping the second value of the array
const [v1,...v3] = arrayDestruct; // getting remaining all the eelments into v3 by destructuring the array.
console.log(v1,v3, ' ============= array destructuring ---===== ');
// Object spreading ...
let newComputedObj = {...computedObj, var4: 'value4'};
console.log(newComputedObj, ' ========== newComputedObj after destructuring an obj ----- ');
console.log({...'111', ...222}, ' ================ it will destrucure the the string but not the number ');
// console.log({...'111', ...abcdef}, ' ================ it will destrucure the the string but not the number '); // abcdef is not defined --- reference error 
console.log({...[1,2,3,4], ...'abc', ...'987', ...['xyz']}, '========= destructuring object in deifferent ways ====== '); // {0: 'xyz', 1: '8', 2: '7', 3: 4} it's interesting..... check the object is taking the first array element length and next if the elements again come on previous indexes / or key the values will change.

// Object destructuring ..... 
const obj = {
    dest1: 'dval1',
    dest2: 'dval2',
    dest3: 'dval3',
    dest4: 'dval4',
    dest5: 'dval5',
};
console.log(obj, ' ============== example object ==== ');
const {dest1, dest2} = obj;
console.log(dest1, dest2, ' ==============  values of the object after destructuring .....  ======== ');
const {dest1: newDwst1, dest2: newDest2, dest3: newDest3} = obj;
console.log(newDwst1, newDest2, newDest3, ' ==============  values of the object after destructuring .....  ======== ');
const {...newObjDest} = obj;
console.log(newObjDest, ' ================= destructuring object values into another object ;;;;;; ');
const {dest1: newD1, ...newDestObj2} = obj;
console.log(newD1, newDestObj2, ' ========= after taking the values required just destructuring the remaining values in another object ====');



