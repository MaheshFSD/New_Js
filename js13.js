// Methods - functions inside object
const person = {
    fName: 'Mahesh',
    age: 26,
    about: function(){
        console.log('----- Function inside an object. i.e Method ------ ');
    },
    details: function () {
        // console.log(' ------------ person name is', fName, ' and age is', age, ' ============'); // fName is not defined - Error - reference error ---
        console.log(' ------------ person name is', this.fName, ' and age is', person.age, ' ============');
        console.log(this, ' ================= printing this ================ '); // this is the fill object that called the details function ====
    }
}
person.about() // ----- Function inside an object. i.e Method ------ 
console.log(person.fName, person.age, person.about(), ' ======== printing all the propertis and calling the method of the obj');
person.details();
function greet () {
    let msg = 'Welcome';
    console.log(' --------- Dear', this.fName, this.age+' '+ ' you are most', msg );
}
person.greetfunc = greet;
person.greetfunc();
console.log(this, ' ----------- just priniting this'); // window
console.log(window, ' ----------- just priniting this'); // window
// console.log(this.alert('Hi'),alert('Hello!'),window.alert('Namaste!'), ' ----------- just priniting this');

function newFunc () {
    console.log(this, '------- this inside a function'); // window
}
newFunc();
// so we can also call like this
window.newFunc();
this.newFunc();
// to prevent this we can use 'Strict mode'
function newFunc2 () {
    'use strict';
    console.log(this, ' ------- this inside strict -------- '); // undefined
}
newFunc2(); // undefined
this.newFunc2(); // window
window.newFunc2(); 

// Call, apply and bind methods

const obj1 = {
    fName: 'Mahesh',
    age: 26,
    details: function () {
        console.log(this.fName, this.age, ' ========= is a valued member ------');
    }
}
const obj2 = {
    fName: 'lokesh',
    age: 28
}
// if i want to use the details method of the obj1 with the info of obj2, i can make use of it using call, apply and bind
// now as details is inside obj1 we have to call it from the obj only
obj1.details.call(obj2) // now we are calling the obj1 detaiols meyhod by passing obj2 ------- lokesh 28  ========= is a valued member ------
// lets create a global function and use call on it.
function funcEx () {
    console.log(' ------- inside funcEx functiion ==========');
}
funcEx(); // ditect call
window.funcEx();
this.funcEx();
// now we can call this function in another way also using call
funcEx.call(); 
funcEx.apply();
funcEx.bind(); // this won't call the function instead returns the function that we can call later
const funcExNew = funcEx.bind();
console.log('\n',funcExNew, ' =========== resultant function after binding it ------ ');
funcExNew();
// call, apply and bind on a function which is not a method and using arguments ---- 
function funcEx2 (param1,param2,param3) {
    // console.log(fName, age, ' scores are - ', param1,param2,param3);  // fname and age is not defined
    console.log(this.fName, this.age, ' - scores are - ', param1,param2,param3); // Mahesh 26  - scores are -  undefined undefined undefined
}
funcEx2.call(obj1); // HERE WE ARE NOT passing any arguments -----
funcEx2.call(obj1, 'maths - 100', 'science-110', 'databases-150'); // Mahesh 26  - scores are -  maths - 100 science-110 databases-150
