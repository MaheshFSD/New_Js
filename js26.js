// DOM- 
console.log(window.document, ' -------- just printing the dom from browser ------ ');
// above stmt gives element view like human understandable 
console.dir(window.document, ' -------- seeing the document object as it is in js ------ ');
console.log(document, ' ------ no need of window --- ');
console.dir(document)
//getElementById
console.log(document.getElementById('gebt1'), ' --------- element ------ '); // i get null if i dclare script ain the head.
console.log(document.getElementById('gebt1'), ' --------- element ------ '); // if i add script at the bottom of the body, then no issue.
// innerText
console.log(document.getElementById('gebt1').innerText = 'Welcome!!!!!!!', ' --------- element ------ '); // if i add script at the bottom of the body, then no issue.
// innerHTML
console.log(document.getElementById('gebt1').innerHTML = '<h6>Hello hello </h6>', ' --------- element ------ '); // if i add script at the bottom of the body, then no issue.
// getEementsByClassname
console.log(document.getElementsByClassName('gesbcn1'), ' --------- class name elements -------- ');
// getElementsByName
console.log(document.getElementsByName('nameButton')[1].innerText = 'Changed Value of BTN By DOM', ' --------- input elements'); // doesn't work for innertext 
console.log(document.getElementsByName('nameButton')[1].innerHTML = 'Changed Value of BTN By DOM', ' --------- input elements'); // doesn't work for innerhtml 
console.log(document.getElementsByName('nameButton')[1].value = 'Changed Value of BTN By DOM', ' --------- input elements'); // doesn't work for innerhtml 
// getElementsByTagname
console.log(document.getElementsByTagName('input'), ' ---------- All elemnts with same tag ------- '); 
console.log(document.getElementsByTagName('input')[1].value = 'Hello Hello', ' ---------- All elemnts with same tag and changed one elemets value  ------- '); 

// querySelector
console.log(document.querySelector('.gesbcn1'), ' ------ getting the element with the class Name ---- '); // but it gives only the first occurance of the element
console.dir(document.querySelector('.gesbcn1'), ' ------ getting the element with the class Name ---- '); // but it gives only the first occurance of the element
// the above two lines are same now but not before. before it usually the human readable like html tag

// to get all the elemnts with the same classname or ny other property use
// querySelectorAll
console.log(document.querySelectorAll('.gesbcn1'), ' ---------- gesbcn1 class elemnts list ------ ');
console.log(document.querySelector('#gebt1'), ' ---------- id elemnt ---- ');
console.dir(document.querySelector('#gebt1'), ' ---------- id elemnt ---- ');
