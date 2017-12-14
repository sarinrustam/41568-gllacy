var linkIvent = document.querySelector(".location-info-link");
var popup = document.querySelector(".feedback");
var btnClose = document.querySelector(".feedback-form-close");
var nickname = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var myForm = popup.querySelector(".feedback-form");
var storage = localStorage.getItem("nickname");

linkIvent.addEventListener("click", function(e){
  e.preventDefault();
  popup.classList.add("feedback-active");
  if (storage) {
    nickname.value = storage;
    email.focus();
  } else {
    nickname.focus();
  }
});

btnClose.addEventListener("click", function(e){
  e.preventDefault();
  popup.classList.remove("feedback-active");
  popup.classList.remove("feedback-error");
});

myForm.addEventListener("submit", function(e){
  if (!nickname.value || !email.value) {
    e.preventDefault();
    popup.classList.remove("feedback-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("feedback-error");
  } else {
    localStorage.setItem("nickname", nickname.value);
  }
});

window.addEventListener("keydown", function(e){
  if (e.keyCode === 27){
    if (popup.classList.contains("feedback-active")) {
      popup.classList.remove("feedback-error");
      popup.classList.remove("feedback-active");
    }
  }
})
