const block = document.querySelector(".block");
const middleText = document.querySelector(".middle");
const body = document.querySelector("body");
const audio = document.querySelector(".audio");

//블록 떨어지는 애니메이션
setTimeout(function () {
  block.classList.add("on");
}, 2800);
setTimeout(function () {
  console.log("!!");
  body.classList.add("on");
  // body.style.backgroundColor="pink";
  // block1.classList.add("on");
  // block2.classList.add("on");
  // block3.classList.add("on");
  middleText.style.color = "black";
}, 4200);


