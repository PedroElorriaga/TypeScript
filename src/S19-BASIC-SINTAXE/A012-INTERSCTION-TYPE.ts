type Nome = { valorNome: string };
type Sobrenome = { valorSobrenome: string };
type Idade = { valorIdade: number };
type Pessoa = Nome & Sobrenome & Idade;

const pessoaUm: Pessoa = {
  valorNome: 'Pedro',
  valorIdade: 21,
  valorSobrenome: 'Elorriaga',
};

console.log(pessoaUm);

export { pessoaUm };
