// ESTRUTURA OBJETO -> const nome: {object Type} = {atributos};
const objectA: {
  readonly chaveA: string;
  chaveB: string;
  [key: string]: unknown; // PODE EXTENDER O OBJETO
} = {
  chaveA: 'Pedrinho',
  chaveB: 'Pedrita',
};

objectA.chaveC = 'Elorriaga';

console.log(objectA);
