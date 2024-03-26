// xhr using promises

// ex1
const URL = 'https://jsonplaceholder.typicode.com/posts';

const makeRequest = (method, url) => {
    return new Promise((resolve,reject) => {
        const xhr1 = new XMLHttpRequest();
        xhr1.open(method, url);
        xhr1.onload = () => {
            if(xhr1.status >= 200 && xhr1.sttaus < 300) {
                console.log(xhr1.response, '----- resp -----');
                resolve(JSON.parse(xhr1.response));
            }
            else reject('Problem occured');
        }
        xhr1.send();
    });
}
makeRequest().then((data) => {
    console.log(data, '-------- data from promise -----');
    const id = data[29].id;
    const URL2 = `${URL}/${id}`
    makeRequest('GET', URL2)
    .then(resp => {
        console.log(resp, '------- resp -----');
    })
})


