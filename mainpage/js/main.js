const slide = document.querySelector(".slide_text");
const body = document.querySelector("body");
const slideEl = document.querySelectorAll(".slide")
const slideElR = document.querySelectorAll(".slide_R")
const slideP=document.querySelector(".slide_text >p:nth-child(3)")
const second=document.querySelector(".second >p");
const underBtn=document.querySelector(".footer > a");
// querySelectorAll로 불러오는 요소는 요소를 하나로 불러오는게 아니라
// 각각의 요소들을 배열 형태로 불러오게 됩니다.
// 따라서 각각의 요소에 접근해서 on 클래스를 부여하셔야 합니다!
// 배열 전체에 on 을 주는 것이 아니라 배열 요소 하나하나에 접근해서
// on 클래스 부여

//scroll

let ScrollYpos;

window.addEventListener("scroll", function(){
    ScrollYpos = window.scrollY;

    if(ScrollYpos >10 && ScrollYpos <= 400){
        body.style.backgroundColor="red";
         slideEl[0].classList.add("on") ;
         slideEl[1].classList.add("on") ;
         slideElR[0].classList.add("on");
         slideElR[1].classList.add("on");
         slide.style.display="block";
         underBtn.style.color="white";
        

    }
    else if(ScrollYpos >400 && ScrollYpos <=800){
        slideEl[0].classList.remove("on") ;
        slideEl[1].classList.remove("on") ;
        slideElR[0].classList.remove("on");
        slideElR[1].classList.remove("on");
        // slideEl[0].style.display="none";
        // slideEl[1].style.display="none";
        // slideElR[0].style.display="none";
        // slideElR[1].style.display="none";
        // slideP.style.display="none";
        body.style.backgroundColor="aqua";
        //글자 크기 줄여보기 << 써글 아직 못찾음
        slideP.style.Text="20px";
        second.classList.add("on");
    }
    else{
        body.style.backgroundColor="aqua";
        underBtn.style.color="rgb(209, 209, 117)";
            
    }
})