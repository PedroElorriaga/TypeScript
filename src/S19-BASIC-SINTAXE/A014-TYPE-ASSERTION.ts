const body = document.querySelector('body') as HTMLBodyElement; // UTILIZAMOS ISSO PARA NÃO DEIXAR O TS DEDUZI-LO COMO HTMLBodyElement | null
body.style.backgroundColor = 'red';

const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
