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
console.log(this.alert('Hi'),alert('Hello!'),window.alert('Namaste!'), ' ----------- just priniting this');

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
