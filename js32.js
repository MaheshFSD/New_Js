//click event
// keypress
// mouseover
const colorBtn = document.querySelector('.bodyColor button');
colorBtn.addEventListener('click', e => {
    console.log(e, ' --------- event -------- ');
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    console.log(randomColor, ' ------------ random clor ----- ');
    document.body.style.backgroundColor = randomColor;
})
document.body.addEventListener('keypress', e => {
    console.log(e, ' --------- keypress event ------ ');
    console.log(e.key, ' --------- keypress event ------ ');
})
colorBtn.addEventListener('mouseover', e => {
    console.log(e, '----- event ------ ');
})