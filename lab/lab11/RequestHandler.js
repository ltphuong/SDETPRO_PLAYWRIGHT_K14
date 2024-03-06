const { sendRequest } = require('./RequestHelper')
const Post = require('./Post')

class RequestHandler{
    // Contruct the returned data as a Post data modal from class Post
    async getTargetPost(url, userId, postId){
        const filteredPosts = await this._getAllPost(url, userId);
        const targetPost = filteredPosts.filter(function(post){
            return post.id === postId;
        })[0];

        const post = await this._convertResponsetoPostObject(targetPost);
        return post;
    }

    async printTargetPost(targetPost){
        if(targetPost){
            console.log('Target post: ', targetPost);
        }
        else{
            console.log(`The postId: ${postId} is not existing for the user ${userId}`);
        }

        return targetPost;
    }

    // Contruct the returned data as a [Post data modal] from class Post
    async getAllPosts(url, userId){
        const allPost = await this._getAllPost(url, userId)
        let allPostArray = []
        for(let i = 0; i < allPost.length; i++){
            const post = await this._convertResponsetoPostObject(allPost[i]);
            allPostArray.push(post);
        }
        return allPostArray;
    }

    async _getAllPost(url, userId){
        const posts = await sendRequest(url);
        return posts.filter(function(post){
            return post.userId === userId;
        }); 
    }

    async _convertResponsetoPostObject(response){
        const post = new Post();
        Object.keys(response).forEach(key => 
            post[key] = response[key]
        );
        return post;
    }
}

module.exports = RequestHandler;