// import {QA_ENV} from './utills/constants.js';
import {QA_ENV,PROD_ENV as prod} from './utills/constants.js';
import {Person} from './utills/person.js';
import User from './utills/default.js';
import u2 from './utills/default2.js';

console.log('Welcome');
console.log(QA_ENV, ' -------- ENV ------- ');
console.log(prod, ' -------- ENV ------- ');

const person = new Person('Mahesh', 'G S', 26, 'Male');
console.log(person , ' ------ just printing person');
person.details();

const user = new User('Lokesh', 'k k', 26, 'Male');
console.log(user, '----------- user');
user.details();

const secondUser = new u2('ashish', 'shukla', 26, 'MAle');
secondUser.details();