const axios = require('axios');

// 03 예제를 변환해본다
async function main() {
    try {
        const {data: posts} = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        console.log(posts);
        const find = posts.find(post => post.title === 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
        if (!find) {
            console.log('data not found');
            return;
        }

        const {data: comments} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${find.id}/comments`);
        console.log(comments);
    } catch (e) {
        console.error(e);
    }
}

main();
