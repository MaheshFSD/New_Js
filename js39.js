// Promise examples 
// Solution to pyramid of Doom or Callback hell

const ele1 = document.querySelector('.heading1');
const ele2 = document.querySelector('.heading2');
const ele3 = document.querySelector('.heading');
const ele4 = document.querySelector('.heading4');
const ele5 = document.querySelector('.heading5');
const ele6 = document.querySelector('.heading6');
const changeColor = (color,ele,text,bg,time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ele) {
                ele.style.color = color;
                ele.textContent = text;
                ele.style.backgroundColor = bg;
                resolve();
            }
            else reject('Something went wrong in.... ', );
        }, time)
    })
}
changeColor('red',ele1, 'text1', '#333', 1000)
.then(() => changeColor('red',ele1, 'text1', '#333', 1000))
.then(() => changeColor('red',ele2, 'text1', '#333', 1000))
.then(() => changeColor('red',ele3, 'text1', '#333', 1000))
.then(() => changeColor('red',ele4, 'text1', '#333', 1000))
.then(() => changeColor('red',ele5, 'text1', '#333', 1000))
.then(() => changeColor('red',ele6, 'text1', '#333', 1000))
.catch((err) => console.log(err));