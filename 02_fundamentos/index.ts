// 1 - numbers
let x: number = 10;

console.log(x);

x = 16;

console.log(typeof x);

const y: number = 10.654685;

console.log(y);
console.log(typeof y);
console.log(y.toPrecision(3));

// 2 - string
const firstName: string = "Lincoln";
console.log(firstName.toLocaleUpperCase());

let fullName: string;

const lastName: string = "Ruteski";

fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log(typeof fullName);


// 3 - boolean
let a: boolean = false;
console.log(a);
console.log(typeof a);


// 4 - ingerence e annotation
const ann: string = "teste";
let inf = 'teste';
console.log(typeof ann);
console.log(typeof inf);

console.log('testando');
