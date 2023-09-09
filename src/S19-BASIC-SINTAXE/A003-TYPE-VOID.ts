function pessoa(...args: Array<string>): void {
  console.log(args.join(' '));
}

const infos = {
  endereco: 'Rua urânia',
  telefone: '1199753684',

  exibirInfos(): void {
    console.log(this.endereco, this.telefone);
  },
};

pessoa('Pedro', 'Elorriaga');
infos.exibirInfos();
