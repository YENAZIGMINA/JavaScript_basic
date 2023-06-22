let imgClick=document.getElementById('imgClick'); //마우스 따라 이동하는 역할
let myImage=document.querySelector('#myImage'); //이미지 바뀌는 역할
let main=document.querySelector('#main'); //➰main 영역안에서만 이미지 움직이도록 만듦
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
let mousePos={x:0, y:0}; //객체
let currentIndex=0;
let changeI=false;


// 
function changeImage(e){
    if(changeI){
        return;
    }

    changeI=true; // 처음엔 false였다가 여기서 true로 바뀜


    let currentImage=images[currentIndex];
    myImage.src=currentImage;
    currentIndex++;

    if(currentIndex>=images.length){
        currentIndex=0;
    }

//✔ 0.5초 뒤에 이미지가 하나씩 바뀜 ==> ❗이게 없으면 사진이 와라락 바껴서 이거 막기위해!
    //setInterval(할일,시간) => 시간(1초)마다 할 일
    //setTimeout(할일,시간) => 1초뒤에 할 일 (1번 실행)
    setTimeout(function(){
        changeI=false;
    },500) //0.5s 뒤에 할일 실행
}

myImage.addEventListener("mousemove",changeImage);



// ✔ 마우스 옮기면 사진이동
// (➰전체화면에서 움직이고 싶으면 window, main영역안에서 하고 싶으면 main)
window.addEventListener("mousemove",function(e){
    //e.clientX : 현재화면에서 X축의 값 추출
    //e.clientY : 현재화면에서 Y축의 값 추출

    //객체를 부를때 (.x) 아래처럼
    mousePos.x=-(e.clientX/window.innerWidth) * 30; //음수는 반대방향
    mousePos.y=(e.clientY/window.innerHeight) * 30;
    //console.log(e.clientX,e.clientY) -> 마우스위치 값이 받아지는지 확인
    imgClick.style.transform=`translateY(${mousePos.y}px) translateX(${mousePos.x}px)`;
})