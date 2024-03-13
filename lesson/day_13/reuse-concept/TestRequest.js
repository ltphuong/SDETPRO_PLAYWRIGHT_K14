const GetRequest = require('./GetRequest')
const PostRequest = require('./PostRequest')
const url = 'https://my-api.com/api'

// GET
const getRequest = new GetRequest(url);
getRequest.setMethod();
getRequest.send();
getRequest.verifyReponseStatus();

// POST
const postRequest = new PostRequest(url);
postRequest.setMethod();
postRequest.send();
postRequest.verifyReponseStatus();

postRequest.sayHello()