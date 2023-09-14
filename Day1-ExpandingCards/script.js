const imageBoxes = document.querySelectorAll('.image-box');

imageBoxes.forEach((box) => {
  box.addEventListener('click', () => {
    console.log("element clicked");
    if (box.classList.contains('active')) {
      box.classList.remove('active');
      console.log('class removed');
    } else {
      removeActive();
      box.classList.add('active');
      console.log('class added');
    };
  })
})

function removeActive(){
  imageBoxes.forEach((box) => box.classList.remove('active'))
}