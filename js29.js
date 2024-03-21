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

// insertAdjacentHTML(where, html)
// beforeBegin
// AfterBegin
// beforeEnd
// afterEnd
fullList.insertAdjacentHTML("beforebegin", '<li>New li added ------ </li>');
fullList.insertAdjacentHTML("afterBegin", '<li>New li added ------ </li>');
fullList.insertAdjacentHTML("beforeEnd", '<li>New li added ------ </li>');
fullList.insertAdjacentHTML("afterEnd", '<li>New li added ------ </li>');