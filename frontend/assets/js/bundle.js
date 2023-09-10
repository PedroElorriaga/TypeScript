/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/S19-BASIC-SINTAXE/A015-VALIDANDO-FORMULARIO.ts":
/*!************************************************************!*\
  !*** ./src/S19-BASIC-SINTAXE/A015-VALIDANDO-FORMULARIO.ts ***!
  \************************************************************/
/***/ (() => {


const showErrorMessages = 'show-error-message';
const form = document.querySelector('.form');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const repetirSenha = document.querySelector('.repetirSenha');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    limparErros(form);
    verificarCampoVazio(username, email, password, repetirSenha);
    validarSenha(password, repetirSenha);
    if (enviarFormulario(form))
        console.log('Formuário enviado');
});
const verificarCampoVazio = (...inputs) => {
    const arrayValidacao = [];
    inputs.map((x) => {
        if (x.value === '' || x === undefined) {
            exibirMensagemErro(x, `O campo ${x.classList} não pode estar vázio`);
        }
        else {
            return arrayValidacao;
        }
    });
};
const limparErros = (form) => {
    form
        .querySelectorAll('.' + showErrorMessages)
        .forEach((input) => input.classList.remove(showErrorMessages));
};
const exibirMensagemErro = (input, mensagem) => {
    const formFields = input.parentElement;
    const errorMessages = formFields.querySelector('.error-message');
    errorMessages.innerHTML = mensagem;
    formFields.classList.add(showErrorMessages);
};
const validarSenha = (password, repetirSenha) => {
    if (password.value !== repetirSenha.value) {
        exibirMensagemErro(repetirSenha, `As senhas não conferem`);
    }
};
const enviarFormulario = (form) => {
    let envio = true;
    form.querySelectorAll('.' + showErrorMessages).forEach(() => (envio = false));
    return envio;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./S19-BASIC-SINTAXE/A015-VALIDANDO-FORMULARIO */ "./src/S19-BASIC-SINTAXE/A015-VALIDANDO-FORMULARIO.ts");
const start = 'Inicializando a compilação';
console.log(start);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map