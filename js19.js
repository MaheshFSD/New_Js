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