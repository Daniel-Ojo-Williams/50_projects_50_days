const open = document.querySelector('#open');
const close = document.querySelector('.close');
const contaniner = document.querySelector('.container');

open.addEventListener('click', () => contaniner.classList.add('show-nav'));
close.addEventListener('click', () => contaniner.classList.remove('show-nav'));