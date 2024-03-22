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