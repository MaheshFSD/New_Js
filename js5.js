// Lexical Scoping ====== 

var a=10; // a's lexical scope is global, becuse it's definied here
function func1 () {
    let a = 20 // a's lexical scope is func1 local environment, because it's definied here. remember it is defined here.
    console.log('From Func1 ==', a);
    const func2 = () => {
        let a = 30, b=50; // a,b's lexical scope is func2, cause they defined here 
        console.log('From Func2 ==', a);
        const func3 = () => {
            let a =40// here a's lexical scope is func3
            console.log('From Func3 ==', a, b); // b=50 can be accessed here using closures
        }
        func3();
    }
    func2();
}
func1();
// let const variables stay in temporal dead zone before they gets initialized.....