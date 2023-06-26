//마우스 커서 이미지에 위치
window.addEventListener('mousemove',function(e){
    document.querySelector('#slidePhoto').style.top=`${e.clientY}px`;
    document.querySelector('#slidePhoto').style.left=`${e.clientX}px`;
    document.querySelector('#slidePhoto').style.transform=`translate(${-e.clientX * 0.3}px, ${-e.clientY * 0.3}px)`;
})


document.querySelector('#chainn').addEventListener('mousemove',function(){
    document.querySelector('#slidePhotos').style.marginTop="0%";
    document.querySelector('#chainn h1').style.color="#fff"; //마우스 올리면 색깔 바뀜
})
document.querySelector('#chainn').addEventListener('mouseleave',function(){
    document.querySelector('#chainn h1').style.color="blue"; // 마우스 떠나면 원래색상으로
})


document.querySelector('#aty').addEventListener('mousemove',function(){
    document.querySelector('#slidePhotos').style.marginTop="-120%";
    document.querySelector('#aty h1').style.color="#fff";
})
document.querySelector('#aty').addEventListener('mouseleave',function(){
    document.querySelector('#aty h1').style.color="blue";
})

document.querySelector('#mic').addEventListener('mousemove',function(){
    document.querySelector('#slidePhotos').style.marginTop="-240%";
    document.querySelector('#mic h1').style.color="#fff";
})
document.querySelector('#mic').addEventListener('mouseleave',function(){
    document.querySelector('#mic h1').style.color="blue";
})


document.querySelector('#tapso').addEventListener('mousemove',function(){
    document.querySelector('#slidePhotos').style.marginTop="-360%";
    document.querySelector('#tapso h1').style.color="#fff";
})
document.querySelector('#mic').addEventListener('mouseleave',function(){
    document.querySelector('#tapso h1').style.color="blue";
})




document.querySelector('#eff').addEventListener('mousemove',function(){
    document.querySelector('#slidePhoto').style.display="initial";
    document.querySelector('#slidePhoto').style.opacity="1";
})
document.querySelector('#eff').addEventListener('mouseleave',function(){
    document.querySelector('#slidePhoto').style.display="none";
    document.querySelector('#slidePhoto').style.opacity="0";
})