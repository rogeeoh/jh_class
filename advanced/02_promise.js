function sum (a, b) {
  return new Promise((resolve, reject) => {
    // 오래걸리는 작업 (네트워크, DB, 파일입출력)
    resolve(a + b);
  })
}

sum(1, 2).then(data => {
  console.log('두개의 더한 값은: ', data);
});

sum(3, 4).then(data => {
  console.log('두개의 더한 값은: ', data);
});

console.log('계산이 종료되었습니다.');
