const axios = require('axios');

function main() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(({data}) => {
        const find = data.find(d => d.title === 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
        if (!find) {
            console.log('data not found');
            return;
        }

        return axios.get(`https://jsonplaceholder.typicode.com/posts/${find.id}/comments`);
    }).then(({data}) => {
        console.log(data)
    }).catch(err => {
        console.error(err);
    });
}

main();
