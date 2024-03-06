function asyncFunction01(param1){
    console.log('Processing: ', param1);
    console.log(typeof new Promise((resolve, reject) => {}));

    return new Promise(function(response, reject){
        setTimeout(function(){
            const returnedValue = 'asyncFunction01: ' + param1;
            response(returnedValue);
        }, 1000);
    })
}

function asyncFunction02(param2){
    console.log('Processing: ', param2);
    return new Promise(function(response, reject){
        setTimeout(function(){
            const returnedValue = 'asyncFunction02: ' + param2;
            response(returnedValue);
        }, 1000);
    })
}

function asyncFunction03(param3){
    console.log('Processing: ', param3);
    return new Promise(function(response, reject){
        setTimeout(function(){
            const returnedValue = 'asyncFunction03: ' + param3;
            response(returnedValue);
        }, 1000);
    })
}

// Usage async/await
/**
 * aysnc: asynchronous function indication
 * await: to wait result from and async function
 */

/**
 * Asynchronous -> Vi du di uong cafe
 * Asynchronous -> callback -> callback hell problem
 * Asynchronous -> Promish -> thenable
 * Asynchronous -> Promise -> async/await
 */

async function run(){
    const returnedValue1 = await asyncFunction01('param1');
    const returnedValue2 = await asyncFunction02(returnedValue1);
    const finalValue = await asyncFunction03(returnedValue2);
    console.log(finalValue);
}

run();