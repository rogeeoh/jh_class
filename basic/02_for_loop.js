const list = [10, 20, 30];

// const length = list.length; // 3
// console.log(length)

// 첫번째 방법
// for (let i = 0; i < list.length; i++) {
//   console.log(list[i]);
// }

// 두번째 방법
// index 관심없다
// for (const num of list) {
//   console.log(num);
// }

// 세번째 방법
// list.forEach((i) => {
//   console.log(i);
// });

// 네번째 방법
// map은 return한 값을 이용해 새로운 리스트를 반환한다.
const doubledList = list.map((num, index) => {
  console.log(index);
  return num * 2;
});

console.log(doubledList)