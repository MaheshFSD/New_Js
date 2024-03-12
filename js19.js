// classes 
class CreateUser {
    constructor (fName,age,graduate,gender,salary) {
        this.fName = fName;
        this.age = age;
        this.graduate = graduate;
        this.gender = gender;
        this.salary = salary;
    }
    details () {
        console.log(this.fName, this.age, ' --------- is a wonderful coder ------ ');
    };
    interests () {
        console.log(this.graduate, this.gender, ' --------- likes to code and teach ------ ');
    }
}

const user1 = new CreateUser ('mahesh', 28, true, 'male', 400000);
console.log(user1, ' ============ user1 --------- ');
console.log(user1.fName, user1.age, user1.salary, user1.interests(),user1.details(), ' ============== user class instance is called');
console.log(Object.getPrototypeOf(CreateUser), ' ----------- class prototype -------- ');
console.log(Object.getPrototypeOf(user1), ' ----------- user1 prototype -------- ');
console.log(user1.prototype, ' ========== user1 prototype -------- ');
console.log(user1.__proto__, ' ========== user1 prototype -------- ');

// examples
class Animal {
    constructor(name,age,legs,speed) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.speed = speed;
    }
    roar () {
        console.log(this.name, ' ---------- roar is ----- ');
    }
    speedCount () {
        console.log(this.speed, ' --------- is the speed of the animal -');
    }
}
const dog = new Animal('sniffer', 5, 4,25);
console.log(dog, '============ dog  ---------- ');
console.log(dog.prototype,'  ---------- dog prototype ------ ');
console.log(dog.age, dog.roar(), dog.speedCount(), ' ============== properties and methods --------- ');
console.log(dog.__proto__, ' ========== dog proto ------- ')
console.log(Object.getPrototypeOf(dog), ' ========= dog prototype by getPrototype function ------- ');