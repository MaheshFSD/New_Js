// DOM traversing 
console.log(document.getRootNode(), ' ------ getRootNode ----- ');
const rootEle = document.getRootNode();
console.log(rootEle.childNodes[1], ' ------ childnodes ----- ');
const htmlEle = rootEle.childNodes[1];
console.log(htmlEle.childNodes, ' ----------- childnodes of html ----- ');
const headNode = htmlEle.childNodes[0];
const textNode = htmlEle.childNodes[1];
const bodyNode = htmlEle.childNodes[2];
console.log(headNode,textNode,bodyNode, ' -------- printing 3 nodes ---- ');
// how to know parent of a node
console.log(bodyNode.parentElement, ' --------- parentElement --- ');
console.log(bodyNode.parentNode, ' --------- parentNode --- ');

// sibling relation
console.log(headNode.nextSibling, ' ---------- next sibling ------ ');
console.log(headNode.nextSibling.textContent, ' ---------- next sibling ------ ');
console.log(headNode.nextSibling.data, ' ---------- next sibling ------ ');
console.log(headNode.nextSibling.nextSibling, ' ---------- next sibling ------ ');
// getRootNode() 
// parentNode
// parentElement
// childNodes
// nextSibling
// nextElementSibling
console.log(headNode.nextElementSibling, ' --------- nextElementSibling ----- ');
const aElement = document.querySelector('.aClass');
console.log(aElement, ' ------- a element ------ ');
const bodyParent = aElement.parentNode.parentNode.parentNode; 
console.log(bodyParent, ' ----------- bodyParent ----- ');
bodyParent.style = "color: #efefef, background-color: red";
// we can directly select body
console.log(document.body, ' ------- body selected ----- ');
console.log(document.head, ' ------- head selected ----- ');

// We can even use querySelector on an element and it searches in the child 
const headEle = document.querySelector('head');
console.log(headEle.querySelector('title'), ' ---------- title');
const titleStr = headEle.querySelector('title');
titleStr.textContent = 'I am new title'
console.log(document.head.querySelector('title').innerText, ' ----------- titleeeee ------- ');
console.log(titleStr.childNodes, ' ------ title child nodes ----- ');
// to avoid newlines or name sapces on in childnodes 
const childrenEles = document.querySelector('#ulId');
console.log(childrenEles, ' ---------- child elements ------ ');
console.log(childrenEles.childNodes, ' ---------- child elements ------ ');
console.log(childrenEles.children, ' ------- only childrens ------ ');

// classList
const h3Ele = document.querySelector('.gesbcn1 ');
console.log(h3Ele, ' -------h3 ele ------- ');
console.log(h3Ele.classList, ' ------ all the classes ------ '); // DOMTokenList(3) ['gesbcn1', 'class2', 'class3', value: 'gesbcn1 class2 class3']
h3Ele.classList.add('class4');
console.log(h3Ele.classList, ' ---------- all classes --- ');
h3Ele.classList.remove('class2')
console.log(h3Ele.classList, ' ---------- all classes --- ');
console.log(h3Ele.classList.contains('class2'));
console.log(h3Ele.classList.contains('class3'));
h3Ele.classList.toggle('class5');
console.log(h3Ele.classList, ' -------- class list ---');
h3Ele.classList.toggle('class5');
console.log(h3Ele.classList, ' -------- class list ---');

