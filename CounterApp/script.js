// const modal = document.querySelector('.modal'),
//       btn = document.querySelector('#btn'),
//       close = document.querySelector('.close');

// btn.addEventListener('click', openModal);      

// function openModal(e){
//   e.preventDefault();
//   modal.style.display = 'block';
// }

// close.addEventListener('click', () => modal.style.display = 'none');

// Palindrome

// const check = document.querySelector('.check'),
//       result = document.querySelector('.result'),
//       inputElemet = document.querySelector('.inputElement');
// 
// check.addEventListener('click', () => {
//   palindrome();
//   inputElemet.value = '';
// });

// function palindrome(){
//   let word = inputElemet.value;
//   let start = word.substring(0, Math.floor(word.length / 2));
//   let end = word.substring(word.length - Math.floor(word.length / 2));
//   let flip = [...end].reverse().join('');
//   result.innerHTML = start === flip ? `${word.toUpperCase()} is a palindrome` : `${word.toUpperCase()} is NOT a palindrome`;
// }

// inputElemet.addEventListener('input', () => {result.innerHTML = '';})




// vowel counter 
// const check = document.querySelector('.check'),
//       result = document.querySelector('.result'),
//       inputElemet = document.querySelector('.inputElement');


// const vowels = ['a','e','i','o','u']

// check.addEventListener('click', countVowel)
// function countVowel() {
//   let vowelCount = 0;
//   let wordVal = inputElemet.value.toLowerCase();
//   let checkVowel = [...wordVal].forEach((letter) => {if (vowels.includes(letter)){
//     vowelCount++
//   }

//   result.innerHTML = `${wordVal.toUpperCase()} has ${vowelCount} vowels.`
// })
// }

// const copy = document.querySelector('.copy');

// function copyText(e){
  //   e.preventDefault();
  
  //   coupon.select();
  //   navigator.clipboard.writeText(coupon.value);
  //   copy.innerHTML = 'Copied';
  //   setInterval(() => {copy.innerHTML = 'Copy'}, 500)
  // }
  
  // copy.addEventListener('click', copyText);
  
  // input counter
  // const inputElement = document.querySelector('.coupon');
  
  // inputElement.addEventListener('input', () => {
  //   let charLength = inputElement.value.length;
  //   const counter = document.querySelector('.counter');
  //   counter.innerHTML = charLength;
  // })

  // tip calculator
  const btn = document.querySelector('.calculatorSection .tip');
  const bill = document.querySelector('input.bill'); 
  const rate = document.querySelector('.calculatorSection select');
  const tipInfo = document.querySelector('.tip-value');
  const total = document.querySelector('.total-bill');
  const billError = document.querySelector('.bill-error');
  const tipError = document.querySelector('.tip-error');

  function calculateTip(e){
    e.preventDefault()

    let billAmt = bill.value;
    let rateAmt = rate.value;
    console.log(rateAmt);
    if (billAmt === '' || isNaN(billAmt)) {
      billError.innerHTML = 'Please enter a number';
      clearError(billError);
    } else if (rateAmt === '0') {
      tipError.innerHTML = 'Please enter an option';
      clearError(tipError);
    } else {
      let tipAmt = billAmt * rateAmt;
      tipAmt = Math.ceil(tipAmt);
      tipInfo.innerHTML = `Tip: $${tipAmt}`
      total.innerHTML = `Total bill: $${tipAmt + Number(billAmt)}`

    }
  }

  function clearError(error){
    setTimeout(() => error.innerHTML = '', 5000)
  }
  
  btn.addEventListener('click', calculateTip);
  
  // twitter share
  const textArea = document.querySelector('#textArea');
  const textLength = document.querySelector('.textlength');
  const tweetButton = document.querySelector('.tweet-btn');

  textArea.addEventListener('keydown', (e) => { 
    if (e.code !== 'Space'){
      textLength.innerHTML-- 
    }
});

let max = 50;
function updateLimit(){
  textLength.textContent = max;
  textArea.addEventListener('input', () => {
    let inputLength = textArea.value.length;
    textLength.textContent = max - inputLength;
    if (inputLength > max) {
      tweetButton.disabled = true;
      textLength.style.color = 'red';
    } else {
      tweetButton.disabled = false;
      textLength.style.color = 'black';
    }
  })
}

  tweetButton.addEventListener('click', () => {
    tweet();
  })

  function tweet(){
    const tweet = 'https://twitter.com/intent/tweet?text=';
    window.open(`${tweet}${textArea.value}`);
  }

  updateLimit();


  const password = document.querySelector('#password');
  const eye = document.querySelector('#eye');

  function toggleEyeDisplay() {
    if (password.value.length > 0) {
    eye.style.display = 'block';
  } else {
    eye.style.display = 'none';
  }
}

  eye.addEventListener('mousedown', () => {
    if (eye.classList.contains('fa-eye')) {
      password.setAttribute('type', 'text');
      eye.classList.replace('fa-eye', 'fa-eye-slash')
    }
  })

  eye.addEventListener('mouseup', () => {
    if (eye.classList.contains('fa-eye-slash')) {
      password.setAttribute('type', 'password');
      eye.classList.replace('fa-eye-slash', 'fa-eye')
    }
  })

  password.addEventListener('input', toggleEyeDisplay);

  toggleEyeDisplay();

  // vertical tabs

  const tabBtns = document.querySelectorAll('.tab-link');
  const allContent = document.querySelectorAll('.tab-content');

  tabBtns.forEach((tabLink) => tabLink.addEventListener('click', function() {
    rmvActive();
    this.classList.add('active-link')

    const filterClass = this.dataset.filterClass;
    const filter = document.getElementsByClassName(filterClass);
    console.log(filter);
    allContent.forEach((content) => content.classList.remove('show'))
    filter[0].classList.add('show')
  }))

  function rmvActive(){
    tabBtns.forEach((tab) => tab.classList.remove('active-link'))
  }


  // animated ui
  const loginLink = document.querySelector('.login-link');
  const registerLink = document.querySelector('.register-link');
  const forgotLink = document.querySelector('.forgot-link');
  
  const loginSection = document.querySelector('.login'),
        registerSection = document.querySelector('.register'),
        forgotSection = document.querySelector('.forgot'),
        closeLink = document.querySelector('.close')
;

registerLink.addEventListener('click', () => {
  toggleDisplay(registerSection, loginSection);
});
forgotLink.addEventListener('click', () => {
  toggleDisplay(forgotSection, loginSection);
});
loginLink.addEventListener('click', () => {
  toggleDisplay(loginSection, registerSection);
});
closeLink.addEventListener('click', () => {
  toggleDisplay(loginSection, forgotSection);
});



function toggleDisplay(show, hide) {
  show.style.display = 'flex';
  hide.style.display = 'none';
}



  