const slide = document.querySelector(".slide_text")

//scroll

let ScrollYpos;

window.addEventListener("scroll", function(){
    ScrollYpos = window.scrollY;
    if(ScrollYpos >80){
        // slide.style.display ="None";

    };
})