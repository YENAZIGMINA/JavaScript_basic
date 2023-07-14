let docWidth=window.innerWidth; //화면의 넓이값
let wrap=document.querySelector('.newspaper');
let imgs=document.querySelectorAll('.newspaperWrap .hb');
let slideWidth=wrap.clientWidth; //자기자신(wrap)의 넓이값


wrap.addEventListener('mousemove',(e)=>{
    let mouseX=e.clientX;
    console.log(mouseX)
    let offset=(mouseX/docWidth)*slideWidth - mouseX/2;

    for(let i=0; i<imgs.length; i++){
        imgs[i].style.transform=`translate(${-offset}px)`;
    }
})

wrap.addEventListener('mouseleave',()=>{
    for(let i=0; i<imgs.length; i++){
        imgs[i].style.transform=`translate(0px)`;
        imgs[i].style.transition='0.5s';
    }
})