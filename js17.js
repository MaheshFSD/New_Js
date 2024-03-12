// new keyword
function createUser4 (fName,age) {
    this.fName = fName;
    this.age = age;
}
createUser4.prototype.greet = function() {
    console.log('Welcome  p---------- ', this.fName, this.age);
}
console.log(new createUser4('Mahesh', 26));
const user1 = new createUser4('Abhishek', 28);
console.log(user1, ' ============ user 1 automatically has this type referenced with the prototype of the createUser4 function');
// new creates an empty instance or obj that is this
// and it automatically reference the prototype with the createUser4 function prototype. no need to add Object.create method here ---- 
// and the function returns the obj

// we use new keyword solution to our previous problem.....
 
//solution 5 ------using new keyword - on Constructor function
function CreateUser5 (fName,age,graduate,gender,salary) {
    // const user = Object.create(userMethods); // we don't need this statement
    console.log(this, ' ============ printing user obj after creating it using new ----- Now it will automatically reference them as __proto__ or [[prototype]] has the reference of the userMethods');
    console.log(this.__proto__, ' --------- [[prototype]] ');
    this.fName=fName;
    this.age=age;
    this.graduate=graduate;
    this.gender=gender;
    this.salary=salary;
    // return user; // No need to return this 
};
CreateUser5.prototype.details = function() {
    console.log('Welcome  p---------- ', this.fName, this.age);
}
CreateUser5.prototype.interests = function() {
    console.log(this.fName, ' --- is interested in Coding ... ');
}
const user2 = new CreateUser5('qqq', 29, true, 'female', 200000);
const user3 = new CreateUser5('www', 30, true, 'male', 250000);
const user4 = new CreateUser5('eee', 31, true, 'male', 300000);

console.log(user2.details(), ' ========== object created by using new keyword  ------ ');
console.log(user3.interests(), ' ========== object created by using new keyword  ------ ');
console.log(user4.details(), ' ========== object created by using new keyword  ------ ');

// in order to identify the function that is only need to be called by new keyword only
// we follow this convention of starting the function name with Capital letter with the name
// so  should be createUser5 changed to CreateUser5

// there is a problem in this code if you just want to traverse through through this
for(let key in user2) 
console.log(key , ' ========== key in the user2 ===== ');
// the above line gives you the keys present in the user2 and also the keys that are in PROTOTYPE 
// to avoid getting all the keys you can use hasownproperty method on object......
for(let key in user2) {
    if(user2.hasOwnProperty(key)) console.log(key, ' -------- key only inside user2 ------- ');
}
// in this way you can avoid the keys in prototype ....... 

