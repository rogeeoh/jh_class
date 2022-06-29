function sum(a, b, option) {
  if (typeof option === "undefined") {
    return a + b;
  }

  return a + b;
}

const s = sum(10, 20);
console.log(s);

// const sum2 = (a, b) => {
//   return a + b;
// };
// return 한 줄만 존재할 경우 아래와 같이 줄일 수 있다.
const sum2 = (a, b) => a + b;

const s2 = sum2(20, 50);
console.log(s2)

sum(10);


// 값이 입력되지 않을 경우 default값을 주도록 설정할 수 있다.
function printMultiply(value, multiply = 1) {
  console.log(value * multiply);
}

printMultiply(2, 2); // 4
printMultiply(2); // 2
