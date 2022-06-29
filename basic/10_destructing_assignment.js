// list인 경우
const arr = ['oh', 'rogee', 33];
const [lastName, firstName, age, notExist] = arr;

// oh, rogee, 33
console.log(lastName, firstName, age);
// 해당하는 index가 없다면 undefined
console.log(notExist);

// object인 경우
const obj = {type: 'macbook', price: 300, manufacturer: 'Apple'};
const {type, price, manufacturer, noExist } = obj;

// macbook, 300, Apple
console.log(type, price, manufacturer);
// undefined
console.log(noExist);


const {type: deviceType, ...rest} = obj;
// macbook
console.log(deviceType);

// { price: 300, manufacturer: 'Apple' }
console.log(rest);
