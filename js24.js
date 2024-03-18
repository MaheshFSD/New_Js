// closures
// function reurns a function
// ex 1
function fullName (fNAme,lNAme) {
    function printname() {
        console.log(fNAme, lNAme, ' ---------- f and l name ------- ');
    }
    return printname;
}
const result = fullName('Mahesh', 'G S');
result();

// ex2 
function calc (a,b) {
    let c = 1000;
    function total () {
        console.log(a+b+c, ' -------- total');
    }
    return total;
}
const ans = calc(10,100);
ans();

