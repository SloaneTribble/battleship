import "./style.css";

const hi = document.querySelector(".hey");

hi.addEventListener("click", (e) => {
  hi.classList.add("red");
});
