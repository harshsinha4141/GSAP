gsap.from("#page2 img", {
    // opacity: 0,
    duration: 1,
    width: "0%",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 0%",
        markers: true,
        scrub: 2,
        pin: true,
    }
})

var cursor=document.querySelector("#cursor");
var image=document.querySelector("#image");
var main=document.querySelector("#main")
window.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.1,
    })
})

image.addEventListener("mouseenter",function(){
    cursor.innerHTML="View More"
    gsap.to(cursor,{
        scale:4,
        backgroundColor:"red"
    })
})

image.addEventListener("mouseleave",function(){
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#000"
    })
})