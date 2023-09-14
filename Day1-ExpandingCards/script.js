const imageBoxes = document.querySelectorAll('.image-box');

imageBoxes.forEach((box) => {
  box.addEventListener('click', () => {
    removeActive();
    box.classList.add('active')
  })
})

function removeActive(){
  imageBoxes.forEach((box) => box.classList.remove('active'))
}