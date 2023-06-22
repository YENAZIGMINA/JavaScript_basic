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

// ✔ 클릭하면 배열에 넣은 이미지대로 변경
myImage.addEventListener("click",function(){
    let currentImage=images[currentIndex];
    myImage.src=currentImage; //번호에 해당하는 이미지로 변경되도록
    currentIndex++;
    if(currentIndex>=images.length){
        currentIndex=0;
    }
})

// ✔ 마우스 옮기면 사진이동
//➰전체화면에서 움직이고 싶으면 window, main영역안에서 하고 싶으면 main
main.addEventListener("mousemove",function(e){
    //e.clientX : 현재화면에서 X축의 값 추출
    //e.clientY : 현재화면에서 Y축의 값 추출

    //객체를 부를때 (.x) 아래처럼
    mousePos.x=-(e.clientX/window.innerWidth) * 30; //음수는 반대방향
    mousePos.y=(e.clientY/window.innerHeight) * 30;
    //console.log(e.clientX,e.clientY) -> 마우스위치 값이 받아지는지 확인
    imgClick.style.transform=`translateY(${mousePos.y}px) translateX(${mousePos.x}px)`;
})