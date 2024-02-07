let myString = 'abcd1234 ';
console.log(myString);

// length
const myStringLength = myString.length;
console.log(myStringLength);

// Get a character at a position
for(let i = 0; i < myStringLength; i++){
    console.log(myString.charAt(i));
    console.log(typeof myString.charAt(i));
} 

// Get rid of/remove spaces at start and the end
console.log(myString.trim().length);

// Replace
let toBeReplacedStr = "tmomi mnmay gmap mnmhamu 7h"
// console.log(toBeReplacedStr.replace(/M/ig,""));

console.log(toBeReplacedStr.replaceAll('m', ""));

// 200mins
let containsNumStr = '200mins';
let num = containsNumStr.replace(/[^0-9]/gi,"");
console.log(num);

// Backstick | String template
let anotherNum = '124234-'
console.log((`typeof num: ${typeof num} - ${anotherNum}`));
console.log(Number(num) + 1);

// Concatenation / concat
console.log("Hello, ".concat('Tui ten Teo!') + ', how are you?');

function checkTypeOf(sth){
    return typeof sth;
}

// Substring
let strToBeCut = 'https://sdetpro.com/'
const startIndex = 8;
const endIndex = 19;
// console.log(strToBeCut.substring(startIndex))
let returnDomain = getDomainName(strToBeCut)
console.log(returnDomain);

function getDomainName(url){
    let domain;
    const indicator = "://"
    const indexOfIndicator = url.indexOf(indicator)
    if((indexOfIndicator < 0)){
        const errMsg = `Invalid url, prodide url was: ${url}`
        throw Error(errMsg)
    }

    const domainStartIndex = indexOfIndicator + indicator.length;
    domain = url.substring(startIndex).replace(/\//gi, "")
    return domain;
}

// Split
// | 10cm | 10cm | 10cm
let googleUrl = "https://google.com"
console.log(googleUrl.split("://"))