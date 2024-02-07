/**
 * Given String: Hey, tui ten Teo, ban cung ten Teo a?
 * => Output
 * ten: 2
 * Teo: 2
 * ban: 1
 * ...
 */

const readline = require('readline-sync')
const givenStr = getUserInput();

// const givenStr = 'Hey, tui ten Teo, ban cung ten Teo a?'
let indivitualWords = givenStr.replace(/,/gi, "").split(" ")
const returnedGroupWord = groupWordMap();
console.log(returnedGroupWord);

function groupWordMap(){
    let wordMap = {};
    for(const word of indivitualWords){
        if(wordMap.hasOwnProperty(word)){
            wordMap[word] = wordMap[word] + 1
        }
        else{
            wordMap[word] = 1
        }
    }
    return wordMap;
}


function getUserInput(){
    return readline.question('Input your string: ')
}