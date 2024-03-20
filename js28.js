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