// primitive type (원시타입) - 6개 string, number, boolean, undefined, bigint, symbol
// 참조타입 - 1개 (object)

// call by value (새로 할당) - 원시타입
// call by reference (포인터 따오기) - 참조타입


let a = 10;
let b = a;
b = 20;

console.log(a, b);

const obj1 = {name: 'rogee'};
// 주소값만 넘어온다
const obj2 = obj1;
obj2.name = 'junghwan';

console.log(obj1, obj2);