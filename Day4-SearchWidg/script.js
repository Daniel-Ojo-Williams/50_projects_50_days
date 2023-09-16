const searchBtn = document.getElementById('button');
const container = document.querySelector('.search');
const inputElement = document.getElementById('input')

searchBtn.addEventListener('click', () => {
  container.classList.add('active');
  inputElement.focus();
})