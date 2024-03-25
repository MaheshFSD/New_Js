// Promise.resolve()
// Promise Chaining ... 

//ex1
const promise1 = Promise.resolve(100);
console.log(promise1, ' -------- promise1 ------');

//ex2
promise1.then((resp) => console.log(resp, ' ---------- resp ------- '));
const promise2 = Promise.resolve('Hello');
promise2.then(resp => console.log(resp, ' -------- resp from promise 2 -------'));

//ex3
Promise.resolve({str: 'success'}).then(resp => console.log(resp, ' --------- resp from fullfilled promise.resolve()'));

// Promise.resolve() - always gives a  promise and it is in fullfilled state. you can run .then on it.
// .then will always returns a promise. even though you return a value from it, you can do .then on it. because it returns a promise.resolve always. if you are not returning anything it returns undefined by default. 

// ex4\
const promise3 = () => {
    return new Promise((resolve, reject) => {
        const arr = [{key1: 'value1'}];
        console.log(Array.isArray(arr), ' --------- type --- ');
        if(Array.isArray(arr))
        resolve(arr);
        else
        reject('Something went wrong....');
    })
}
promise3().then((resp) => {
    console.log(resp, ' -------- from promise3 ------');
    const newResp = [...resp, {key2: 'value2'}];
    return newResp;
})
const promise4 = promise3().then((resp) => {
    const newResp = [...resp, {key3: 'value3', key4: 'value4'}];
    console.log(newResp, ' -------- modified resp ---- ');
    return newResp; // this line means Promise.resolve(newResp) --- if we do not return anything it will return undefined here -- that means Promise.resolve(undefined) and we can directly apply .then on returned promise.
})
promise4.then(resp => {
    console.log(resp, ' ----- resp data of promise chain of P4 ---- ');
    const newResp = [...resp, {'1234': '1234'}];
    // if we don't return anything bydefault it returns undefine - means - Promise.resolve(undefined)
}).then(val => console.log(val));// here we get undefined cause not returning anything..

promise3().then((resp) => {
    const newResp = [...resp, {key3: 'value3', key4: 'value4'}];
    console.log(newResp, ' -------- modified resp ---- ');
    return newResp; // this line means Promise.resolve(newResp) --- if we do not return anything it will return undefined here -- that means Promise.resolve(undefined) and we can directly apply .then on returned promise.
})
.then((data) => console.log(data, ' -------- data from 3 chain ----- '));