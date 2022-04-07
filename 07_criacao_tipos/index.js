"use strict";
// 1 - generics
function showData(arg) {
    return `o dado é ${arg}`;
}
console.log(showData(5));
console.log(showData('testando generic'));
console.log(showData(true));
console.log(showData({ teste: 'testando generic' }));
console.log(showData(['testando', 'generic']));
// 2 - constraint em generics - tipos aceitos
function showProductName(obj) {
    return `o nome do produto é ${obj.name}`;
}
const myObj = { name: 'porta', cor: 'branca' };
const otherObj = { name: 'carro', wheels: 4, engine: 1.0 };
console.log(showProductName(myObj));
console.log(showProductName(otherObj));
const myCar = { name: 'fusca', wheels: 4, engine: 1500, color: 'preto' };
const myPen = { name: 'canetra bic', wheels: false, engine: false, color: 'vermelha' };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, key) {
    return `a chave ${key} esta presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2tb',
    ram: '32gb'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: 'lincoln',
    age: 38,
    hasDriveLicense: true
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
console.log(showCharName(myChar, 'hasDriveLicense'));
// 6 - typeof type operator
const userName = 'lincoln';
const userName2 = 'noah';
const userName3 = 'lucas';
const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'caminhao para pouca carga'
};
function showKm(km) {
    console.log(`o veiculo tem a km de: ${km}`);
}
showKm(newTruck.km);
const someVar = 5;
const testing = "some text";
