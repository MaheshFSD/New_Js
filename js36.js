// call backs - in synchronous
const power = p => index => console.log(index ** p, '------- value');
const cube = power(3);
cube(4);
// above is example of callback and also closure ----- 
// callback hell 
// having nested callbacks one dependant on another, when one doesn't it is callback hell - or pyramid of doom

// callbacks in asynchronous programming are --- setTimeout, setInterval ....
