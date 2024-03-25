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
