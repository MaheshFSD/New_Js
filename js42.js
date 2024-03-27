// Fetch 
const URL = 'https://jsonplaceholder.typicode.com/posts';
fetch(URL)
.then((resp) => {
    return resp.json();
})
.then(data => console.log(data, ' -------- final data ------- '));