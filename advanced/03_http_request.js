const axios = require('axios');

function main() {
    // promise 기반
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            // 요청에 대한 응답데이터 + 메타데이터
            const commentsURL = `https://jsonplaceholder.typicode.com/posts/${response.data[0].id}/comments`;
            return axios.get(commentsURL);
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch(err => {
            console.log(err);
        });

    console.log('실행이 종료되었습니다.')

    let sum = 0;

    // 싱글스레드를 블록하기 때문에, 프로그램이 모두 멈춰버린다.
    // 절대 이렇게 하면 안된다.
    for (let i = 0; i < 100000000000; ++i) {
        sum += i;
    }
}

main();
