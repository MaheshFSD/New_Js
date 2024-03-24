// Promises 

//ex1
const userDetails = new Promise((resolve, reject) => {
    // performing some logic and getting response -----
    // const userData = [{id: 1, fName: ' G SM'}];
    const userData = {id: 1, fName: ' G SM'};
    if(Array.isArray(userData)) resolve(userData);
    else reject(new Error('Something went wrong .....'));
    // else reject(new Error(JSON.stringify(userData), 'Something went wrong, error No 111'));
    // else reject(new Error(JSON.stringify(userData)));
    // else reject(new Error(JSON.stringify(userData), 'Something went wrong, error No 111'));
});

// consuming the promise
userDetails.then((data) => {
    console.log(data, ' ----------- received');
}).catch((error) => console.log(error, ' --- error occured --')); 

// Promises when they concluded they will get added to Micro task queue
// Micro task Queue vs Call Back Queue
// Micro task queue will have priority so promise gets executed first and then the call back.

// ex2 - function returning a promise
const newPromise = () => {
    return new Promise((resolve, reject) => {
        const data = {
            key1: 'value1'
        }
        const error = {
            str: 'something went wrong',
            code: 132
        }
        if(typeof data === 'object') 
        resolve(data);
        else 
        reject(error);
    })
}

newPromise().then((resp) => {
    console.log(resp, ' ------- response ------ ');
}).catch((error) => {
    console.log(error.code, ' - ', error.str, ' -------- Error response ------- ');
})

// if you call 2 promises one after the other, the success resolved promise gets high priority and gets executed first and the error one later. if both success then order is same, in case of both error also order same. but one is success and one is failure then the success one has high [riority
