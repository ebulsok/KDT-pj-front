const frame = document.querySelector("section");
const list = frame.querySelectorAll("article");
const len = list.length;
const deg = 360 / len;

let korea = document.querySelector(".korea");

let xMark = document.querySelector(".xMark");

let startX, endX;
let temp = 0;
document.querySelector("body").addEventListener("mousedown", function(e) {
    startX = e.screenX;
    
});
document.querySelector("body").addEventListener("mouseup", function(e) {
    endX = e.screenX;
    frame.style.transform = `rotate(${temp = temp - (startX-endX)/15 }deg)`;
    console.log(temp);
});

for(let i = 0; i < len; i++) {
    list[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;

    list[i].addEventListener("click", function() {
        let deg_rotate;
        let quot = parseInt(-temp/360);

        if(temp > 0) {
            deg_rotate = quot * 360 - deg * (len - i);
            console.log(deg_rotate, -temp, -temp + deg_rotate, deg_rotate + temp, quot);
            if(-temp - deg_rotate < -180) deg_rotate = --quot * 360 - deg * (len - i);
            else if(deg_rotate + temp < -180) deg_rotate = ++quot * 360 - deg * (len - i);
        }
        else if(temp === 0) {
            if (i === 0) deg_rotate = 0;
            else if(i === len - 1) deg_rotate = -deg;
            else deg_rotate = deg * i;
        }
        else {
            deg_rotate = quot * 360 + deg * i;
            if(-temp - deg_rotate > 180) deg_rotate = ++quot * 360 + deg * i;
            else if(deg_rotate + temp > 180) deg_rotate = --quot * 360 + deg * i;
        }

        frame.style.transform = `rotate(${-deg_rotate}deg)`;

        let prev, next;
        if(i === 0) {
            prev = len - 1;
            next = i + 1;
        } else if(i === len - 1) {
            prev = i - 1;
            next = 0;
        } else {
            prev = i - 1;
            next = i + 1;
        }
        list[prev].style.opacity = "0";
        list[next].style.opacity = "0";
        xMark.style.opacity = "1";

        list[i].classList.add("on");

        xMark.addEventListener("click", function() {
            list[prev].style.opacity = "1";
            list[next].style.opacity = "1";
            list[i].classList.remove("on");
            xMark.style.opacity = "0";
            frame.style.transform = `rotate(${-deg_rotate}deg)`;
        });

    })
};
