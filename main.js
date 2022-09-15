// VARIABLES

const btn = document.querySelector(".btn");
const coupon = document.querySelector(".container__box--coupon");

// FUNCTIONS

const copyTextToClipBoard = (e) => {
  e.preventDefault();

  coupon.select();
  document.execCommand("copy");

  btn.textContent = "Copied.";
  setTimeout(() => {
    btn.textContent = "Copy";
  }, 2500);
};

// EVENT LISTENERS

btn.addEventListener("click", copyTextToClipBoard);
