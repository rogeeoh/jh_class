// 문자열도 가능
// const letters = ['a', 'b', 'c'];
// console.log(letters);
//
// // 숫자도 가능
// const numbers = [4, 1, 3, 2];
// console.log(numbers);
//
// // 섞어서도 가능
// // const combined = ['a', 1, 'b', 2, {name: 'rogee'}];
// // console.log(combined);
//
// // 뒤에 추가하기
// numbers.push(5);
// numbers.push(6);
// numbers.push(7);
// console.log(numbers);
//
// // 뒤에 빼기
// const popped = numbers.pop();
// console.log(popped);
// console.log(numbers);
//
// // 앞에 추가
// numbers.unshift(0);
// console.log(numbers);
//
// // 앞에 제거
// numbers.shift();
// console.log(numbers);
//
// // 정렬
// numbers.sort();
// console.log(numbers);
//
// // 역방향 정렬
// numbers.reverse();
// console.log(numbers);

// 배열 합치기
const odd = [1, 3, 5, 7];
const even = [2, 4, 6, 8];

// old한 문법
// console.log(odd.concat(even));
// 최신문법 spread syntax
console.log([...odd, ...even]);
