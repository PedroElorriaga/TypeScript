const showErrorMessages: string = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const repetirSenha = document.querySelector(
  '.repetirSenha',
) as HTMLInputElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  limparErros(form);
  verificarCampoVazio(username, email, password, repetirSenha);
  validarSenha(password, repetirSenha);
  if (enviarFormulario(form)) console.log('Formuário enviado');
});

const verificarCampoVazio = (...inputs: HTMLInputElement[]): void => {
  const arrayValidacao: HTMLInputElement[] = [];
  inputs.map((x: HTMLInputElement) => {
    if (x.value === '' || x === undefined) {
      exibirMensagemErro(x, `O campo ${x.classList} não pode estar vázio`);
    } else {
      return arrayValidacao;
    }
  });
};

const limparErros = (form: HTMLFormElement) => {
  form
    .querySelectorAll('.' + showErrorMessages)
    .forEach((input) => input.classList.remove(showErrorMessages));
};

const exibirMensagemErro = (
  input: HTMLInputElement,
  mensagem: string,
): void => {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessages = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessages.innerHTML = mensagem;
  formFields.classList.add(showErrorMessages);
};

const validarSenha = (
  password: HTMLInputElement,
  repetirSenha: HTMLInputElement,
): void => {
  if (password.value !== repetirSenha.value) {
    exibirMensagemErro(repetirSenha, `As senhas não conferem`);
  }
};

const enviarFormulario = (form: HTMLFormElement): boolean => {
  let envio: boolean = true;
  form.querySelectorAll('.' + showErrorMessages).forEach(() => (envio = false));
  return envio;
};
