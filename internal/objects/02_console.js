// stdout
console.log('hello world');
// stderr
console.error('you are wrong');

// 시간출력
console.time('전체시간');
setTimeout(() => {
    console.timeEnd('전체시간');
}, 1000);


const data = [
    {name: 'kim', age: 10},
    {name: 'lee', age: 20},
];
// 테이블을 자동으로 만들어준다.
console.table(data);

const obj = {
    outside: {
        inside: {
            key: 'value'
        }
    }
};

console.dir(obj, {colors: false, depth: 2});
console.dir(obj, {colors: true, depth: 1});
