// Best way to add JS file to HTML page.

// 1. adding at head using script tags  
// like in img1.png 
// Problems of adding JS here
// 1. browser starts parsing html, 2. when it reaches the JS line it stops parsing the HTML and starts loading it. 3. After loading browser executes JS.
// 4. After that browser starts parsing the html,  5. The problem is if we have some code related to HTML elements in js, then we get some errors cause browser didn't completed parsing the html.


// 2. Adding JS at the bottom of the BODY tag.
// 1. in this way browser first parses the html as it encounter JS at the end of the body tag. 2. then browser starts loading it and then executes it.
// here as it do things one after the other, more time gets consumed.


// 3. adding JS in Head tag with keyword async
// <script async src="js26.js"> </script>
// ex in img2.png
// how it works is 1. browser starts parsing the html, 2. when it reaches the script tag it starts loading the js and also do the parsing parallelly. 
// 3. After browser loading the JS, it stops the parsing of html and starts executing the JS. 
// 4. here if there is any code that involves any html elements that are not parsed yet before the execution , we might get errors here.

// 4. adding js in head tag and with the keyword defer help
// How it process 1. Browser starts parsing the html and when it reaches js it starts loading it along with the html parsing. both parallelly. 2. Once Js loading completes
// it won't start executing the JS, but continues with the parsing of html. 3. after browser completes parsing the html, then it starts executing the JS.