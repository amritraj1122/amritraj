function navbar(){
    let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.nav .nav-part2 a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav .nav-part2 a[href*=' + id + ']').classList.add('active');
            }); 
        }
    });
}
}
navbar();

gsap.from(".circle-spin",{
    rotate:360,
    repeat:Infinity,
    duration:1.5,
    delay:.5,
    yoyo:true
})

var tl = gsap.timeline();

function home(){
    gsap.from(".nav-part2 a",{
        y: -70,
        duration:1,
        opacity:0,
        stagger:.8
    })
    tl.from(".cont-left h1",{
        x:-500,
        opacity:0,
        duration:1,
        delay:1
    })
    tl.from(".cont-left h2",{
        x:500,
        opacity:0,
        duration:1,
    
    })
    tl.from(".cont-left p",{
        scale:0,
        opacity:0,
        duration:1,
    })
    tl.from(".btn-box",{
        opacity:0,
        x:-100
    })
    gsap.from(".social a",{
        scale:-2,
        opacity:0,
        duration:2,
        delay:2,
        stagger:1

    })
}

function about(){
    
tl.from("#about .heading",{
    x:-500,
    delay:1,
    duration:1.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#about .heading",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"buttom 0%",
        scrub:2
    }
})
tl.from(".about-content",{
    x:100,
    delay:1.5,
    duration:1.5,
    opacity:0,
    stagger:1,
    scrollTrigger:{
        trigger:"#about .heading",
        scroller:"body",
        // markers:true,
        start:"top 20%",
        end:"buttom -10%",
        scrub:3
    }
})


}

function education(){
    
tl.from("#education .heading",{
    x:-500,
    delay:1,
    duration:1.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#about .heading",
        scroller:"body",
        // markers:true,
        start:"top -40%",
        end:"buttom -60%",
        scrub:2
    }
})
tl.from(".education-content, .content1",{
    y:-100,x:-50,
    opacity:0,
    stagger:.5,
    scrollTrigger:{
        trigger:".education-row, .education-colom",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 20%",
        scrub:2
    }
})

}
 
function skill(){
    
tl.from("#skill .heading",{
    x:-500,
    delay:1,
    duration:1.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#skill .heading",
        scroller:"body",
        // markers:true,
        start:"top 450",
        end:"buttom 0",
        scrub:2
    }
})
tl.from(".skill-box, .skill-content",{
    y:-100,x:-50,
    opacity:0,
    stagger:.5,
    scrollTrigger:{
        trigger:".skill-box, .skill-content",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:2
    }
})

}

function contact(){
    tl.from("#contact .heading",{
        x:-500,
        duration:1.5,
        opacity:0,
        scrollTrigger:{
            trigger:"#contact .heading",
            scroller:"body",
            // markers:true,
            start:"top 450",
            end:"buttom 0",
            scrub:2
        }
    })
    
    tl.from(".input-box, .text-area",{
        scale:0,
        rotate:180,
        duration:1.5,
        opacity:0,
        stagger:.5,
        scrollTrigger:{
            trigger:".input-box, .text-area",
            scroller:"body",
            // markers:true,
            start:"top 60%",
            end:"top 40%",
            scrub:2
        }
        
    })
}
home();
about();
education();
skill();
contact();

var circle = document.querySelector("#circle");
window.addEventListener("mousemove", function(dets){
    gsap.to("#circle",{
        x:dets.clientX,
        y:dets.clientY,
        ease:Expo,
        duration:.2
    })
})

