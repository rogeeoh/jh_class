const number = 10;

// true or false
const isEven = number % 2 === 0;

const msg = isEven ? '짝수입니다' : '홀수입니다';
console.log(msg);


// || 연산자
const dbInfo = {
    host: 'localhost',
    port: 3306,
    dbUser: 'root'
};

const {host, port, dbUser, dbPassword} = dbInfo;
console.log(host, port, dbUser, dbPassword);

// false, '', undefined, null
const password = dbPassword || 'toor';
console.log(password);


// ?? nullish coalescing operator
const flag = false;
console.log(flag || '값이 없습니다');
console.log(flag ?? '값이 없습니다.');


const pw = '';
const passwordBug = pw || 'toor';

console.log(passwordBug);

const correctPassword = pw ?? 'toor';
console.log('DEBUG - ', 'correctPassword: ', correctPassword);
