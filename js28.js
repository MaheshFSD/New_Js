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
