// Arrow Functions ------ 
const arrowFunEx1 = () => {
    console.log(this, ' ------ this from global arrow ----- '); // window obj
};

arrowFunEx1();

const obj1 = {
    fName: 'Mahesh',
    age: 26,
    details () {
        console.log(this, ' ------- from obj details fun ---- ');
        console.log(this.fName, this.age, '    - from obj details fun ---');
    }
}
obj1.details();
const obj2 = {
    fName: 'Abhishek',
    age: 28,
    details: () => {
        console.log(this, ' ------- from obj2 details fun ---- ');
        console.log(this.fName, this.age, '    - from obj2 details fun ---');
    }
}
obj2.details(); // window and undefined undefined '    - from obj2 details fun ---'

// there is no this in arrow function, the this it takes is from it's surroundings. i.e one level above 
// like in this case it took window above obj2 
// trying it with call apply bind
obj2.details.call(obj2); // window and undefined undefined '    - from obj2 details fun ---'
obj2.details.apply(obj2); // window and undefined undefined '    - from obj2 details fun ---'
const obj2New = obj2.details.bind(obj2);
obj2New(); // window and undefined undefined '    - from obj2 details fun ---'
// Even call, apply bind will not work in this case----- 