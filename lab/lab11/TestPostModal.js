const RequestHandler = require('./RequestHandler')

async function lab11(){

    // Constants defination
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    const SLUG = '/posts';

    let url = `${BASE_URL}${SLUG}`

    // Given params
    const userId = 1;
    const postId = 5;

    // Create RequestHandle object
    const requestHandler = new RequestHandler();

    // get and print target post
    const targetPost = await requestHandler.getTargetPost(url, userId, postId)
    await requestHandler.printTargetPost(targetPost)

    // get and print all user post
    const allPost = await requestHandler.printAllPosts(url, userId)
    console.log('All post: ', allPost);
}

lab11()