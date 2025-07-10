var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image")

main.addEventListener("mousemove",function(dets){
    // console.log("event performed")
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration: 0.1,
        // ease: "elastic.out(0.3)",
    })
})

imageDiv.addEventListener("mouseenter",function(){
    // console.log("image clicked")
    cursor.innerHTML="View More"
    gsap.to(cursor,{
        scale: 4,
        backgroundColor: "#ffffff8a",
    })
})

imageDiv.addEventListener("mouseleave",function(){
    // console.log("image clicked")
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale: 1,
        backgroundColor: "#fff"
    })
})