// oop start
// the requirement is to create no of users objects

const user1 = {
    fName: 'abhishek',
    age: 26,
    graduate: true,
    gender: 'male',
    salary: 2000000,
    details () {
        console.log(this.fName, + ' ' + this.age, ' - is working hard -');
    },
    interests () {
        console.log(this.fName, ' --- is interested in Coding ... ');
    }
};

console.log(user1, ' ============ printing user 1 ---- ');

const user2 = {
    fName: 'Mahesh',
    age: 28,
    graduate: true,
    gender: 'male',
    salary: 5000000,
    details () {
        console.log(this.fName, + ' ' + this.age, ' - is working smart -');
    },
    interests () {
        console.log(this.fName, ' --- is interested in Coding ... and teaching ---  ');
    }
};

console.log(user2, ' ============ printing user 1 ---- ');

// like this writing code for million users is not adviced so,

// solution 1
function createUser (fName,age,graduate,gender,salary) {
    const user = {
        fName,
        age,
        graduate,
        gender,
        salary,
        details () {
            console.log(this.fName, + ' ' + this.age, ' - is working hard -');
        },
        interests () {
            console.log(this.fName, ' --- is interested in Coding ... ');
        }
    };
    return user;
};
const userNew1 = createUser('rachit', 30, true, 'male', 250000);
const userNew2 = createUser('ishan', 33, true, 'male', 300000);
const userNew3 = createUser('vidya', 31, true, 'female', 200000);
console.log(userNew1, ' ========== object created from function ------ ');
console.log(userNew2, ' ========== object created from function ------ ');
console.log(userNew3, ' ========== object created from function ------ ');

// the solution might look good but see how many times you create users that many times the methods are getting created... so it's not adviced to repeat 

// solution 2 ---- take out the methods and store in another place and reference them
const userMethods = {
    details () {
        console.log(this.fName, + ' ' + this.age, ' - is working hard -');
    },
    interests () {
        console.log(this.fName, ' --- is interested in Coding ... ');
    }
}

function createUser1 (fName,age,graduate,gender,salary) {
    const user = {
        fName,
        age,
        graduate,
        gender,
        salary,
        details:  userMethods.details,
        interests: userMethods.interests 
    };
    return user;
};
const userNew4 = createUser1('mohit', 28, true, 'male', 100000);
const userNew5 = createUser1('siva', 29, true, 'male', 150000);
const userNew6 = createUser1('nazeer', 30, true, 'male', 200000);

console.log(userNew4, ' ========== object created from function object after using reference ------ ');
console.log(userNew5, ' ========== object created from function object after using reference ------ ');
console.log(userNew6, ' ========== object created from function object after using reference ------ ');

// here this solution works good. but what if you have so many methods to add, ypou have to add them to both, objectmethods object and also to the function then only ypou can able to make them work.
// so there is a high chance that we forget to add them in any of the place, then it causes issues. So
// thinking about a solution here - Even if we miss adding the method to the object we don't want to cause any issue.
// technically even if don't write the method again in the function object, it should work.

// solution 3
function createUser2 (fName,age,graduate,gender,salary) {
    const user = Object.create(userMethods);
    console.log(user, ' ============ printing user obj after creating it using Object.create ----- Now we can reference them as __proto__ or [[prototype]] has the reference of the userMethods');
    user.fName=fName;
    user.age=age;
    user.graduate=graduate;
    user.gender=gender;
    user.salary=salary;
    return user;
};
const userNew7 = createUser2('GSM', 30, true, 'male', 200000);
const userNew8 = createUser2('SSM', 31, true, 'female', 250000);
const userNew9 = createUser2('ZZM', 32, true, 'male', 300000);

console.log(userNew7.details(), ' ========== object created from function object with using Object.create() method to use methods that are not present in the main object but can use them from userMethods object ------ ');
console.log(userNew8.interests(), ' ========== object created from function object with using Object.create() method to use methods that are not present in the main object but can use them from userMethods object ------ ');
console.log(userNew9.details(), ' ========== object created from function object with using Object.create() method to use methods that are not present in the main object but can use them from userMethods object ------ ');
