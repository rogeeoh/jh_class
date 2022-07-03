const path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(path.basename('hello.txt'))
console.log(path.extname('hello.txt'))

console.log(path.isAbsolute(__dirname));
console.log(path.isAbsolute('./hello.txt'));

console.log(path.join('/' + '/home'));
