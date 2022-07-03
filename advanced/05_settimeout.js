function example1() {
    setTimeout(() => {
        console.log('1초가 지났습니다');
    }, 1000);

    console.log('프로그램이 종료되었습니다');
}

function example2() {
    setInterval(() => {
        console.log('1초마다 실행합니다');
    }, 1000);
}

function example3() {
    const interval = setInterval(() => {
        console.log('1초마다 실행합니다');
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
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
}

// example1();
// example2();
// example3();
example4();
