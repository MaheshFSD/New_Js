// Methods - functions inside object
const person = {
    fName: 'Mahesh',
    age: 26,
    about: function(){
        console.log('----- Function inside an object. i.e Method ------ ');
    }
}
person.about() // ----- Function inside an object. i.e Method ------ 
console.log(person.fName, person.age, person.about(), ' ======== printing all the propertis and calling the method of the obj');

