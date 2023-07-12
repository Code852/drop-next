const closeBtn = document.querySelectorAll(".intro_close_btn"),
  menuBtn = document.querySelector("#menu-btn"),
  continueDesktopBtn = document.querySelector(
    ".intro.desktop .continue_desktop_btn"
  ),
  continuesignupBtn = document.querySelector(".continue_btn_temp_sign"),
  continuesigninBtn = document.querySelector(".continue_btn_temp_sign_in"),
  continuesignupmobileBtn = document.querySelector(
    ".continue_btn_temp_sign_mobile"
  ),
  continuesigninmobileBtn = document.querySelector(
    ".continue_btn_temp_sign_in_mobile"
  ),
  intro = document.querySelector(".intro.desktop"),
  introDesktopWrapper = document.querySelector(".intro_desktop_wrapper"),
  introMobile = document.querySelector(".intro.mobile"),
  introMobileWrapper = document.querySelector(".intro_mobile_wrapper"),
  introMobileSection = document.querySelectorAll(".intro_mobile_section"),
  continueMobileBtn = document.querySelector(".intro.mobile .continue_btn"),
  scene = document.querySelector("a-scene"),
  signupBtn = document.querySelector(".signup"),
  signinBtn = document.querySelector(".signin"),
  signup_desktopBtn = document.querySelector(".signup_desktop"),
  signin_desktopBtn = document.querySelector(".signin_desktop"),
  introAction = localStorage.getItem("intro") === "true";
const screenBtnEle = document.getElementById("screen-btn");
const controls_btn = document.getElementById("controls-btn");

const signup1 = document.querySelector(".signup1");
const signin1 = document.querySelector(".signin1");
const signup1_desktop = document.querySelector(".signup1_desktop");
const signin1_desktop = document.querySelector(".signin1_desktop");
const chat_box1 = document.getElementById("live-chat");

console.log(menuBtn);
if (false) {
  hideIntro();
  intro.style.visibility = "hidden";
  introMobile.style.visibility = "hidden";
  menuBtn.style.visibility = "hidden";
} else {
  scene.addEventListener("loaded", showIntro);
  if (window.innerWidth > 768) {
    localStorage.setItem("intro", "true");
  }
}
function introResize() {
  if (window.innerWidth > 768) {
    introMobile.style.visibility = "hidden";
    showIntro();
  } else {
    intro.style.visibility = "hidden";
    screenBtnEle.style.display = "none";
    controls_btn.style.display = "none";
    menuBtn.style.display = "none";
    hideIntro();
  }
}
introResize();
// window.addEventListener("resize", introResize);

closeBtn.forEach((btn) => {
  btn.addEventListener("click", hideIntro);
});

continuesigninBtn.addEventListener("click", function () {
  const menubar = document.querySelector(".abc2");
  const menubar1 = document.querySelector(".abc3");
  menubar.style.opacity = "1";
  menubar1.style.opacity = "1";
  chat_box1.style.display = "block";
  hideIntro();
});
continuesigninmobileBtn.addEventListener("click", function () {
  const menubar = document.querySelector(".abc2");
  menubar.style.opacity = "1";
  hideIntro();
});

menuBtn.addEventListener("click", showIntro);

continueDesktopBtn.addEventListener("click", function () {
  introDesktopWrapper.classList.remove("step-1");
  introDesktopWrapper.classList.add("step-2");
});

continuesignupBtn.addEventListener("click", function () {
  const menubar = document.querySelector(".abc2");
  const menubar1 = document.querySelector(".abc3");
  menubar.style.opacity = "1";
  menubar1.style.opacity = "1";
  chat_box1.style.display = "block";
  hideIntro();
  // const temp1 = document.getElementById("signindesktop");
  // temp1.style.opacity = "1";
  // temp1.style.display = "block";
  // const temp2 = document.getElementById("signupdesktop");
  // temp2.style.opacity = "0";
  // temp2.style.display = "none";
});
continueMobileBtn.addEventListener("click", function () {
  introMobileWrapper.classList.remove("step-1");
  introMobileWrapper.classList.add("step-2");
});

signup1_desktop.addEventListener("click", function () {
  signup_desktopBtn.style.backgroundColor = "#fff";
  signup_desktopBtn.style.color = "#202020";
  signin_desktopBtn.style.backgroundColor = "#ffffff00";
  signin_desktopBtn.style.color = "#fff";
  const temp1 = document.getElementById("signindesktop");
  temp1.style.opacity = "0";
  temp1.style.display = "none";
  const temp2 = document.getElementById("signupdesktop");
  temp2.style.opacity = "1";
  temp2.style.display = "block";
});
signin_desktopBtn.addEventListener("click", function () {
  signin1_desktop.style.backgroundColor = "#fff";
  signin1_desktop.style.color = "#202020";
  signup1_desktop.style.backgroundColor = "#ffffff00";
  signup1_desktop.style.color = "#fff";
  const temp1 = document.getElementById("signindesktop");
  temp1.style.opacity = "1";
  temp1.style.display = "block";
  const temp2 = document.getElementById("signupdesktop");
  temp2.style.opacity = "0";
  temp2.style.display = "none";
});
// signup1.addEventListener("click", function () {
//   signupBtn.style.backgroundColor = "#fff";
//   signupBtn.style.color = "#202020";
//   signinBtn.style.backgroundColor = "#ffffff00";
//   signinBtn.style.color = "#fff";
//   introMobileWrapper.classList.remove("step-5");
//   introMobileWrapper.classList.add("step-4");
// });

continuesignupmobileBtn.addEventListener("click", function () {
  const menubar = document.querySelector(".abc2");
  menubar.style.opacity = "1";
  hideIntro();
  // const temp1 = document.getElementById("signin");
  // temp1.style.opacity = "1";
  // temp1.style.display = "block";
  // const temp2 = document.getElementById("signup");
  // temp2.style.opacity = "0";
  // temp2.style.display = "none";
});
signinBtn.addEventListener("click", function () {
  signin1.style.backgroundColor = "#fff";
  signin1.style.color = "#202020";
  signup1.style.backgroundColor = "#ffffff00";
  signup1.style.color = "#fff";
  const temp1 = document.getElementById("signin");
  temp1.style.opacity = "1";
  temp1.style.display = "block";
  const temp2 = document.getElementById("signup");
  temp2.style.opacity = "0";
  temp2.style.display = "none";
});
signup1.addEventListener("click", function () {
  signupBtn.style.backgroundColor = "#fff";
  signupBtn.style.color = "#202020";
  signinBtn.style.backgroundColor = "#ffffff00";
  signinBtn.style.color = "#fff";
  const temp1 = document.getElementById("signin");
  temp1.style.opacity = "0";
  temp1.style.display = "none";
  const temp2 = document.getElementById("signup");
  temp2.style.opacity = "1";
  temp2.style.display = "block";
});
document.addEventListener("click", function (e) {
  if (window.innerWidth < 768 && e.target != continueMobileBtn) {
    if (introMobileWrapper.className.includes("step-2")) {
      introMobileWrapper.classList.remove("step-2");
      introMobileWrapper.classList.add("step-3");
    } else if (introMobileWrapper.className.includes("step-3")) {
      introMobileWrapper.classList.remove("step-3");
      introMobileWrapper.classList.add("step-4");
    }
  }
});
document.querySelector("#start-btn").addEventListener("click", function () {
  hideIntro();
  document.querySelector(".guide_completed").classList.add("active");
  setTimeout(() => {
    document.querySelector(".guide_completed").classList.remove("active");
  }, 1500);
  localStorage.setItem("intro", "true");
});

function showIntro() {
  if (scene.hasLoaded) {
    if (window.innerWidth > 768) {
      intro.classList.add("active");
    } else {
      introMobile.classList.add("active");
    }
  }
}
function hideIntro() {
  intro.classList.remove("active");
  introMobile.classList.remove("active");
}

// const display = document.querySelector('.display-name');
// const displayBtn = document.querySelector('.display-name .btn');
// displayBtn.addEventListener('click', () => {
//   display.style.display = 'none';
// });

let rotation = 0;

menuBtn.addEventListener("click", () => {
  rotation -= 180;
  menuBtn.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
});

continueDesktopBtn.addEventListener("click", () => {
  rotation = 0;
  menuBtn.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
});

{
  /* <a href="#" class="chat-close" id="abcd"><img id="abcd"src="./assets/img/Caret_Circle_Right.svg" alt=""></a> */
}

let rotation1 = 0;

menuBtn.addEventListener("click", () => {
  rotation -= 180;
  menuBtn.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
});

continueDesktopBtn.addEventListener("click", () => {
  rotation = 0;
  menuBtn.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
});

let rotate = 0;
var chatclose = document.querySelector(".chat-close");
console.log(chatclose);

var isChecked3 = false; // Variable to track checkbox state

chatclose.addEventListener("click", function () {
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
