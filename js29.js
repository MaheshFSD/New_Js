// CreateElement
// append or appendChild
// prepend
// remove
//before 
// after

const newEle = document.createElement('li');
newEle.textContent = ' A new li in list';
const fullList = document.querySelector('#ulId');
console.log(fullList);
fullList.appendChild(newEle);
fullList.appendChild(newEle);
fullList.prepend(newEle);
const removeEle = document.querySelector('.aClass');
console.log(removeEle, ' ------- ele ----');
// removeEle.remove()
// one more way 
const rmele = document.querySelector('.liClass')
rmele.remove('a')
const addBefore = document.querySelector('#ulId')
addBefore.before(newEle);
addBefore.after(newEle);


