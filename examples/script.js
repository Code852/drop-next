const closeBtn = document.querySelectorAll('.intro_close_btn'),
  menuBtn = document.querySelector('#menu-btn'),
  continueDesktopBtn = document.querySelector('.intro.desktop .continue_desktop_btn'),
  continuesignupBtn = document.querySelector('.continue_btn_temp_sign'),
  continuesigninBtn = document.querySelector('.continue_btn_temp_sign_in'),
  intro = document.querySelector('.intro.desktop'),
  introDesktopWrapper = document.querySelector('.intro_desktop_wrapper'),
  introMobile = document.querySelector('.intro.mobile'),
  introMobileWrapper = document.querySelector('.intro_mobile_wrapper'),
  introMobileSection = document.querySelectorAll('.intro_mobile_section'),
  continueMobileBtn = document.querySelector('.intro.mobile .continue_btn'),
  scene = document.querySelector('a-scene'),
  introAction = localStorage.getItem('intro') === 'true';
const screenBtnEle = document.getElementById('screen-btn');

console.log(menuBtn);
if (false) {
  hideIntro();
  intro.style.visibility = 'hidden';
  introMobile.style.visibility = 'hidden';
  menuBtn.style.visibility = 'hidden';
} else {
  scene.addEventListener('loaded', showIntro);
  if (window.innerWidth > 768) {
    localStorage.setItem('intro', 'true');
  }
}
function introResize() {
  if (window.innerWidth > 768) {
    introMobile.style.visibility = 'hidden';
    showIntro();
  } else {
    intro.style.visibility = 'hidden';
    screenBtnEle.style.display = 'none';
    menuBtn.style.display = 'none';
    hideIntro();
  }
}
introResize();
window.addEventListener('resize', introResize);

closeBtn.forEach((btn) => {
  btn.addEventListener('click', hideIntro);
});
continuesigninBtn.addEventListener('click', hideIntro);

menuBtn.addEventListener('click', showIntro);

continueDesktopBtn.addEventListener('click', function () {
  introDesktopWrapper.classList.remove('step-1');
  introDesktopWrapper.classList.add('step-2');
});

continuesignupBtn.addEventListener('click', function () {
  introDesktopWrapper.classList.remove('step-2');
  introDesktopWrapper.classList.add('step-3');
});
continueMobileBtn.addEventListener('click', function () {
  introMobileWrapper.classList.remove('step-1');
  introMobileWrapper.classList.add('step-2');
});
document.addEventListener('click', function (e) {
  if (window.innerWidth < 768 && e.target != continueMobileBtn) {
    if (introMobileWrapper.className.includes('step-2')) {
      introMobileWrapper.classList.remove('step-2');
      introMobileWrapper.classList.add('step-3');
    } else if (introMobileWrapper.className.includes('step-3')) {
      introMobileWrapper.classList.remove('step-3');
      introMobileWrapper.classList.add('step-4');
    }
  }
});
document.querySelector('#start-btn').addEventListener('click', function () {
  hideIntro();
  document.querySelector('.guide_completed').classList.add('active');
  setTimeout(() => {
    document.querySelector('.guide_completed').classList.remove('active');
  }, 1500);
  localStorage.setItem('intro', 'true');
});

function showIntro() {
  if (scene.hasLoaded) {
    if (window.innerWidth > 768) {
      intro.classList.add('active');
    } else {
      introMobile.classList.add('active');
    }
  }
}
function hideIntro() {
  intro.classList.remove('active');
  introMobile.classList.remove('active');
}

// const display = document.querySelector('.display-name');
// const displayBtn = document.querySelector('.display-name .btn');
// displayBtn.addEventListener('click', () => {
//   display.style.display = 'none';
// });

let rotation = 0;

menuBtn.addEventListener('click', () => {
  rotation -= 180;
  menuBtn.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
});

continueDesktopBtn.addEventListener('click', () => {
  rotation = 0;
  menuBtn.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
});

{
  /* <a href="#" class="chat-close" id="abcd"><img id="abcd"src="./assets/img/Caret_Circle_Right.svg" alt=""></a> */
}

let rotation1 = 0;

menuBtn.addEventListener('click', () => {
  rotation -= 180;
  menuBtn.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
});

continueDesktopBtn.addEventListener('click', () => {
  rotation = 0;
  menuBtn.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
});

let rotate = 0;
var chatclose = document.querySelector('.chat-close');
console.log(chatclose);

var isChecked3 = false; // Variable to track checkbox state

chatclose.addEventListener('click', function () {
  if (!isChecked3) {
    // First click on the checkbox
    rotation = 135;
    chatclose.style.transform = ` rotate(${rotation}deg)`;
    isChecked3 = true;
  } else {
    // Second click on the checkbox
    rotation = -45;
    chatclose.style.transform = ` rotate(${rotation}deg)`;
    isChecked3 = false;
  }
});
