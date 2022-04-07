"use strict";
function showProductDetails(product) {
    console.log(`o nome do produto é ${product.name} e seu preco é R$${product.price}`);
    if (product.isAvailable) {
        console.log('o produto esta disponivel');
    }
}
const product = { name: 'calcao', price: 214.55, isAvailable: true };
const shirt = {
    name: 'camiseta',
    price: 14.55,
    isAvailable: false,
};
showProductDetails(product);
showProductDetails(shirt);
function showUserDetails(user) {
    console.log(`o usuario tem o email ${user.email}`);
    if (user.role) {
        console.log(`a funcao do usuario é ${user.role}`);
    }
}
const usuario = {
    email: 'email@email.com'
};
const usuarioRole = {
    email: 'emails123@asdf.com',
    role: 'admin'
};
showUserDetails(usuario);
showUserDetails(usuarioRole);
const fusca = {
    brand: 'vw',
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const h = {
    name: 'lincoln',
    age: 38
};
console.log(h);
const sh = {
    name: 'goku',
    age: 50,
    superpowers: ['genki dama', 'teletransporte', 'kamehameha']
};
console.log(sh);
console.log(sh.superpowers[2]);
const arnold = {
    name: 'arnold',
    type: 'shotgun',
    calibre: 12
};
console.log(arnold);
console.log(arnold.type);
// 7 - array readonly
let myArray = ['maca', 'laranja', 'banana'];
//myArray[3] = 'mamao'
console.log(myArray);
myArray.forEach(item => {
    console.log(`fruta: ${item}`);
});
myArray = myArray.map((item) => {
    return `fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
const anotherUser = ['lincoln', 30];
console.log(anotherUser);
anotherUser[0] = 'noah';
console.log(anotherUser);
// 9 - tuplas com readonly
function showNumbers(numbers) {
    //numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
