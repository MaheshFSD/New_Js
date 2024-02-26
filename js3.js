// For In Loop
let colours = ['red', 'blue', 'orange','green', 'yellow', 'white'];
for(let idx in colours) console.log(colours[idx], ' -', idx); /// one way 
for( let colour of colours) console.log(colour.toUpperCase(), ' ========= changing each element to upper case')