// 그 이후...
setTimeout(() => {
    console.log('바로 실행1');
}, 0);

// 2순위
setImmediate(() => {
    console.log('바로 실행2')
});

// 1순위
process.nextTick(() => {
    console.log('젤빠름');
});
