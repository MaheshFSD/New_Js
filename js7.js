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
        fullName: 'GSM',
        gender: 'Male',
    },
    {
        fullName: 'MM',
        gender: 'Female',
    },
    {
        fullName: 'RD',
        gender: 'Male',
    },
]
const newPerson = person.map(user=>{
    user.age = 50;
    return user;
})
console.log(newPerson, ' ============ mapping through person obj and creating a new');
