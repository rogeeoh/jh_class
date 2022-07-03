// browser window와 거의 동일
console.log(global);

// global은 생략이 가능
global.console.log('hello world');
global.x = 3;

// 이런게 가능하긴 하지만 하지 않도록 한다 (전역변수 사용 금지)
console.log(global.x);
