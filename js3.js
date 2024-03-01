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


