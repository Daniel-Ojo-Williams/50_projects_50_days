const progressBar = document.querySelector('.progress-bar');
const circles = document.querySelectorAll('.circle');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');


let activeCircle = 1;

nextBtn.addEventListener('click', () => {
  activeCircle++
  if (activeCircle > circles.length) {
    activeCircle = circles.length
  };
  updateBar();
});

prevBtn.addEventListener('click', () => {
  activeCircle--;
  if (activeCircle < 1) {
    activeCircle = 1
  }
  updateBar()
});


function updateBar(){
  circles.forEach((circle, index) => {
    if (index < activeCircle) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  // update progress bar width
  circlesActive = document.querySelectorAll('.active');
  console.log(circlesActive.length);
  progressBar.style.width = ((circlesActive.length - 1) / (circles.length -1)) * 100 + '%'
  console.log(progressBar.style.width)

  // update the disable on prev and next button

  if (activeCircle === 1) {
    prevBtn.disabled = true;
  } else if (activeCircle === circles.length) {
    // nextBtn.disabled = true;
    nextBtn.innerHTML = 'Finish';
  } else {
    nextBtn.innerHTML = 'Next';
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}