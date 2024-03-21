// event listeners ----- 
const btnClick = document.querySelector('.btnEvent');
console.log(btnClick, ' ------------- btn event click ----- ');
console.dir(btnClick, ' ------------- btn event click ----- ');
btnClick.onclick = function () {
    console.log('Btn clicked by mouse !!!!! ');
}
console.dir(btnClick, ' ------------- btn event click ----- ');
const btnClick2 = document.querySelector('.btnEvent2');
// addEventListner ----
// btnClick2.addEventListener('click', () => console.log('button clicked through event listener @!!!!!! '));
// remmeber this usage here
btnClick2.addEventListener('click', function () {
    console.log('function got clicked and checking for this here ----- ');
    console.log(this, ' ---------- This value ----- ');
});
btnClick2.addEventListener('click', () => {
    console.log(this, ' -------- this value in arrow function ------ ');
    console.log(' ------ i got clicked in arrow func ----- ');
});
// this in case of arrow is one level above or where the function is created
// in case3 of normal functions this is what it's called 
const buttons = document.querySelectorAll('.eventBtns button');
console.log(buttons, ' ----- all buttons ---- ');
buttons.forEach(btn => {
    console.log(btn, this, ' ------- btn and this ------ ');
    btn.addEventListener('click', function () {
        console.log('btn got clicked from loop');
        console.log('btn got clicked from loop');
        console.log(btn.textContent, this, ' ----- textContent ----- ');
        console.log(this.textContent, this, ' ----- textContent ----- '); // undefined incase of arrow. otherwise fine -----
    })
})