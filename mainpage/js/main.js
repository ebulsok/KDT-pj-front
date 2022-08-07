
const bodyEl = document.querySelector("body");


const slidetext = document.querySelector(".slide_text");
const slideEl2 =document.querySelector(".slide_text_2")
const slideEl = document.querySelectorAll(".slide")
const slideElR = document.querySelectorAll(".slide_R")
const slogan =document.querySelector(".slogan")
const underBtn=document.querySelector(".footer > a");
const staggerItem=document.querySelectorAll(".stagger_item");

// querySelectorAll로 불러오는 요소는 요소를 하나로 불러오는게 아니라
// 각각의 요소들을 배열 형태로 불러오게 됩니다.
// 따라서 각각의 요소에 접근해서 on 클래스를 부여하셔야 합니다!
// 배열 전체에 on 을 주는 것이 아니라 배열 요소 하나하나에 접근해서
// on 클래스 부여

//scroll

let scrollYpos;

window.addEventListener("scroll", function(){
    scrollYpos = window.scrollY;

    if(scrollYpos > 0 && scrollYpos <= 4600){
         bodyEl.style.backgroundColor="red";
         underBtn.style.color="white";       
         slogan.style.transform = `scale(${80/scrollYpos})`;
         console.log(scrollYpos);    
    }
    // 슬라이드가 시작되는 시점
     if(scrollYpos > 0 && scrollYpos <13000){
        slideEl[0].classList.add("on") ;
        slideEl[1].classList.add("on") ;
        slideElR[0].classList.add("on");
        slideElR[1].classList.add("on");
        
    }

  //가운데 문자가 없어지는 시점
    if(scrollYpos > 4601 && scrollYpos <=5600){
        bodyEl.style.backgroundColor="yellowgreen";   
        slogan.style.display="none";
        // alert("!");
 
    }
    
 //슬라이드 문자가 흐릿해지는 시점
    if(scrollYpos >5600 && scrollYpos <10000){
        slidetext.style.opacity= `${3500/scrollYpos}`;
        console.log(scrollYpos);  
    }
    // slide_text_2 텍스트의 opacity가 조금씩 1로 바뀌는 시점
    // if(scrollYpos >5600 && scrollYpos <???){
    // }

    // <opacity + 글자 위치 변경>
    
    function phase2(){

    }

    let staggerItemlen = staggerItem.length;
    let dx = 50;
    const 시작 = 8000;
    const 종료 = 시작 + dx*10;
    for(let i=0; i<staggerItemlen; i++){
        if(scrollYpos >= 시작 + i*dx && scrollYpos < 종료 + i*dx ){
            bodyEl.style.backgroundColor="skyblue";
            console.log(scrollYpos);  
            staggerItem[i].style.transform= `translateY(${(시작+ i*dx - scrollYpos)/4 }px)`;
            a = 시작 + i*dx
            b = 종료 + i*dx
            console.log('a,b,i',a,b,i)
            staggerItem[i].style.opacity = `${(scrollYpos-a / b-a) /100}`

            let opacity= staggerItem[0].style.opacity;
            console.log('opacity',opacity);

        } 
    }

    // <opacity 공식>
    // dx = 50 일때
    // a : 8000 + i*dx
    // b : 8400 + i*dx
    //                 a      b
    // i : 0  => scr : 8000 ~ 8400 | i*dx = 50
    // i : 1  => scr : 8050 ~ 8450 | i*dx = 100
    // ...
    // i : 10 => scr : 8500 ~ 8900 | i*dx = 500
    //                 0    -    1
    // target : 0/400 ~ 400/400 (scrollYpos-a / b-a)


    // <화이트 - 블랙>
    // 첫번째 슬라이드가 사라지는 지점
    if(scrollYpos>=13000) {
        slidetext.style.display="none";
    }

    // < intriguing - surprising>

    //세번째 슬라이드 시작지점


})


    // function funk(){
    //     slideEl2.style.display= "none";
    //     bodyEl.style.backgroundColor="aqua";
    //     underBtn.style.color="rgb(209, 209, 117)";
    //     slogan.style.display="block"; 