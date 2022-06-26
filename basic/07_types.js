// primitive type (원시타입) - 6개 string, number, boolean, undefined, bigint, symbol
// 참조타입 - 1개 (object)

// number
const num = 10;
// string
const str = 'hello';
// undefined
let age;
// boolean
const flag = true;

console.log(typeof num); // number
console.log(typeof str); // string
console.log(typeof age); // undefined
console.log(typeof flag); // boolean

console.log(typeof num === 'number'); // number
console.log(typeof str === 'string'); // string
console.log(typeof age === "undefined"); // undefined
console.log(typeof flag === 'boolean'); // boolean


// 잘못된 값이 a, b에 들어왔을 때 예외처리를 하는 예제
function sum (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('invalid input');
  }
  return a + b;
}

console.log(sum(1, 2));
try {
  console.log(sum(1, "hello"));
} catch (err){
  // 에러 핸들링
  // 로그도 찍어야되고
  console.error(err);
}
console.log('정상종료되었습니다.');