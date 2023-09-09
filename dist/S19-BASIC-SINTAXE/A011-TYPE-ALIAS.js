"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idade = exports.pessoa = void 0;
const idade = 21;
exports.idade = idade;
const pessoa = {
    idade: 21,
    nome: 'Pedro',
    salario: 1400,
};
exports.pessoa = pessoa;
console.log(pessoa);
function setLinguagemPreferida(pessoa, linguagem) {
    return Object.assign(Object.assign({}, pessoa), { linguagemPreferida: linguagem });
}
console.log(setLinguagemPreferida(pessoa, 'JavaScript'));
