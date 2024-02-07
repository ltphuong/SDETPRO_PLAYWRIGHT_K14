/**
 * Given String: Hey, tui ten Teo, ban cung ten Teo a?
 * => Output
 * ten: 2
 * Teo: 2
 * ban: 1
 * ...
 */

const givenStr = 'Hey, tui ten Teo, ban cung ten Teo a?'
let indivitualWords = givenStr.replace(/,/gi, "").split(" ")
console.log(indivitualWords);
const returnedGroupWord = groupWordMap(givenStr);
console.log(returnedGroupWord);


function groupWordMap(givenStr){
    let wordMap = new Map();
    for(const word of indivitualWords){
        if(!wordMap.has(word)){
            wordMap.set(word, 1);
        }
        else{
            wordMap.set(word, wordMap.get(word) + 1)
        }
    }
    return wordMap;
}