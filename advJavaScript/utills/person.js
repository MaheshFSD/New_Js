export class Person {
    constructor(firstName,lastName,age,gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    details () {
        console.log('User full name  is ', this.firstName, this.lastName);
    }    
};
export default class Person2 {
    constructor(firstName,lastName,age,gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    details2 () {
        console.log('User full name  is ', this.firstName, this.lastName);
    }    
};