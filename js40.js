// XHR - xmlHTTPRequest
// Fetch
// Axios

//ex1
const xhr = new XMLHttpRequest();
const URL = 'https://jsonplaceholder.typicode.com/posts';
console.log(xhr, ' -----xhr -----');
console.log(xhr.readyState, ' ----readyState -----');
xhr.open('GET', URL);
console.log(xhr.open('GET', URL), ' --------- xhr.open("GET", URL); ------');
console.log(xhr.readyState);
// readyState values
// 0 - Unsent - before open - client has been created, open not called yet
// 1 - opened - After open
// 2 - Headers received - Send has been called, headers and status are available
// 3 - loading - Downloading!, responseText holds partial data
// 4 - Done - Request is complete/ operation is completed
xhr.onreadystatechange= () => {
    console.log(xhr.readyState, ' ----------readyState value ---- ');
}
xhr.send();

//ex2
const xhr1 = new XMLHttpRequest()
console.log(xhr1, ' ----- xhr1 ----');
xhr1.open('get', URL);
xhr1.onreadystatechange = function () {
    console.log(xhr1.readyState, ' ------xhr1.readystate ------- ');
    if(xhr1.status >= 200 && xhr1.status < 300)  // status can have values of 1** / 2** / 3** / 4** / 5**
    console.log(xhr1.response, ' -------- xhr1.ressponse -----');
};
xhr1.send();

// ex3
const xhr2 = new XMLHttpRequest();
console.log(xhr2, ' ---------- xhr2 ----- ');
xhr2.open('GET', URL);
xhr2.onreadystatechange = () => {
    console.log(xhr2.readyState, xhr2.status, ' --------- readyState and sttaus on xhr2 ---');
    // if(xhr2.readyState === 4)
    if(xhr2.status >= 200 && xhr2.sttaus < 300)
    console.log(JSON.parse(xhr2.response, ' --------- parsed response ------'));
    else console.log('Something went wrong ....');
}

// Error handling
xhr2.onerror = () => {
    console.log( 'When error occured ------');
};
xhr2.send();

// ex4 
const xhr3 = new XMLHttpRequest();
console.log(xhr3, ' --------- xhr3 -------- ');
xhr3.open('get', URL);
// instead of running onstatechange method everytime the state change, we can call onload method - which runs only when readystatus is 4.
// onload runs when the readyStatus is 4.
xhr3.onload = () => {
    if(xhr3.status >= 200 && xhr3.sttaus < 300)
    console.log(xhr3.response, ' =---------- xhr3 response -----');
    else console.log(new Error(' ------- SOME ERROR --------'));
}
xhr3.onerror = () => {
    console.log('Something went wrong ....');
}
xhr3.send();