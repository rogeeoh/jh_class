// var let const js 변순선언 3형제
// 1. var (안써) -> 문제가 너무 많아 (hoisting)
// 2. let -> 재할당이 가능
// 3. const -> 못바꿔
const a = 10;
const b = 10;

// if (a > b) {
//   console.log('a is bigger than b');
// } else if (a < b) {
//   console.log('b is bigger than a');
// } else {
//   console.log('same');
// }

// 삼항연산자
a > b
  ? console.log('a is bigger than b')
  : a < b ? console.log('b is bigger than a') : console.log('same');

// 변수 할당을 한번에 할 수 있다.
// const big = a > b ? a : b;
// console.log(big)


// 빈 string은 false
if ('') {
    console.log(true);
} else {
    console.log(false);
}

let age;
if (age) {
    console.log('not undefined');
} else {
    console.log('undefined')
}

// true
const sum = () => a + b;
if (sum) {
    console.log('sum is defined');
}
else {
    console.log('sum is not defined');
}
