let gallery=document.querySelector('.hero_gallery');
let galleryWrapper=document.querySelector('.hero_gallery_wrapper');
let galleryImages=gallery.querySelectorAll('.hero_gallery_image');


let galleryWidth=galleryWrapper.getBoundingClientRect().width; //넓이값 뽑아내기
//console.log(galleryWidth)

let scroll={
    current:0,
    target:0,
    ease:0.05,
    speed:0.25,
    limit:galleryWidth - window.innerWidth
}


let init=()=>{
    onResize();
}  

//반응형 맞출때 계산을 맞추기위해 설정
let onResize=()=>{
    galleryWidth=galleryWrapper.getBoundingClientRect().width;
    scroll.limit=galleryWidth - window.innerWidth;
}


let onscroll=function(e){
    let speed=e.deltaY; //마우스휠을 올릴때와 내릴때 값
    //console.log(speed)
    scroll.target += speed * scroll.speed; //스크롤 속도조절
    return speed;
}

function clamp(min,max,number){
    return Math.min(Math.max(number,min),max);
}

function lerp(p1,p2,p3){
    return p1+(p2 - p1)*p3;
}
let update=()=>{
    scroll.target=clamp(0,scroll.limit,scroll.target)
    //console.log(scroll.target)
    scroll.current=lerp(scroll.current,scroll.target,scroll.ease)
    scroll.current=parseFloat(scroll.current.toFixed(2)) //parseFloat 실수
    console.log(scroll.current)


    galleryWrapper.style.transform=`translate3d(${-scroll.current}px,0,0)`


    window.requestAnimationFrame(update)
}

update ();


window.addEventListener('resize', onResize)
window.addEventListener('wheel', onscroll)
window.addEventListener('load', ()=>{
    init();
})