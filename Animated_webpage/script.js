function page1Animation(){
    var tl=gsap.timeline();

    tl.from("nav h1",{
        y:-30,
        opacity:0,
        duration:0.8,
        delay:1
    })

    tl.from("nav h4,nav button",{
        y:-30,
        opacity:0,
        duration:0.7,
        stagger:0.15,
    })

    tl.from(".center-part1 h1",{
        x:-300,
        opacity:0,
        duration:0.6,
    })

    tl.from(".center-part1 p",{
        x:-300,
        opacity:0,
        duration:0.4,
    })

    tl.from(".center-part1 button",{
        opacity:0,
        duration:0.4,
    })

    tl.from(".center-part2 img",{
        opacity:0,
        x:300,
        duration:0.5,
    },"-=1")

    tl.from(".section1-bottom img",{
        opacity:0,
        duration:0.5,
        stagger:0.3,
        y:30,
    })
}

function page2Animation(){
    var tl2=gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            // markers: true,
            start:"top 50%",
            end:"top 0%",
            scrub: 2,
        }
    })

    tl2.from("#services",{
        y:30,
        opacity:0,
    })

    tl2.from(".elem.left.line1",{
        x:-300,
        opacity:0,
        duration: 0.3,
    },"anim1")

    tl2.from(".elem.right.line1",{
        x:300,
        opacity:0,
        duration: 0.3,
    },"anim1")

    tl2.from(".elem.left.line2",{
        x:-300,
        opacity:0,
        duration: 0.3,
    },"anim2")

    tl2.from(".elem.right.line2",{
        x:300,
        opacity:0,
        duartion: 0.3,
    },"anim2")
}

page1Animation();
page2Animation();