// Event bubbling or propagation
// Event capturing and not capturing
// Event Delegation

const grandParent = document.querySelector('.grandParent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');
console.log(grandParent,parent,child, ' --------- ');
// grandParent.addEventListener('click', () => {
//     console.log("grand Parent called -----");
// })
// parent.addEventListener('click', () => {
//     console.log('Parent Called ----- ');
// })

// Capturing Event
child.addEventListener('click', () => {
    console.log('child capture called ---- ');
}, true);
parent.addEventListener('click', () => {
    console.log('Parent capture Called ----- '); 
;}, true);
grandParent.addEventListener('click', () => {
    console.log("grand Parent capture called -----");
}, true);
document.body.addEventListener('click', () => {
    console.log('body capture called ----- ');
}, true);

// NOt capturing
// Event Bubbling.... / Event propagation
child.addEventListener('click', () => {
    console.log('child called ---- ');
})
parent.addEventListener('click', () => {
    console.log('Parent Called ----- ');
})
grandParent.addEventListener('click', () => {
    console.log("grand Parent called -----");
})
document.body.addEventListener('click', () => {
    console.log('body clicked ----- ');
})
// above is the example of Event Bubbling
// if you add a click event on child and it's parents, if you click on child then the parents also gets called ---
// this is called event bubbling/propagation .....
