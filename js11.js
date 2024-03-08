// maps - property size, methods - set, get, clear, has
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
console.log(map1.get(key4), map1.get(key2), ' =========== key4 value ======');
console.log(map1.clear(), ' =========== clearning the map1 ======');
console.log(map1.has(key4), map1.has(key1), map1.has('key1'), ' ============ has method on maps =====');
console.log(map1, ' =========== after clearning the map1 ======'); //  Map(0) {size: 0}
const map2 = new Map([['hello','welcome']]);
map2.set(1, 100);
console.log(map2.has('hello'), map2.has(1), ' ============ has method on maps =====');
const keymap = 'some';
map2.set(keymap, 5000);
console.log(map2.has(keymap), map2.has('some'), ' ============ has method on maps =====');
let obj ={
    name: 'abhishek',
    age: 26
}
// obj.forEach(key=> console.log(obj[key])); // in object we can not use foreach and for Of

// for of in maps
for(let key of map2) {
    console.log(key, ' ---------- using for of to iiterate through maps');
    console.log(Array.isArray(key), ' ---------- checking the key type in maps maps');
    const [keyIn,value] = key;
    console.log(keyIn, value, ' ============ printing keyin and value');
}
for (const [key, value] of map2) console.log(key, value, ' =========== directly destructuring the key and value of maps')
const objNeededExtraData = {
    fName: 'abhishek',
    age: 28
};
const objNeededExtraData2 = {
    fName: 'abhi',
    age: 30
};
const objMap = new Map();
objMap.set(objNeededExtraData, {'gender': 'male', 'salary': 100000}); // here we are creating new data for object in map
console.log(objMap, ' ======= printing new map ------- '); 
console.log(objMap.get(objNeededExtraData), ' ============== value of the object key in map ------ '); //{gender: 'male', salary: 100000}
console.log(objMap.get(objNeededExtraData).salary, objMap.get(objNeededExtraData).gender, ' ============== value of the object key in map individual accessing through dot notation ------ '); //100000 'male' 
objMap.set(objNeededExtraData2, {'gender': 'male', 'salary': 500000}); // here we are creating second new data for object in map
console.log(objMap.get(objNeededExtraData2).salary, objMap.get(objNeededExtraData2).gender, ' ============== value of the object key in map individual accessing through dot notation ------ '); //500000 'male'
// we can do this to s many objects as we want and access them.
