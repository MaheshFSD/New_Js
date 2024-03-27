// Fetch 
const URL = 'https://jsonplaceholder.typicode.com/posts';
fetch(URL)
.then((resp) => {
    console.log(resp, ' -------- resp ------- ');
    return resp.json();
})
.then(data => console.log(data, ' -------- final data ------- '))
.catch(err => console.log(err, ' -----err ------'));
// GET is default in fetch.
// but in case of failure
// above fetch returns a promise it only rejects when network related error occurs. it won't reject otherwise....

fetch(URL)
.then(resp => {
    console.log(resp, ' ----- from 2 ----');
    // check for ok value, incase failed ok is false otherwise ok is true.
    if(resp.ok) {
        // console.log(resp.json());
        return resp.json();
    }
    else throw new Error('Something went wrong .... ');
})
.then(data => {
    console.log(data, ' --------- data from 2 ----');
})
.catch(err => console.log(err, ' ------- err from 2 ----- ') );
// check multiple times with the right and wrong url...
