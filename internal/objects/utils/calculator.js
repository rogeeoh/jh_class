const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 1개만 export 할 때
// module.exports = sum;

// 여러개 export 할 때
// exports.multiply = multiply;
// exports.sum = sum;

// 이거랑 동일한 문법
module.exports = {
    sum, multiply
}
