// maps
const map1 = new Map([['key1', 'val1'], ['key2', 'val2']])
console.log(map1, ' =============== map  ======');
map1.set(1,'one');
console.log(map1, ' =============== map  ======');
for(let [key, value] of map1) console.log(key, value, ' =========== key of maps ======');
map1.forEach((key,val) => console.log(key, val,map1.get(key), ' =========== iteration from forEach method === '))
const key1 = 'key1';
const key2 = 'key2';
const key3 = '3key';
map1.set(key1, '1value');
map1.set(key2, '2value');
map1.set(key3, '3value');
console.log(map1, ' =========== fter adding few similar keys ====');
const key4 = {};
const key5 = function () {};
map1.set(key4, ' value of obj');
map1.set(key5, ' value of function');
console.log(map1, ' ========== after adding few more keys =======');
console.log(map1.size , '============== size of map');
console.log(map1.delete(key5), 'using delete method on maps ===========');;
console.log(map1, ' ========== after removing few keys ====');
console.log(map1.keys(), ' ============ keys of map1');
console.log(map1.values(), ' ============ values of map1');
console.log(map1.entries(), ' ============ entries of map1');
console.log(map1.get(key4), ' =========== key4 value ======');
