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
