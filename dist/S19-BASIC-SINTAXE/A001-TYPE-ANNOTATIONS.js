"use strict";
/* eslint-disable */
let nome = 'Pedrinho';
let idade = 21;
let valorBoolean = true;
let symbol = Symbol('$');
console.log(nome, idade, valorBoolean, symbol);
console.log('');
// ARRAYS
let arrayOfNumbers = [1, 2, 3];
let arrayOfString = ['Pedrinho', 'Pedrita', 'Elorriaga'];
console.log(arrayOfNumbers);
console.log(arrayOfString);
console.log('');
// OBJETOS
let pessoa = {
    nome: 'Pedro',
    idade: 21
    // empregado? significa que o valor pode ser nulo
};
console.log(pessoa);
console.log(pessoa.nome);
console.log('');
// FUNÇÕES
function soma(x, y) {
    return x + y;
}
console.log(soma(2000, 2));
