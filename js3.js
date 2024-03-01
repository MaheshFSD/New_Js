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
    console.log(key, ' == ', person[key], '   =========   key value pairs ===');
}
console.log(Object.entries(person), ' ===================== using Object.entries method to iterate === ');
const personObjectArray = Object.entries(person);
console.log(personObjectArray[0], personObjectArray[1], personObjectArray[2], personObjectArray[3], ' ================ object.entries array elements ==');

