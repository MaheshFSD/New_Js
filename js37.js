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