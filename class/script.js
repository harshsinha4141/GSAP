var tl=gsap.timeline()
tl.from("#left",{
    y:-30,
    duration: 1,
    delay: 0.5,
    opacity: 0,
})

tl.from("#right h4",{
    y:-30,
    duration: 1,
    opacity: 0,
    stagger: 0.2,
})
// tl.from("#main h2",{
//     y:200,
//     scale:3,
//     Duration:1,
//     opacity:0,
// })

var h2=document.querySelector("#intro h2");
var h2Text=h2.textContent;

var splittedText=h2Text.split("");
var clutter="";
var halfValue=Math.floor(splittedText.length/2);
splittedText.forEach(function(elem,idx){
    if(idx<halfValue){
        clutter+=`<span class="leftText">${elem}</span>`
    }
    else{
        clutter+=`<span class="rightText">${elem}</span>`
    }
})
h2.innerHTML=clutter;
gsap.from(".leftText",{
    y: 50,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.15,
    opacity: 0,
})

gsap.from(".rightText",{
    y: 50,
    duration: 0.8,
    delay: 0.5,
    stagger: -0.15,
    opacity: 0,
})

tl.from("#heading",{
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.8,
})

tl.from("#discount",{
    x: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.8,
})

tl.from("footer",{
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.8,
})