export default class User {
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
// you can only have one default export. you can have multiple normal exports along with it.