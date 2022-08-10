gsap.registerPlugin(ScrollTrigger);
gsap.defaults({
    ease: "none",
});

const slides = document.querySelectorAll(".slide");
let scrollYpos;
window.addEventListener("scroll", function() {
    scrollYpos = window.scrollY;
    // console.log(scrollYpos);
    if(scrollYpos > 250) {
        slides.forEach(element => {
            element.classList.add("on");
            console.log("D");
        });
    }
    else {
        slides.forEach(element => {
            element.classList.remove("on");
        });
    }

    // if(scrollYpos > 4000) {
    //     document.querySelector(".scroll_1").style.opacity = 0;
    // } else {
    //     document.querySelector(".scroll_1").style.opacity = 1;
    // }
});

let li2 = document.querySelector(".li2").offsetWidth;
let li3 = document.querySelector(".li3").offsetWidth;

// gsap.to(".middle", {
//     scrollTrigger: {
//         trigger: "section",
//         // start: "top top",
//         markers: true,
//         end: "+=4000",
//         scrub: true,
//         pin: true,
//     },
//     scale: 0,
// });

const scroll = gsap.timeline({
    scrollTrigger: {
        trigger: "section",
        start: "top top",
        end: "+=15000",
        scrub: true,
        pin: true,
        markers: true,
    }
});

scroll.from(".slide_L", {
    scrollTrigger: {
        trigger: "scroll_1",
        start: "100",
        end: "400",
        scrub: true,
        pin: true,
    }, left: "80%", opacity: 0, })
.from(".slide_R", {
    scrollTrigger: {
        trigger: "scroll_1",
        start: "100",
        end: "400",
        scrub: true,
        pin: true,
    }, left: "-80%", opacity: 0, }, "<")
.to(".middle", { scale: 0, duration: 3, }, "<")
.to(".scroll_2", { opacity: 1, })
.to(".word1", { y: 30, opacity: 1, })
.to(".word2", { y: 30, opacity: 1, })
.to(".word3", { y: 30, opacity: 1, })
.to(".word4", { y: 60, opacity: 1, })
.to(".word5", { y: 60, opacity: 1, })
.to(".word6", { y: 60, opacity: 1, })
.to(".word7", { y: 60, opacity: 1, })
.to(".word8", { y: 90, opacity: 1, })
.to(".word9", { y: 90, opacity: 1, })
.to(".word10", { y: 90, opacity: 1, })
.to(".line", { width: "100%", })
.to("li", { y: -103.2, })
.to(".word9", { width: `${li2}`, }, "<")
.to("li", { y: 0, })
.to(".word9", { width: `${li3}`, }, "<")
.to(".scroll_3", { opacity: 1, })
.to(".container", { bottom: 0, duration: 4, })
.to(".w1", { opacity: 1, ease: Circ.easeIn, }, "<")
.to(".w2", { opacity: 1, delay: 0.1, ease: Circ.easeIn, }, "<")
.to(".w3", { opacity: 1, delay: 0.1, ease: Circ.easeIn, }, "<")
.to(".w4", { opacity: 1, delay: 0.1, ease: Circ.easeIn, }, "<")
.to(".w5", { opacity: 1, delay: 0.1, ease: Circ.easeIn, }, "<")
.to(".w6", { opacity: 1, delay: 0.1, ease: Circ.easeIn, }, "<")
.to(".w7", { opacity: 1, delay: 0.1, ease: Circ.easeIn, }, "<")
.to(".w8", { opacity: 1, delay: 0.1, ease: Circ.easeIn, }, "<");

// scroll1.from(".slide_L", {
//     scrollTrigger: {
//         trigger: "scroll_1",
//         start: "100",
//         end: "400",
//         scrub: true,
//         pin: true,
//     }, left: "80%", opacity: 0, })
// .from(".slide_R", {
//     scrollTrigger: {
//         trigger: "scroll_1",
//         start: "100",
//         end: "400",
//         scrub: true,
//         pin: true,
//     }, left: "-80%", opacity: 0, }, "<")
// .to(".middle", { scale: 0, duration: 3, }, "<");

// scrollTrigger.create({
//     animation: scroll1,
//     trigger: "section",
//     start: "top top",
//     end: "+=4000",
//     scrub: true,
//     pin: true,
// });

// scroll2.to(".scroll_2", { opacity: 1, })
// .to(".word1", { y: 30, opacity: 1, })
// .to(".word2", { y: 30, opacity: 1, })
// .to(".word3", { y: 30, opacity: 1, })
// .to(".word4", { y: 60, opacity: 1, })
// .to(".word5", { y: 60, opacity: 1, })
// .to(".word6", { y: 60, opacity: 1, })
// .to(".word7", { y: 60, opacity: 1, })
// .to(".word8", { y: 90, opacity: 1, })
// .to(".word9", { y: 90, opacity: 1, })
// .to(".word10", { y: 90, opacity: 1, })
// .to(".line", { width: "100%", })
// .to("li", { y: -103.2, })
// .to(".word9", { width: `${li2}`, }, "<")
// .to("li", { y: 0, })
// .to(".word9", { width: `${li3}`, }, "<")

// scrollTrigger.create({
//     animation: scroll2,
//     trigger: ".scroll_1",
//     start: "top top",
//     end: "+=4000",
//     scrub: true,
//     pin: true,
// });

// scroll3.to(".scroll_3", { opacity: 1, })
// .to(".container", { bottom: 0, duration: 3, })
// .to(".w1", { opacity: 1, ease: Circ.easeIn, }, "<")
// .to(".w2", { opacity: 1, delay: 0.1, ease: Circ.easeIn, }, "<")
// .to(".w3", { opacity: 1, delay: 0.1, ease: Circ.easeIn, }, "<")
// .to(".w4", { opacity: 1, delay: 0.1, ease: Circ.easeIn, }, "<")
// .to(".w5", { opacity: 1, delay: 0.1, ease: Circ.easeIn, }, "<")
// .to(".w6", { opacity: 1, delay: 0.1, ease: Circ.easeIn, }, "<")
// .to(".w7", { opacity: 1, delay: 0.1, ease: Circ.easeIn, }, "<")
// .to(".w8", { opacity: 1, delay: 0.1, ease: Circ.easeIn, }, "<");

// scrollTrigger.create({
//     animation: scroll3,
//     trigger: ".scroll_2",
//     start: "top top",
//     end: "+=4000",
//     scrub: true,
//     pin: true,
// });