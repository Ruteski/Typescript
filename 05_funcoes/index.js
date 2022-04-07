"use strict";
// 1 - funcao sem retorno void
function semRetorno() {
    console.log('essa funcao nao tem retorno');
}
semRetorno();
// 2 - callback como argumento
function saudacao(nome) {
    return `Ola ${nome}`;
}
function preSaudacao(f, usuario) {
    console.log('preparando a funcao');
    const greet = f(usuario);
    console.log(greet);
}
preSaudacao(saudacao, 'lincoln');
// 3 - funcao generica
function primeiroElemento(arr) {
    return arr[0];
}
console.log(primeiroElemento([1, 2, 3]));
console.log(primeiroElemento(['3', 'lin']));
console.log(primeiroElemento(['ruteski', true]));
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2,
    };
}
const newObject = mergeObjects({ name: 'lincoln' }, { age: 38, job: 'programador' });
console.log(newObject);
// 4 - constraint em generic function
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber(9, 4));
console.log(biggestNumber("17", "52"));
// 5 - especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [5, 6]));
console.log(mergeArrays([1, 2, 3], ['teste', 'testando']));
// 6 - parametros opcionais
function modernGreeting(nome, greet) {
    if (greet) {
        return `ola ${greet} ${nome}, tudo bem?`;
    }
    return `ola ${nome}, tudo bem?`;
}
console.log(modernGreeting('lincoln'));
console.log(modernGreeting('lincoln', 'dr.'));
// 7 - parame default
function somaDefault(a, b = 10) {
    return a + b;
}
console.log(somaDefault(25.5));
console.log(somaDefault(25.2, 36.85));
// 8 - tipo unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === 'number') {
        console.log('x é um numero');
    }
}
doSomething([1, 2, 3]);
doSomething(654);
// 9 - tipo never
function showErrorMessage(msg) {
    throw new Error(msg);
}
//showErrorMessage("algum erro");
// 10 - rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => number + sum);
}
console.log(sumAll(3, 5, 3, 9, 9));
console.log(sumAll(385, 5.589, 35.7458));
// 11 - destructuring em parametros
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}
const shirt = { name: 'camisa', price: 49.99 };
console.log(showProductDetails(shirt));
