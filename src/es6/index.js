/////////// Clase 01 - 02 //////////////
function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

// Es6
function newFunction2(name = 'oscar', age = 32, country = "MX") {
    console.log(name, age, country);
}

newFunction();
newFunction2('Ricardo', '23', 'CO');
///////////

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

/////////// Clase 03 //////////////
let lorem = "probando uno dos tres cuatro cinco seis \n" + "otra frase que usaremos para aprender";
// es6
let lorem2 = `probando uno dos tres cuatro cinco seis
otra frase epica que usaremos`;
console.log(lorem);
console.log(lorem2);

//////////
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age);

let { name, age } = person;
console.log(name, age); 
///////////////

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

/////////////////

{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);
console.log(globalLet);

///////////////
const a = 'b';
a = 'a';

////////////// Clase 04 //////////////
let name = 'oscar';
let age  = 34;
// ES5
obj = { name: name, age: age };
// ES6
obj2 = { name, age };
console.log(obj2);

////////////
const names = [
    {name: 'Oscar', age: 32},
    {name: 'Yesica', age: 27}
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
});

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    ...
}

const listOfNames4 = name => {
    ...
}

const square = num => num * num;

///////
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));