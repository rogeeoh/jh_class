function example1() {
    setTimeout(() => {
        console.log('1초 시간이 지났습니다.');
    }, 1000)
    console.log('프로그램을 종료합니다.');
}

function example2() {
    setInterval(() => {
        console.log(`1초마다 한 번씩 출력됩니다`);
    }, 1000);
}

function example3() {
    const interval = setInterval(() => {
        console.log(`1초마다 한 번씩 출력됩니다`);
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('5초가 지나 종료합니다.');
    }, 5000);
}

function example4() {
    console.log(1);
    console.log(2);
    setTimeout(() => {
        console.log(3);
    }, 0);
    console.log(4);
    console.log(5);
    console.log('프로그램을 종료합니다.');
}


// example1();
// example2();
// example3();
example4();
