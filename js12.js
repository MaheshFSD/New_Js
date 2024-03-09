// object cloning ....
// Using Object.assign
const obj = {
    fname: 'abhi',
    age: 22
};
const obj2 = obj; // assigning obj to obj2
console.log(obj, obj2, ' ==----------- printing both objs ----');
// now changing the value of one of the object
obj2.gender = 'male';
console.log(obj, obj2, ' ==----------- printing both objs ----'); // you get gender in both the objects, cause it represents the same memory location heap. 
// to avoid this we clone object into another
const obj3 = Object.assign({}, obj2); // it is one of the way to clone objects. it's little bit old. you can find it in legasy codes
console.log(obj, obj2, obj3, ' ==----------- printing all the objs ----');
// now adding a new value to obj2 and obj3
obj2.salary = 500000;
obj3.dept = 'IT';
console.log(obj, obj2, obj3, ' ==----------- printing all the objs ----'); // here you can clearly see the obj2 and obj3 are different objs

// using spread operator
const obj4 = {...obj3};
console.log(obj3,obj4, ' ========= printing obj3 and 4');
// adding new values to both the objects
obj3.verticle = 'BE';
obj4.position = 'TPM';
console.log(obj3,obj4, ' ========== both objs are clearly different ----- ');

// optional Chaining 
const obj5 = {
    fName: 'Abhishek  shukla',
    // address: {
    //     city: 'bangalore',
    //     state: 'karnataka'
    // }
}
console.log(obj5);
console.log(obj5.fName);
console.log(obj5.address);
// what if the address object is not there in the object
// console.log(obj5.address.city, obj5.address.state, ' =============== state and city of address obj'); // error we cannot access anything over undefined 
// to achieve this we use optional chaining
console.log(obj5?.address?.city, obj5?.address?.state, ' =============== state and city of address obj'); // No error ----- op is undefined and undefined /........



