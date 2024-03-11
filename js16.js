// function Prototype
// functions can be treated both as function and as object also
function greet () {
    console.log('Hello All!');
};
greet();
console.log(greet.name, ' --------- there is a property called name returns name of the fun ----') // greet  --------- there is a property called name returns name of the fun ----

// we can create our own properties on function
greet.newProperty = 'property1';
console.log(greet.newProperty, ' -------- newly created property ---- ');
console.log(greet.prototype, ' ============= prototype of the greet fun ======='); // only functions has this prototype.
// trying fetching prototype on obj and array
console.log({'x':'y'}.prototype, ' ========== obj prototype');
let obj = {
    'abc': 'xyz'
};
console.log(obj.prototype, ' ========== obj prototype'); // undefined ' ========== obj prototype'
console.log([1,2,3,4].prototype, ' ========== trying prototype on arrays ===== '); // undefined ' ========== trying prototype on arrays ===== '

// adding few propeties to greet
greet.prototype.msg = 'Welcome',
greet.prototype.welcomeMsg = function () {
    return 'Welcome to JS Code';
}
console.log(greet.prototype.welcomeMsg(), ' ========== calling a fnction property on function prototype -===== ');

// now applying this prototype solution to our previous solution 3

// solution 4
// instead of userMethopds object we use directly the prototype object from the function
function createUser3 (fName,age,graduate,gender,salary) {
    const user = Object.create(createUser3.prototype); // prototype chaining ------
    console.log(user, ' ============ printing user obj after creating it using Object.create ----- Now we can reference them as __proto__ or [[prototype]] has the reference of the userMethods');
    console.log(user.__proto__, ' --------- [[prototype]] ');
    user.fName=fName;
    user.age=age;
    user.graduate=graduate;
    user.gender=gender;
    user.salary=salary;
    return user;
};
createUser3.prototype.details = function () {
    console.log(this.fName, + ' ' + this.age, ' - is working hard -');
}
createUser3.prototype.interests = function () {
    console.log(this.fName, ' --- is interested in Coding ... ');
}
const userNew10 = createUser3('aaa', 25, true, 'male', 100000);
const userNew11 = createUser3('sss', 26, true, 'female', 120000);
const userNew12 = createUser3('ddd', 27, true, 'male', 220000);
userNew10.details();
userNew11.interests();
userNew12.details();

 