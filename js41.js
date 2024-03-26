// xhr using promises

// ex1
const URL = 'https://jsonplaceholder.typicode.com/posts';

const makeRequest = (method, url) => {
    return new Promise((resolve,reject) => {
        const xhr1 = new XMLHttpRequest();
        xhr1.open(method, url);
        xhr1.onload = () => {
            if(xhr1.status >= 200 && xhr1.status < 300) {
                console.log(xhr1.response, '----- resp -----');
                resolve(JSON.parse(xhr1.response));
            }
            else reject('Problem occured');
        }
        xhr1.send();
    });
}
makeRequest('GET', URL).then((data) => {
    console.log(data, '-------- data from promise -----');
    const id = data[29].id;
    const URL2 = `${URL}/${id}`
    makeRequest('GET', URL2)
    .then(resp => {
        console.log(resp, '------- resp -----');
    })
})

const makeRequest1 = (method, url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                console.log(xhr.response, ' --- resp -----');
                resolve(xhr.response);
            }
            else reject('Something went wrng....');
        }
        xhr.send();
    })
}

makeRequest1('GET', URL)
.then(resp => {
    const data = JSON.parse(resp);
    return data
})
.then(resp => {
    const id = resp[89].id;
    const url = `${URL}/${id}`;
    return makeRequest1('GET', url);
})
.then(resp => console.log(resp, ' ------- single data ----- '));

