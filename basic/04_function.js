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