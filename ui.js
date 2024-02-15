let colour = document.querySelector(".dia");
let colour1 = document.querySelector(".dia1");
let colour2 = document.querySelector(".dia2");
let colour3 = document.querySelector(".dia3");
let colour4 = document.querySelector(".dia4");

let hide = document.querySelector(".hide");
let hide1 = document.querySelector(".hide1");
let hide2 = document.querySelector(".hide2");
let hide3 = document.querySelector(".hide3");
let hide4 = document.querySelector(".hide4");

let p = document.querySelector(".s1");
let p1 = document.querySelector(".s2");
let p2 = document.querySelector(".s3");
let p3 = document.querySelector(".s4");
let p4 = document.querySelector(".s5");


let expand = document.querySelector(".dia12");
let expand1 = document.querySelector(".dia13");
let expand2 = document.querySelector(".dia14");
let expand3 = document.querySelector(".dia15");


let hide12 = document.querySelector(".hide12");
let hide13 = document.querySelector(".hide13");
let hide14 = document.querySelector(".hide14");
let hide15 = document.querySelector(".hide15");


let s21 = document.querySelector(".s21");
let s22 = document.querySelector(".s22");
let s23 = document.querySelector(".s23");
let s24 = document.querySelector(".s24");


let page1 = document.querySelector(".page1");
let page2 = document.querySelector(".page2");
let page3 = document.querySelector(".page3");
let page4 = document.querySelector(".page4");
let page5 = document.querySelector(".page5");


let rotater = document.querySelector(".roter");
let body = document.querySelector("body");
let base = document.querySelector(".basic")

body.addEventListener("mousemove",function(dets){
     rotater.style.left = dets.x + "px";
     rotater.style.top = dets.y + "px";
})


colour.addEventListener("mouseenter",function(){
    colour.style.backgroundColor="red";
    hide.style.display="block";
    p.innerHTML="-";
})
colour.addEventListener("mouseleave",function(){
    colour.style.backgroundColor="transparent";
    hide.style.display="none";
    p.innerHTML="+";
})
colour1.addEventListener("mouseenter",function(){
    colour1.style.backgroundColor="red";
    hide1.style.display="block";
    p1.innerHTML="-";
})
colour1.addEventListener("mouseleave",function(){
    colour1.style.backgroundColor="transparent";
    hide1.style.display="none";
    p1.innerHTML="+";
})
colour2.addEventListener("mouseenter",function(){
    colour2.style.backgroundColor="red";
    hide2.style.display="block";
    p2.innerHTML="-";
})
colour2.addEventListener("mouseleave",function(){
    colour2.style.backgroundColor="transparent";
    hide2.style.display="none";
    p2.innerHTML="+";
})
colour3.addEventListener("mouseenter",function(){
    colour3.style.backgroundColor="red";
    hide3.style.display="block";
    p3.innerHTML="-";
})
colour3.addEventListener("mouseleave",function(){
    colour3.style.backgroundColor="transparent";
    hide3.style.display="none";
    p3.innerHTML="+";
})
colour4.addEventListener("mouseenter",function(){
    colour4.style.backgroundColor="red";
    hide4.style.display="block";
    p4.innerHTML="-";
})
colour4.addEventListener("mouseleave",function(){
    colour4.style.backgroundColor="transparent";
    hide4.style.display="none";
    p4.innerHTML="+";
})


expand.addEventListener("mouseenter",function(){
    expand.style.backgroundColor="red";
    hide12.style.display="block";
    s21.innerHTML="-";
})
expand.addEventListener("mouseleave",function(){
    expand.style.backgroundColor="transparent";
    hide12.style.display="none";
    s21.innerHTML="+";
})
expand1.addEventListener("mouseenter",function(){
    expand1.style.backgroundColor="red";
    hide13.style.display="block";
    s22.innerHTML="-";
})
expand1.addEventListener("mouseleave",function(){
    expand1.style.backgroundColor="transparent";
    hide13.style.display="none";
    s22.innerHTML="+";
})
expand2.addEventListener("mouseenter",function(){
    expand2.style.backgroundColor="red";
    hide14.style.display="block";
    s23.innerHTML="-";
})
expand2.addEventListener("mouseleave",function(){
    expand2.style.backgroundColor="transparent";
    hide14.style.display="none";
    s23.innerHTML="+";
})
expand3.addEventListener("mouseenter",function(){
    expand3.style.backgroundColor="red";
    hide15.style.display="block";
    s24.innerHTML="-";
})
expand3.addEventListener("mouseleave",function(){
    expand3.style.backgroundColor="transparent";
    hide15.style.display="none";
    s24.innerHTML="+";
})

let samay = document.querySelector(".blinker p");
 let d = new Date();

 
gsap.from(".one1 h2",{
   opacity:0,
   duration:2,
   y:50,
   scrollTrigger:{
    trigger:".one1 h2",
    scroller:"body",
   }
})

gsap.from(".boxi",{
    x:200,
    duration:0.5,
    scrollTrigger:{
     trigger:".boxi",
     scroller:"body",
    }
 })

 gsap.from(".trial1",{
    x:200,
    duration:2,
    scrollTrigger:{
     trigger:".trial1",
     scroller:"body",
    }
 })

 gsap.from(".two1 h2",{
    opacity:0,
    duration:1,
    scrollTrigger:{
     trigger:".two h1",
     scroller:"body",
    }
 })
gsap.from(".roter",{
  rotate:360,
  duration:5.3,
  repeat:-1,
 })
 gsap.from(".r1",{
  scale:1,
  duration:1,
  repeat:-1,
 })
 gsap.from(".r2",{
    scale:1,
    duration:1,
    repeat:-1,
   })
   gsap.from(".r3",{
    scale:1,
    duration:1,
    repeat:-1,
   })
   gsap.from(".r4",{
    scale:1,
    duration:1,
    repeat:-1,
   })