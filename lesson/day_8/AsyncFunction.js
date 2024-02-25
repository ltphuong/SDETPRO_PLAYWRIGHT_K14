function askQuestion(question){
    console.log(this.name);
    console.log(question);
}
console.log('1. Toi nha thang Teo');

const question = '2. Teo oi, uong cafe ko?'
setTimeout(askQuestion.bind({name: 'Teo', question}), 3000);

console.log('3. Chay toi quan cafe');