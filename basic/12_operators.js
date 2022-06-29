const number = 10;

const isEven = number % 2 === 0;
// true
console.log(isEven);

const msg = isEven ? '짝수입니다' : '홀수입니다';
console.log(msg);

// || 연산자
const dbInfo = {
    host: 'localhost',
    port: 3306,
    dbUser: 'root'
};

const {host, port, dbUser, dbPassword} = dbInfo;
const password = dbPassword || 'toor';

// toor
console.log(password);

// nullish coalescing operator
// || 연산자를 이용할 경우 버그가 발생할 수 있다.
// ?? 연산자는 앞에가 null 혹은 undefined인 경우에만 뒤에 값을 이용해준다.

// 예제1
const flag = false;
// 버그
console.log(flag || '값이 없습니다.');
// 의도한 코드
console.log(flag ?? '값이 없습니다.');



// 예제2
const pw = '';
const passwordBug = pw || 'toor';
console.log("passwordBug: ", passwordBug);

const correctPassword = pw ?? 'toor';
console.log("correctPassword: ", correctPassword);


