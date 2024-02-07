// CRUD | Create Read Update Delete
let emergencyList = new Map([
    ['113', 'Police Dept'],
    ['114', 'Fire Dept'],
    ['115', 'Hospital'],
    ['116', 'Others']
]);
// emergencyList.set('113', 'Police Dept');
// emergencyList.set('114', 'Fire Dept');
// emergencyList.set('115', 'Hospital');
// emergencyList.set('116', 'Others');

// Read a single value
console.log(emergencyList.get('113'));
console.log('Is 113 key existing: ', emergencyList.has('113'));

// Loop the map's entired via keys
for(const key of emergencyList.keys()){
    console.log(`${key}: ${emergencyList.get(key)}`);
}

console.log("===Loop the map's entired via value===");
// Loop the map's entired via value
for(const value of emergencyList.values()){
    console.log(`value: ${value}`);
}

console.log("===Loop the map's entired via value==");
// Loop the map's entired via value
for(const value of emergencyList.values()){
    console.log(`value: ${value}`);
}

console.log("== Iterator | key ==");
console.log(Array.from(emergencyList.keys())[0]);

// Get map size
console.log('Map size: ', emergencyList.size);

// Delete element
emergencyList.delete('113')
printTheMap(emergencyList)

function printTheMap(emergencyList){
    for(const key of emergencyList.keys()){
        console.log(`${key}: ${emergencyList.get(key)}`);
    }
}