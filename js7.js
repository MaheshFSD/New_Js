// ForEach - can only be used to iterate through the array.
let arr = [1,2,3,4,5,6,7];
arr.forEach(ele => console.log(ele, ' ============= element of the array -====== '));

// map - Map is used to do logic on the array and return a resultant array 
const arrNew = arr.map(ele => {
    return ele+10;
});
console.log(arrNew, ' ========= map returned new array ======');

for(let key of arr) console.log(key, ' ============== key from for of loop ');
for(let key in arrNew) console.log(key, arrNew[key], ' ============== key from for in loop ');
const person = [
    {
        fullName: 'vsv',
        gender: 'Male',
        salary: 500000
    },
    {
        fullName: 'GSM',
        gender: 'Male',
        salary: 100000
    },
    {
        fullName: 'MM',
        gender: 'Female',
        salary: 200000
    },
    {
        fullName: 'RD',
        gender: 'Male',
        salary: 500000
    },
]
const newPerson = person.map(user=>{
    user.age = 50;
    return user;
})
console.log(newPerson, ' ============ mapping through person obj and creating a new');

// filter - filters the only data we want and returns a new array 
const filteredPerson = person.filter(user=> user.salary!==100000)
console.log(filteredPerson, ' ========== array after filtering the data ------ ');
const filteredPerson1 = person.filter(user=> user.salary===500000)
console.log(filteredPerson1, ' ========== array after filtering the data ------ ');

// reduce - reduce method used to reduce the aray to a value like ex summing all the elements etc ..... 

const totalSalary = person.reduce((totalSal,user)=> {
    return totalSal+user.salary;
}, 0);
console.log(totalSalary, ' ============= total salary of the person array of obj');

const sumOfArr = arr.reduce((accumulator,num)=>accumulator+num); // here without the default value also works. but not in the case of array of objects ===== 
console.log(sumOfArr, ' =========== sum of values of just array');

const totalSalary1 = person.reduce((totalSal,user)=> {
    return totalSal+user.salary;
}, 1000000);
console.log(totalSalary1, ' ============= total salary 1 of the person array of obj with beginning value');
