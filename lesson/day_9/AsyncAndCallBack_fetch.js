/**
 * 1. Send request -> response
 * 2. Process response
 * 3. Validate response
 */

// Asyncronous
function sendRequest(url, callback){
    console.log('Send request to ', url);
    fetch(url).then(function (response) {
        callback(response);
    })
}

// Asyncronous
function processResponse(response){
    console.log('2. Processing response: ', response);
    return response.status;
}

// Syncronous
function validateResponse(statusCode){
    console.log('3. Validating ...');
    if(statusCode === 200){
        console.log("Passed!");
    }
    else{
        console.error("Fail, status code: ", statusCode);
    }
}

const targetUrl = 'https://jsonplaceholder.typicode.com/todos/1'
sendRequest(targetUrl, function(response){
    const statusCode = processResponse(response);
    validateResponse(statusCode);
})

