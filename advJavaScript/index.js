// import {QA_ENV} from './utills/constants.js';
import {QA_ENV,PROD_ENV as prod} from './utills/constants.js';
import {Person} from './utills/person.js';

console.log('Welcome');
console.log(QA_ENV, ' -------- ENV ------- ');
console.log(prod, ' -------- ENV ------- ');

const person = new Person('Mahesh', 'G S', 26, 'Male');
console.log(person , ' ------ just printing person');
person.details();
