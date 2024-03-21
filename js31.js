// call stack event loop webapi and callback Queue
console.log('script starts....');
const allBtns = document.querySelectorAll('.eventBtns');
allBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        let num =0;
        for(let i=0; i<1000000000;i++) {
            num+=i;
        }
        console.log(num, e, ' --- values ----');
    })
});

let variable= 0;
for(let i=0;i<100000000;i++) {
    variable+=i;
}
console.log(variable, ' -------- variable ---- ');
console.log('script ends ....');

// just trying to change the background and text colors ...
allBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(e, ' ------ event ------ ');
        e.target.style.backgroundColor = 'teal';
        e.target.style.color = 'red';
    })
})