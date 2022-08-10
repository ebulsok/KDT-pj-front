const body = document.querySelector("body");
const frame = document.querySelector("section");
const list = frame.querySelectorAll("article");
const len = list.length;
const deg = 360 / len;

let korea = document.querySelector(".korea");

// drag rotate
let startX, endX;
let temp = 0;
body.addEventListener("mousedown", function (e) {
  startX = e.screenX;

  figure.style.cursor = "grabbing";
});
body.addEventListener("mouseup", function (e) {
  endX = e.screenX;
  frame.style.transform = `rotate(${(temp = temp - (startX - endX) / 15)}deg)`;
  console.log(temp);

  figure.style.cursor = "grab";
});

for (let i = 0; i < len; i++) {
  list[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;

  list[i].addEventListener("click", function () {
    let deg_rotate;
    let quot = parseInt(-temp / 360);

    if (temp > 0) {
      deg_rotate = quot * 360 - deg * (len - i);
      console.log(
        deg_rotate,
        -temp,
        -temp + deg_rotate,
        deg_rotate + temp,
        quot
      );
      if (-temp - deg_rotate < -180)
        deg_rotate = --quot * 360 - deg * (len - i);
      else if (deg_rotate + temp < -180)
        deg_rotate = ++quot * 360 - deg * (len - i);
    } else if (temp === 0) {
      if (i === 0) deg_rotate = 0;
      else if (i === len - 1) deg_rotate = -deg;
      else deg_rotate = deg * i;
    } else {
      deg_rotate = quot * 360 + deg * i;
      if (-temp - deg_rotate > 180) deg_rotate = ++quot * 360 + deg * i;
      else if (deg_rotate + temp > 180) deg_rotate = --quot * 360 + deg * i;
    }

    frame.style.transform = `rotate(${-deg_rotate}deg)`;
  });
}

//page flip
const cards = document.querySelectorAll(".card");
const figure = document.querySelector("figure");

let cardY = list[0].getBoundingClientRect().top;
let cardX = list[0].getBoundingClientRect().left;
let cardWitdth = document.body.clientWidth / 2;
let header = document.querySelector("header");

let prev, next;

figure.addEventListener("click", (e) => {
  for (let i = 0; i < len; i++) {
    if (e.target.closest("article") === list[i]) {
      if (!cards[i].classList.contains("flip")) {
        cards[i].classList.add("flip");

        cards[i].style.left = `${cardWitdth - cardX}px`;
        cards[i].style.top = `-${cardY}px`;

        if (i === 0) {
          prev = len - 1;
          next = i + 1;
        } else if (i === len - 1) {
          prev = i - 1;
          next = 0;
        } else {
          prev = i - 1;
          next = i + 1;
        }

        list[prev].style.opacity = "0";
        list[next].style.opacity = "0";
        header.style.opacity = "0";
      } else {
        cards[i].classList.remove("flip");

        cards[i].style.left = `0px`;
        cards[i].style.top = `0px`;

        list[prev].style.opacity = "1";
        list[next].style.opacity = "1";
        header.style.opacity = "1";
      }
    }
  }
});

const colorList = [
  "rgb(157, 138, 130)",
  "rgb(198, 145, 167)",
  "rgb(222, 172, 64)",
  "rgb(61, 120, 81)",
  "rgb(60, 107, 150)",
  "rgb(121, 90, 132)",
  "rgb(190, 103, 90)",
  "rgb(148, 148, 148)",
];
const frontPage = document.querySelectorAll(".page_front");
const photoCard = document.querySelectorAll(".photo_card");

for (let i = 0; i < len; i++) {
  frontPage[i].style.backgroundColor = colorList[i];
  photoCard[i].style.backgroundColor = colorList[i];
}

// // drag move
// let pressed = false;
// let startx, finishx;
// let dragSum = 0;
// // let vh = document.body.clientHeight;

// figure.addEventListener("mousedown", e => {
//     pressed = true;
//     startx = e.offsetX;
//     figure.style.cursor = "grabbing";
// })

// figure.addEventListener("mouseenter", () => {
//     figure.style.cursor = "grab";
// })

// figure.addEventListener("mouseup", e => {
//     figure.style.cursor = "grab";
// })

// window.addEventListener("mouseup", () => {
//     pressed = false;

// })

// //마우스 드래그 시
// figure.addEventListener("mousemove", e => {
//     if (!pressed) return
//     e.preventDefault();
//     finishx = e.offsetX;
//     dragSum -= startx - finishx;
//     console.log(dragSum/20);

//     frame.style.transform = `rotate(${dragSum/150}deg)`;
// })