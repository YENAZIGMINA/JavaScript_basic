let scrollBody = document.querySelector('.fix_motion'),
    scrollHeight, //스크롤의 높이값
    sectionOffsetTop, //영역(top_box)의 높이값 = fix_motion 머리가 닿는 지점
    sectionScrollTop,
    scrollRealHeight, //실제로 스크롤 해야할 높이
    winScrollTop, //스크롤바의 높이를 담을 변수
    scrollPercent, //스크롤 백분율값
    percent;


let inMobile;
function scrollFuc(){
    setProperty();

    if(inMobile){
        contentInMobile();
    }else{
        contentIn();
    }
}


function setProperty(){
    inMobile=window.innerWidth<=1024?true:false;

    scrollHeight=scrollBody.offsetHeight; //.fix_motion의 높이값 
    sectionOffsetTop=scrollBody.offsetTop; //문서에서 .fix_motion 위까지의 높이값
    scrollRealHeight=scrollHeight - window.innerHeight;
    winScrollTop=pageYOffset;
    sectionScrollTop=winScrollTop - sectionOffsetTop; //내 영역안에서 스크롤 얼마나 내렸는지 확인값
    scrollPercent=sectionScrollTop/scrollRealHeight;
    percent=scrollPercent*100;
    console.log(percent)

    contentIn();
}


function contentIn(){
    let deviceImg=document.querySelectorAll('.slide figure');
    let imgWidth=deviceImg[0].offsetWidth; // figure 하나의 넓이값


    if(percent>=11 && percent<37){
        document.querySelector('.text_box p.text01').classList.add('active')
        imgChange(imgWidth*0)
    }
    if(percent>=37 && percent<62){
        document.querySelector('.text_box p.text02').classList.add('active')
        imgChange(imgWidth*1)
    }
    if(percent>=62 && percent<87){
        document.querySelector('.text_box p.text03').classList.add('active')
        imgChange(imgWidth*2)
    }
    if(percent>=87){
        document.querySelector('.text_box p.text04').classList.add('active')
        imgChange(imgWidth*3)
    }

    if(percent<12){
        document.querySelector('.text_box p.text01').classList.remove('active')
        document.querySelector('.text_box p.text02').classList.remove('active')
        document.querySelector('.text_box p.text03').classList.remove('active')
        document.querySelector('.text_box p.text04').classList.remove('active')
    }
}

function contentInMobile(){
    let deviceImg=document.querySelectorAll('.slide figure');
    let imgWidth=deviceImg[0].offsetWidth; // figure 하나의 넓이값


    if(percent>=11 && percent<37){
        document.querySelector('.text_box p.text01').classList.add('active')
        document.querySelector('.text_box p.text02').classList.remove('active')
        document.querySelector('.text_box p.text03').classList.remove('active')
        document.querySelector('.text_box p.text04').classList.remove('active')
        imgChange(imgWidth*0)
    }
    if(percent>=37 && percent<62){
        document.querySelector('.text_box p.text02').classList.add('active')
        document.querySelector('.text_box p.text01').classList.remove('active')
        document.querySelector('.text_box p.text03').classList.remove('active')
        document.querySelector('.text_box p.text04').classList.remove('active')
        imgChange(imgWidth*1)
    }
    if(percent>=62 && percent<87){
        document.querySelector('.text_box p.text03').classList.add('active')
        document.querySelector('.text_box p.text01').classList.remove('active')
        document.querySelector('.text_box p.text02').classList.remove('active')
        document.querySelector('.text_box p.text04').classList.remove('active')
        imgChange(imgWidth*2)
    }
    if(percent>=87){
        document.querySelector('.text_box p.text04').classList.add('active')
        document.querySelector('.text_box p.text01').classList.remove('active')
        document.querySelector('.text_box p.text02').classList.remove('active')
        document.querySelector('.text_box p.text03').classList.remove('active')
        imgChange(imgWidth*3)
    }

}


function imgChange(moveX){
    let img=document.querySelector('.slide_wrap .slide');
    img.style.transform=`translateX(${-moveX}px)`
}




window.addEventListener('scroll',function(){
    scrollFuc();
})
window.addEventListener('resize',function(){
    scrollFuc();
})

scrollFuc();