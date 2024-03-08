// Function declaration
function add(a, b){
    return a + b;
}

// Arrow function | Function expression
const addArrow = (a, b) => a + b;
console.log(addArrowư(1));

// No params
const sayHello = () => {
    console.log("Hello");
}

console.log(sayHello());

const intArr = [1, 2, 3, 4, 5];
const filteredArray = intArr.filter(value => value % 2 != 0);
console.log(filteredArray);

// Destructure/Destructuring {}
const tempPost = {id: 1, body: "this is post body"}
const convertPost = ({id, body}) => new Post(id, body);
console.log((convertPost(tempPost)));

// Lexical this binding
const person = {
    name: "Teo",
    sayHello: function(){
        setTimeout
        // Back tick <---- String literial
        console.log(`Hellu, tui ten ${this.name}`);
    }
}

p