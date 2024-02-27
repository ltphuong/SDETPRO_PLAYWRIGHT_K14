/**
 * 1. Send request -> response
 * 2. Process response
 * 3. Validate response
 */

// Asyncronous
function sendRequest(url, callback){
    console.log('1. Send request to ', url);
    return setTimeout(function(){
        callback({status: 200});
    }, 1000)
}

// Asyncronous
function processResponse(response, callback){
    console.log('2. Processing response: ', response);
    return setTimeout(function(){
        callback(response.status)
    }, 1000)
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

const targetUrl = 'https://sdetpro.com'
sendRequest(targetUrl, function(response){
    processResponse(response, function(statusCode){
        validateResponse(statusCode)
    })
})

/**
 * Input username
 * Input password
 * Click login button -> wait
 * Another step
 */