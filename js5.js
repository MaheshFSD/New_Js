// Lexical Scoping ====== first variable values gets checked in local env if they won't get found then they check in lexical scope

var a=10, b=50; // a's lexical scope is global, becuse it's definied here
function func1 () {
    let a = 20; // a's lexical scope is func1 local environment, because it's definied here. remember it is defined here.
    console.log('From Func1 ==', a);
    const func2 = () => {
        let a = 30; // a,b's lexical scope is func2, cause they defined here 
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

// var is function scope and let and Const are block scope

// default parameters
const funcDefaultParameters = (a=100,b=200) => {
    console.log(a+b, ' ====== sum');
};
funcDefaultParameters(50,50); // 100
funcDefaultParameters(500); // 700
funcDefaultParameters(undefined,2000); // 2100

// rest parameter
const sum = (a,b,c,...d) => {
    console.log(a+b+c,d,' ========== example of rest parameter ..... ');
};
sum(1,2,3,4,5,6,7);

// param destructuring ...
const person = {
    fullName: 'abhishek shukla',
    gender: 'male'
};
const funcParamDestructuring = ({fullName, gender}) => {
    console.log(fullName,gender, ' =========== param destructuring example');
};
funcParamDestructuring(person);
