"use strict";
function pessoa(...args) {
    console.log(args.join(' '));
}
const infos = {
    endereco: 'Rua urânia',
    telefone: '1199753684',
    exibirInfos() {
        console.log(this.endereco, this.telefone);
    },
};
pessoa('Pedro', 'Elorriaga');
infos.exibirInfos();
