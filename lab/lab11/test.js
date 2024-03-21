const Post = require('./Post')
const RequestHandler = require('./RequestHandler')

// Execution
lab11();

async function lab11() {
    const responsePost = {
        name: "ti",
        id: 2,
        userId: 3,
        body: 'abc',
        title: 'bcd'
    };

    const post = new Post();
    Object.keys(responsePost).forEach(key => {
        if (post.hasOwnProperty(`_${key}`)) {
            console.log('test1');
            post[key] = responsePost[key]
        }
    });

    console.log(post);
}

