// Event Deligation ----
const grandParent = document.querySelector('.grandParent');
// grandParent.addEventListener('click', () => {
//     console.log('grand Parent clicked !!!!!');
// });


// Even though i click on child grand parents events get listened and callback gets called ...... 
// Event deligation means if you want to add an event listner on child, parent and grandParent, no need to add the event listeners on all three. you can add one on parent.
// example using event object 
// grandParent.addEventListener('click', (e) => {
//     console.log(e, '----- event ----- ');
//     console.log(e.target, '----- event ----- ');
// });

//ex2
grandParent.addEventListener('click', (e) => {
    console.log(e, '----- event ----- ');
    console.log(e.target.textContent, '----- event ----- '); // if you click on parent it will give parent and child ... as it is text content
});
// you can keep event listener on parent and get the target and then do functionality as needed, ex. reaching element using parentNode or previousElemntSibling or both or chaining them and then do operations on the elements or texts or anything
