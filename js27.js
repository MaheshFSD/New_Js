// get and set Attributes
const linkTag = document.querySelector('li .aClass');
console.log(linkTag, ' --------- linkTag ------ ');
console.log(linkTag.getAttribute('class'), ' --------- linkTag ------ ');
console.log(linkTag.getAttribute('href'), ' --------- linkTag ------ ');
console.log(linkTag.setAttribute('href', 'http://www.google.com'), ' --------- linkTag ------ ');
// setAttribute
linkTag.setAttribute('id', 'setIdByProperty')
console.log(linkTag.getAttribute('id'), ' --------- get id att ----- ');

// html collections vs node list
// diff between getelementsbyclassname vs querySelector
// 1. you can use normal for and for of with html collections but not forEach
// 2. you can use for, for of and foreach on nodelist
// ANyway you can always turn them into array and use all available methods on them....

const htmlColls = document.getElementsByClassName('gesbcn1');
console.log(htmlColls, ' ---------- html collections ----- ');
for(let i=0; i<htmlColls.length; i++) {
    const ele = htmlColls[i];
    console.log(ele, ' -------- each ele ---- ');
}
for(let ele of htmlColls) {
    console.log(ele, ' ------- each ele ------- ')
}
// htmlColls.forEach(ele=>console.log(ele, '------ ele of htmlcolls --- x')); // js27.js:26 Uncaught TypeError: htmlColls.forEach is not a function
// you can't use forEach on htmlcollections

// for node lists
const eles = document.querySelectorAll('.gesbcn1');
console.log(eles, ' --------- eles ---- ');
eles.forEach(ele => {
    ele.style.color = 'blue';
    ele.style.backgroundColor = 'yellow';
});

