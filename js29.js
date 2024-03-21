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
fullList.append(newEle)
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

// cloneNode()
// cloneNode(true)
const newLi = document.createElement('li');
newLi.textContent = 'I am new Li added';
fullList.prepend(newLi);
fullList.append(newLi);
// when i do both append and prepend sequentially it will do the last instruction only, not the all instructions as given.
// to avoid this we clone element 
const newLi2 = newLi.cloneNode(); // this will just clone the elemnt not the child nodes. to do so we do deep clone
newLi2.style.backgroundColor = 'teal';
fullList.append(newLi2);
// Deep cloning
const newLi3 = newLi.cloneNode(true);
fullList.append(newLi2);
fullList.prepend(newLi3);

//IE doesn't have append, prepend, remove, after, before. so we use these old ones
// appendChild
// removeChild
// replacechild - you need reference element to do this
// insertBefore -- is similar to before 
const newLi4 = newLi2.cloneNode(true);
const newLi5 = newLi.cloneNode(true);
newLi5.textContent = 'Fire list';
const reference = document.querySelector('.useClass');
fullList.insertBefore(newLi4, reference);
fullList.replaceChild(newLi5, reference);
fullList.removeChild(reference);