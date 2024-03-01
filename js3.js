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


