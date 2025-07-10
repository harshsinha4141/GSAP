var initialPath =`M 10 100 Q 500 100 990 100`

var finalPath = `M 10 100 Q 500 100 990 100`

var string=document.querySelector("#string")

// string.addEventListener("mouseenter",function(){
//     console.log("entered");
// })

// string.addEventListener("mouseleave",function(){
//     console.log("leaved");
// })

string.addEventListener("mousemove",function(dets){
    // console.log("mouseover");
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    console.log(dets.x);
    gsap.to("svg path",{
        attr: {d:path},
        duration: 0.2,
        ease: "power3.out"
    })
})

string.addEventListener("mouseleave",function(dets){
    gsap.to("svg path", {
        attr: {d:finalPath},
        duration: 1.5,
        ease: "elastic.out(1, 0.2)"
    })
})