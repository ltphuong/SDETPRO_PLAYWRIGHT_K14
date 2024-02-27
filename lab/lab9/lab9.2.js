// Import
const { sendRequest } = require('./RequestHelper')

// Constants defination
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const SLUG = '/posts';

let url = `${BASE_URL}${SLUG}`

/**
 * 1. userID, postID -> post's content
*/
const userId = 1;
const postId = 2;
printTargetPost(userId, postId)

/**
 * 2. Print all posts
 */
printAllPosts(userId)


async function printTargetPost(userId, postId){
    const filteredPosts = await _getAllPost(userId);
    const targetPost = filteredPosts.filter(function(post){
        return post.id === postId;
    })[0];

    if(targetPost){
        console.log(targetPost);
    }
    else{
        console.log(`The postId: ${postId} is not existing for the user ${userId}`);
    }
}

async function printAllPosts(userId){
    const allPost = await _getAllPost(userId)
    console.log(allPost);
}

async function _getAllPost(userId){
    const posts = await sendRequest(url);
    return posts.filter(function(post){
        return post.userId === userId;
    }); 
}