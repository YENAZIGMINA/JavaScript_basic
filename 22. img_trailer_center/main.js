let main=document.querySelector('#main');
let hero=document.querySelector('.hero');
let heroTitle=document.querySelectorAll('.hero_title>.ofh>h1');
let images=[
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
    "img/06.jpg",
    "img/07.jpg",
    "img/08.jpg",
    "img/09.jpg",
];
let settings={
    isEnabled:false,
    count:1,
    time:50
} // isEnabled --> 기능이 활성화되었는지? /동작을 제어하거나 설정값을 참조

gsap.set(heroTitle, {x:"-105%", opacity:0});
const initHero=function(){
    gsap.set(heroTitle, {x:"-105%", opacity:0}); // gsap 복붙 / 글자 숨기기
    showHero();
}

const showHero=()=>{
    gsap.to(heroTitle, {duration: 1.75, x:0, opacity:1, stagger:0.2}); 
    //글자 나타남 / stagger:글자 하나씩 나타나게 (gsap에서 검색함)
}


//-------------------------------------------------------
function calcIndex(length){
    settings.count++;
    if(settings.count == length){
        settings.count=0;
    }
    return settings.count;
}


function animateImages(e){
    //이미지태그 만들기
    let image=document.createElement("img");  //❗createElement("img") : <img src="">가 만들어짐
    let imageSize=50;
    let countIndex=calcIndex(images.length);
    //console.log(image)

    image.classList.add('hero_media');
    image.setAttribute("src", images[countIndex]); // ❗ setAttribute: ~어떤 속성을 넣어라
    image.style.width=`${imageSize}rem`;
    image.style.height=`${imageSize}rem`;
    image.style.top=e.clientY - (imageSize * 5)/2 + "px";
    image.style.left=e.clientX - (imageSize * 5)/2 + "px";

    //❗ A.appendChild(B);  --> A의 자식으로 B가 첨부된다.
    hero.appendChild(image);
    let randomDeg=Math.floor((Math.random() * 15)); 
    //Math.random은 0부터 시작해서 1전까지의 소수점 숫자
    //Math.floor는 소수점 버림
    //console.log(randomDeg)
    //❗ setTimeout(function(){},시간) --> 시간이 지나면 함수실행
    setTimeout(function(){
        image.style.transform="scale(1)";
        image.style.transform=`rotate(${randomDeg}deg)`;
    },50)

    setTimeout(function(){
        image.style.transform="scale(0.25)";
        image.style.filter="blur(10px)";
        image.style.opacity=0;
    },1000)

    setTimeout(function(){
        //appendChild로 추가한 자식요소 없애기
        hero.removeChild(image);
    },2000)
}

window.addEventListener("mousemove",function(e){
    //사진 나오는 지연시간 주기
    //!settings.isEnabled --> false가 아니라면~ (위 setting참고)
    if(!settings.isEnabled){
        settings.isEnabled=true;

        setTimeout(function(){
            settings.isEnabled=false;
        },settings.time)  //settings.time => 그냥 시간만 작성해도됨
    }
    animateImages(e);
})
//--------------------------------------------------------



//문서안의 모든 요소 및 이미지, 영상 등 자료가 모두 load되면 함수 실행되어라
window.onload=()=>{
    window.addEventListener("scroll",function(){
        let scrollT=window.pageYOffset;
        if(scrollT>=main.offsetTop - 400) {
            console.log("실행");
            initHero();
        }
    });
}