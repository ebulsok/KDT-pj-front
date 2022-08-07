const slide = document.querySelector(".slide_text");
const body = document.querySelector("body");
const slideEl = document.querySelectorAll(".slide")
const slideElR = document.querySelectorAll(".slide_R")
const slideP=document.querySelector(".slogan")
const underBtn=document.querySelector(".footer > a");
// querySelectorAll로 불러오는 요소는 요소를 하나로 불러오는게 아니라
// 각각의 요소들을 배열 형태로 불러오게 됩니다.
// 따라서 각각의 요소에 접근해서 on 클래스를 부여하셔야 합니다!
// 배열 전체에 on 을 주는 것이 아니라 배열 요소 하나하나에 접근해서
// on 클래스 부여

//scroll

let scrollYpos;

window.addEventListener("scroll", function(){
    scrollYpos = window.scrollY;
    console.log(scrollYpos);

    if(scrollYpos >0 && scrollYpos <= 2120){
        body.style.backgroundColor="red";
         slideEl[0].classList.add("on") ;
         slideEl[1].classList.add("on") ;
         slideElR[0].classList.add("on");
         slideElR[1].classList.add("on");
         slide.style.display="block";
         underBtn.style.color="white";       
         slideP.style.transform = `scale(${70/scrollYpos})`;
        console.log(scrollYpos);
     
    }
  //가운데 글자가 없어지는 시점
    else if(scrollYpos >2120 && scrollYpos <=2400){
        body.style.backgroundColor="yellow";      
    }

    
 // 슬라이드 문자가 흐릿해지는 시점
    else if(scrollYpos >2401 && scrollYpos <10000){
        slide.style.opacity= `${1600/scrollYpos}`;
        let opacity = slide.style.opacity;
        console.log(opacity);
    }

    else{
     
        body.style.backgroundColor="aqua";
        underBtn.style.color="rgb(209, 209, 117)";
            
    }
})