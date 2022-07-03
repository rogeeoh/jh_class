const axios = require('axios');

// (중요) async 가 붙은 함수는 Promise를 리턴한다.
async function main() {
    // axios 요청만 추가
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const commentsURL = `https://jsonplaceholder.typicode.com/posts/${response.data[0].id}/comments`;
        const commentResponse = axios.get(commentsURL);
        console.log(commentResponse.data);
    } catch (err) {
        console.error(err);
    }
    console.log('실행이 종료되었습니다.')
}

main();

