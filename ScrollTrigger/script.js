// gsap.from("#page1 #box",{
//     scale:0,
//     duration: 2,
//     delay: 1,
//     rotate: 360
// })

// gsap.from("#page2 #box",{
//     scale:0,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     // scrollTrigger: "#page2 #box", // Trigger animation when the box enters the viewport
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%"
//     }
// })

// gsap.from("#page2 h1",{
//     scale: 0,
//     opacity: 0,
//     duration: 2,
//     x:500,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         // scrub: true // Smoothly animate as you scroll
//     }
// })

// gsap.from("#page2 h2",{
//     scale: 0,
//     opacity: 0,
//     duration: 2,
//     x:-500,
//     scrollTrigger: {
//         trigger: "#page2 h2",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         // scrub: true // Smoothly animate as you scroll
//     }
// })

// gsap.from("#page2 #box",{
//     scale: 0,
//     opacity: 0,
//     duration: 1,
//     rotate: 720,
//     // y: -100,
//     scrollTrigger:{
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end: "top 30%",
//         scrub: 3, // Smoothly animate as you scroll
//         // pin: true, // Pin the element during the scroll
//     }
// })

gsap.to("#page2 h1",{
    transform: "translateX(-180%)",
    // duration: 5,
    scrollTrigger:{
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true, // Pin the element during the scroll
    }
})