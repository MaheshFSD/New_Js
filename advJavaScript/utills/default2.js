export default class User2 {
    constructor(firstName,lastName,age,gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    details () {
        console.log('User full name  is ', this.firstName, this.lastName);
    }    
}