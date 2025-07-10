// var h1=document.querySelector("h1");
// console.log(h1);

// var h1Text=h1.textContent;
// console.log(h1Text);

function breakTheText(){
    var h1=document.querySelector("h1");
    var h1Text=h1.textContent;
    var splittedText=h1Text.split("");
    // console.log(splittedText);

    var clutter=""
    var halfValue = Math.floor(splittedText.length / 2);
    splittedText.forEach(function(e,idx){
        if(idx<halfValue){
            clutter+= `<span class="left">${e}</span>`
        }
        else{
            clutter+= `<span class="right">${e}</span>`
        }
    })

    // console.log(clutter);
    h1.innerHTML = clutter;
}

breakTheText();

gsap.from(".left", {
    y: 50,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.15,
    opacity: 0,
})

gsap.from(".right", {
    y: 80,
    duration: 0.6,
    delay: 0.5,
    stagger: -0.15,
    opacity: 0,
})