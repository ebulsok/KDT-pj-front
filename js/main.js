gsap.registerPlugin(ScrollTrigger);
gsap.defaults({
    ease: "none",
});

const slides = document.querySelectorAll(".slide");
let scrollYpos;
window.addEventListener("scroll", function() {
    scrollYpos = window.scrollY;
    console.log(scrollYpos);
    if(scrollYpos > 200) {
        slides.forEach(element => {
            element.classList.add("on");
        });
    }
    else {
        slides.forEach(element => {
            element.classList.remove("on");
        });
    }

    if(scrollYpos > 4000) {
        document.querySelector(".scroll_1").style.opacity = 0;
    } else {
        document.querySelector(".scroll_1").style.opacity = 1;
    }
});

gsap.to(".middle", {
    scrollTrigger: {
        trigger: "section",
        // start: "top top",
        markers: true,
        end: "+=4000",
        scrub: true,
        pin: true,
    },
    scale: 0,
});

// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: "section",
//         start: "top top",
//         end: "+=4000",
//         scrub: true,
//         pin: true,
//     }
// });

// tl.to(".middle", { scale: 0, })
// .to(".slide", { opacity: 0, });