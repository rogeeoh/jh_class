const fs = require('fs');

// 파일 입출력을 담당.
const data = fs.readFileSync('./hello.txt', 'utf8');
console.log(data);
console.log('프로그램이 종료되었습니다');
