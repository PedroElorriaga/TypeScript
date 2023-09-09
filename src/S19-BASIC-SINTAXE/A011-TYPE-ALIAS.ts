type Idade = number;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  linguagemPreferida?: string;
};

type LinguagemPreferidaBlocoUm = 'Python' | 'C';
type LinguagemPreferidaBlocoDois = 'Java' | 'JavaScript';
type LinguagemPreferida =
  | LinguagemPreferidaBlocoUm
  | LinguagemPreferidaBlocoDois;

const idade: Idade = 21;
const pessoa: Pessoa = {
  idade: 21,
  nome: 'Pedro',
  salario: 1400,
};

console.log(pessoa);

function setLinguagemPreferida(
  pessoa: Pessoa,
  linguagem: LinguagemPreferida,
): Pessoa {
  return { ...pessoa, linguagemPreferida: linguagem };
}
console.log(setLinguagemPreferida(pessoa, 'JavaScript'));

export { pessoa, idade };
