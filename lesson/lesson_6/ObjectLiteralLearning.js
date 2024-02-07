// Object Literal - Use to construct DATA object
// Create
let teo = {
    name: "Teo",
    age: 18,
    "my age": 18
}

// Read: dot notation, [] syntax
console.log(teo.name);
console.log(teo["my age"]);


// Update 
teo.name = 'Ty';
teo['my age'] = 22;
teo.gender = 'M';
console.log('Update: ', teo);
console.log(teo.hasOwnProperty("name"));
console.log(teo.abc);

// Delete property
delete teo["my age"]
console.log('Delete property: ', teo);