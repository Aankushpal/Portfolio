function loco(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

loco()


gsap.from("#page1 #h1 h1", {
    y: "25vw",
    opacity: 0,
})

gsap.from("#page1 #h2 h2", {
  y: "25vw",
  opacity: 0,
})

gsap.from("#page1 #span h2", {
    y: "25vw",
    opacity: 0,
})

document.querySelector("#page1").addEventListener('mouseenter', function(){
  document.querySelector("body").style.backgroundColor = "#111111"
});

document.querySelector("#page1").addEventListener('mouseleave', function(){
  document.querySelector("body").style.backgroundColor =  "#DAD6CA"
});

document.querySelector("#page2").addEventListener('mouseenter', function(){
  document.querySelector("body").style.backgroundColor = "#DAD6CA"
});

document.querySelector("#page2").addEventListener('mouseleave', function(){
  document.querySelector("body").style.backgroundColor = "#111111"
});


document.querySelector("#page3").addEventListener('mouseenter', function(){
  document.querySelector("body").style.backgroundColor = "#DAD6CA"
});

document.querySelector("#page3").addEventListener('mouseleave', function(){
  document.querySelector("body").style.backgroundColor = "#111111"
});


gsap.to("#page1", {
  y: "80%",
  borderRadius: "10vw",
  scale: 0,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    // markers: true,
    start: "top -15%",
    end: "top -100%",
    scrub: 3
  }
})


gsap.from("#page2", {
  rotate: "15deg",
  y: "15vw",
  x: "-10vw",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    // markers: true,
    start: "top 100%",
    end: "top top",
    scrub: 3,
  }
})

gsap.to("#page2", {
  y: "80%",
  borderRadius: "10vw",
  scale: 0,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    // markers: true,
    start: "top -60%",
    end: "top -100%",
    scrub: 3
  }
})


gsap.from("#page2 #h1 h1", {
  y: "55vw",
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    // markers: true,
    start: "top 65%",
    end: "top 64%",
    scrub: 3
  }
})


gsap.from("#page2 #span #man1", {
  y: "55vw",
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    // markers: true,
    start: "top 30%",
    end: "top 25%",
    scrub: 3
  }
})


gsap.from("#page2 #span h1", {
  y: "55vw",
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    // markers: true,
    start: "top 20%",
    end: "top 15%",
    scrub: 3
  }
})

gsap.to("#page3", {
  y: "80%",
  borderRadius: "10vw",
  scale: 0,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    // markers: true,
    start: "top -300%",
    end: "top -400%",
    scrub: 3
  }
})

gsap.to("#page3 svg", {
  transform: "rotate(-280deg)",
  scrollTrigger:{
    trigger: "#page3",
    scroller: "#main",
    start:"top 50%",
    end: "top -60%",
    scrub: 2,
    // markers: true
  }
})

gsap.from("#page3 #h1 h1", {
    y: "20vw",
    opacity: 0,
    scrollTrigger:{
      trigger: "#page3",
      scroller: "#main",
      start:"top 80%",
      end: "top 75%",
      scrub: 2,
      // markers: true
    }
})

gsap.from("#page3 #span h1", {
  y: "20vw",
  opacity: 0,
  scrollTrigger:{
    trigger: "#page3",
    scroller: "#main",
    start:"top 55%",
    end: "top 50%",
    scrub: 2,
    // markers: true
  }
})

gsap.to("#page4 svg", {
  transform: "rotate(-280deg)",
  scrollTrigger:{
    trigger: "#page4",
    scroller: "#main",
    start:"top 70%",
    end: "top -40%",
    scrub: 2,
    // markers: true
  }
})

gsap.from("#page4 #h1 h1", {
  y: "20vw",
  opacity: 0,
  scrollTrigger:{
    trigger: "#page4",
    scroller: "#main",
    start:"top 80%",
    end: "top 75%",
    scrub: 2,
    // markers: true
  }
})

gsap.from("#page4 #span h1", {
y: "20vw",
opacity: 0,
scrollTrigger:{
  trigger: "#page4",
  scroller: "#main",
  start:"top 55%",
  end: "top 50%",
  scrub: 2,
  // markers: true
}
})

gsap.from("#page5 #h1 h1", {
  y: "20vw",
  opacity: 0,
  scrollTrigger:{
    trigger: "#page5",
    scroller: "#main",
    start:"top 80%",
    end: "top 75%",
    scrub: 2,
    // markers: true
  }
})

gsap.from("#page5 #h2 h2", {
y: "20vw",
opacity: 0,
scrollTrigger:{
  trigger: "#page5",
  scroller: "#main",
  start:"top 55%",
  end: "top 50%",
  scrub: 2,
  // markers: true
}
})



function anim1(){
var clip1 = document.querySelector("#prjct #pr1")
var vid1 = document.querySelector("#prjct #pr1 video")
var clip2 = document.querySelector("#prjct #pr2")
var vid2 = document.querySelector("#prjct #pr2 video")
var clip3 = document.querySelector("#prjct #pr3")
var vid3 = document.querySelector("#prjct #pr3 video")
var clip4 = document.querySelector("#page4 #proj1 #vid")
var vid4 = document.querySelector("#page4 #proj1 video")
var clip5 = document.querySelector("#page4 #proj2 #vid")
var vid5 = document.querySelector("#page4 #proj2 video")

clip1.addEventListener("mouseenter", function (e) { 
  vid1.play(); 
}) 

clip1.addEventListener("mouseleave", function (e) { 
  vid1.pause();
  vid1.currentTime = 8;
}) 

clip2.addEventListener("mouseenter", function (e) { 
  vid2.play(); 
}) 

clip2.addEventListener("mouseleave", function (e) { 
  vid2.pause();
  vid2.currentTime = 2;
}) 

clip3.addEventListener("mouseenter", function (e) { 
  vid3.play(); 
}) 

clip3.addEventListener("mouseleave", function (e) { 
  vid3.pause();
  vid3.currentTime = 2;
}) 

clip4.addEventListener("mouseenter", function (e) { 
  vid4.play(); 
}) 

clip4.addEventListener("mouseleave", function (e) { 
  vid4.pause();
  vid4.currentTime = 10;
}) 

clip5.addEventListener("mouseenter", function (e) { 
  vid5.play(); 
}) 

clip5.addEventListener("mouseleave", function (e) { 
  vid5.pause();
  vid5.currentTime = 35;
}) 
} 

function anim2() {
  var crsr1 = document.querySelector("#page3 #prjct #cursor1")
  var crsr2 = document.querySelector("#page3 #prjct #cursor2")
  var crsr3 = document.querySelector("#page3 #prjct #cursor3")
  var crsr4 = document.querySelector("#page4 #proj1 #cursor1")
  var crsr5 = document.querySelector("#page4 #proj2 #cursor2")
  var a1 = document.querySelector("#page3 #prjct .a1")
  var a2 = document.querySelector("#page3 #prjct .a2")
  var a3 = document.querySelector("#page3 #prjct .a3")
  var a4 = document.querySelector("#page4 #proj1 .a1")
  var a5 = document.querySelector("#page4 #proj2 .a2")
  
  a1.addEventListener("mousemove", function(dets){
    crsr1.style.opacity = 1
    crsr1.style.transform = `translate( ${dets.x - 450}px, ${dets.y - 250}px)`
  })
  
  a1.addEventListener("mouseleave", function(){
    crsr1.style.opacity = 0
  })
  
  a2.addEventListener("mousemove", function(dets){
    crsr2.style.opacity = 1
    crsr2.style.transform = `translate( ${dets.x - 200}px, ${dets.y - 300}px)`
  })
  
  a2.addEventListener("mouseleave", function(){
    crsr2.style.opacity = 0
  })
  
  a3.addEventListener("mousemove", function(dets){
    crsr3.style.opacity = 1
    crsr3.style.transform = `translate( ${dets.x - 500}px, ${dets.y - 300}px)`
  })
  
  a3.addEventListener("mouseleave", function(){
    crsr3.style.opacity = 0
  })
  
  a4.addEventListener("mousemove", function(dets){
    crsr4.style.opacity = 1
    crsr4.style.transform = `translate( ${dets.x - 500}px, ${dets.y - 300}px)`
  })
  
  a4.addEventListener("mouseleave", function(){
    crsr4.style.opacity = 0
  })

  a5.addEventListener("mousemove", function(dets){
    crsr5.style.opacity = 1
    crsr5.style.transform = `translate( ${dets.x - 500}px, ${dets.y - 300}px)`
  })
  
  a5.addEventListener("mouseleave", function(){
    crsr5.style.opacity = 0
  })
 
 
}
  
anim1() 
anim2()