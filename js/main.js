gsap.registerPlugin(ScrollTrigger);
gsap.defaults({
    ease: "none",
});

const slides = document.querySelectorAll(".slide");
let scrollYpos;
window.addEventListener("scroll", function() {
    scrollYpos = window.scrollY;
    if(scrollYpos > 350) {
        slides.forEach(element => {
            element.classList.add("on");
        });
    }
    else {
        slides.forEach(element => {
            element.classList.remove("on");
        });
    }
});

let li1 = document.querySelector(".li1").offsetWidth;
let li2 = document.querySelector(".li2").offsetWidth;
let li3 = document.querySelector(".li3").offsetWidth;
let li = document.querySelector(".li1").offsetHeight;

// document.querySelector(".word4").style.width = `${li1 + 20}px`;
document.querySelector(".word4").style.height = `${li}px`;
document.querySelector(".li1").style.transform = `translate(0px, ${li * -2}px)`;
document.querySelector(".li2").style.transform = `translate(0px, ${li * -2}px)`;
document.querySelector(".li3").style.transform = `translate(0px, ${li * -2}px)`;


const scroll = gsap.timeline({
    scrollTrigger: {
        trigger: "section",
        start: "top top",
        end: "+=15000",
        scrub: true,
        pin: true,
    }
});

scroll.from(".scroll_1", { backgroundColor: "#3D61AD", })
.to(".middle", { scale: 0, duration: 4, }, "<")
.from(".slide_L", { scrollTrigger: { start: "400", }, opacity: 0, duration: 1, } , "<")
.from(".slide_R", { scrollTrigger: { start: "400", }, opacity: 0, duration: 1, }, "<")
.to(".scroll_2", { opacity: 1, })
.from(".word1", { y: -30, opacity: 0, })
.from(".word2", { y: -30, opacity: 0, })
.from(".word3", { y: -30, opacity: 0, })
.to(".word4", { width: `${li1 + 20}`, }, "<")
.from(".word4", { y: -60, opacity: 0, })
.from(".word5", { y: -60, opacity: 0, })
.from(".word6", { y: -60, opacity: 0, })
.from(".word7", { y: -90, opacity: 0, })
.from(".word8", { y: -90, opacity: 0, })
.from(".word9", { y: -90, opacity: 0, })
.from(".word10", { y: -90, opacity: 0, })
.to(".line", { width: "100%", })
.to("li", { y: `${li * -1}`, })
.to(".word4", { width: `${li2 + 20}`, }, "<")
.to("li", { y: 0, })
.to(".word4", { width: `${li3 + 20}`, }, "<")
.to(".scroll_3", { delay: 0.5, opacity: 1, })
.to(".container", { bottom: 0, duration: 4, })
.to(".w1", { opacity: 1, ease: Circ.easeIn, }, "<")
.to(".w2", { opacity: 1, delay: 0.2, ease: Circ.easeIn, }, "<")
.to(".w3", { opacity: 1, delay: 0.2, ease: Circ.easeIn, }, "<")
.to(".w4", { opacity: 1, delay: 0.2, ease: Circ.easeIn, }, "<")
.to(".w5", { opacity: 1, delay: 0.2, ease: Circ.easeIn, }, "<")
.to(".w6", { opacity: 1, delay: 0.2, ease: Circ.easeIn, }, "<")
.to(".w7", { opacity: 1, delay: 0.2, ease: Circ.easeIn, }, "<")
.to(".w8", { opacity: 1, delay: 0.2, ease: Circ.easeIn, }, "<")
.to(".scroll_4", { opacity: 1, duration: 0.7, })
.from(".main_title", { opacity: 0, top: 0, })
.from(".article_1", { opacity: 0, duration: 0.8, })
.from(".article_2", { opacity: 0, duration: 0.8, })
.from(".article_3", { opacity: 0, duration: 0.8, });