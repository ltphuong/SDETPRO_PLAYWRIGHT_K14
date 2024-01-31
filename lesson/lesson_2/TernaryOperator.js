const EXPECTED_TIME = 7;
let arrivalTime = 8;

let isHeOnTime = arrivalTime === EXPECTED_TIME
let msgContent = isHeOnTime ? "Let's talk" : "Write a letter";

console.log(msgContent);