// creating sub classes using extends ---- 
class Vehicle {
    constructor(wheel,color,cc) {
        console.log(' ------ sub class constructor called ----- ');
        this.wheel = wheel;
        this.color = color;
        this.cc = cc;
    }
    power () {
        console.log(this.wheel, ' ------ has powern --- ', this.cc)
    }
}

class TwoWheeler extends Vehicle {
    
}
console.log(new TwoWheeler('2 wheeler', 'black', 200), ' ------ two wheeler ');
const bike = new TwoWheeler('2 wheeler', 'black', 200);
console.log(bike, ' -========== twoWheel class --- ');
console.log(bike.wheel, bike.power(), ' -========== bike class --- ');

class PetrolBike extends Vehicle {
    constructor(wheel,color,cc,capacity) {
        console.log(' ------ sub class constructor called ----- ');
        super(wheel,color,cc);
        this.capacity = capacity;
    }
    pickup () {
        console.log(' ----- petrol vehicles have good pickup- --------  ');
    }
}

const hondaPetrolBike = new PetrolBike ('2 wheeler', 'Red', 200, '2 people');
console.log(hondaPetrolBike, ' ========= honda instance of petrolbike ------');
console.log(hondaPetrolBike.wheel, hondaPetrolBike.capacity, hondaPetrolBike.pickup(), hondaPetrolBike.power, ' =========== ');

// class getter and setters 
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    details () {
        return `${this.firstName} is of age ${this.age}`;
    }
} 

const user1 = new Person ('Mahesh', 'G S', 28);
console.log(user1, ' ========== user1 ----');
console.log(user1.firstName,user1.lastName, ' ========== user1 properties ----');
console.log(user1.details(), ' ========== user1 method calling ----');

// here i want to access the details method without paranthesis - but it's not a property, still i want to get the response 
// we can do this by using getter 
class Person1 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get details () {
        return `${this.firstName} is of age ${this.age}`;
    }
    nameChange (firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
} 
console.log(Person1, ' -------- person1 class --- ');
const person1User1 = new Person1('Abhishek', 'shukla', 26);
console.log(person1User1, ' ----- person1 object 0------ ');
console.log(person1User1.firstName, ' ----- person1 object properties ------ ');
console.log(person1User1.details, ' ----- person1 object 0------ '); // remember we are not calling it directly here - still we get output - Abhishek is of age 26  ----- person1 object 0------ 
// because we used get here ----- now if we call it using () it says error saying it's not a function cause now it treats it like property

// setter Example ------ we need to change the values of the properties of the class object, to do that we can follow bellow solutions 

// solution 1
person1User1.firstName = 'lokesh';
person1User1.lastName = 'vaas';
console.log(person1User1, '========= after changing the values ---- ');

// solution 2 --- create a method in the class and through it change the values ----
person1User1.nameChange('Rakesh', 'modi');
console.log(person1User1, ' ------- after changing values through method ----');

// solution 3

