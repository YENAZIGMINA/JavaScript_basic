let panoWrap=document.querySelector('.sj_panorama .pano_wrap');
let listWrap=panoWrap.querySelector('.list');
let item=listWrap.children;
console.log(item)
let listClone=null;
let itemWidth=item[0].offsetWidth; //이미지 하나의 넓이값
let itemLength=item.length; //10개
let listWidth=itemWidth * itemLength; //300px * 10=3000px
let move=0;
//let controls=document.querySelector('.sj_panorama .controls'); -> 아래랑 같음
let controls=panoWrap.parentElement.querySelector('.controls');
let timer;


//다 같은 방법
//function init(){}
//var init=function(){}
//var init=()=>{}

var init=function(){
    panoWrap.style.width=listWidth*2 + "px";
    listWrap.style.width=listWidth + "px";
    panoWrap.appendChild(listWrap.cloneNode(true)) // listWrap의 자식까지 복사하겠다
    listClone=panoWrap.children;
    //console.log(listClone) //유사배열(forEach 등 불가) 형식으로 나타남
    render();
    add();
    event();
}

let render=function(){
    move +=1;
    //유사배열을 배열로 바꾸기
    //console.log(Array.from(listClone))
    Array.from(listClone).forEach(function(clone){
        clone.style.transform=`translateX(${-move}px)`;
    })

    timer=window.requestAnimationFrame(render);
    //requestAnimationFrame -> setInterval의 업그레이드 버전
}

let add=function(){
    //setInterval(function(){},10000); //10초마다 함수 실행
    setInterval(function(){
        panoWrap.appendChild(listWrap.cloneNode(true));
        listClone=panoWrap.children;
    },10000);
}

//재생버튼 모양바꾸기
let event=function(){
    controls.querySelector('.play_on').addEventListener('click',function(e){
        e.preventDefault();
        console.log(this)

        if(this.classList.contains('active')){
            this.classList.remove('active')
            window.cancelAnimationFrame(timer) //멈추게 설정
        }else{
            this.classList.add('active')
            render(); //다시 재생하도록 설정
        }
    })

}



window.addEventListener('load',function(){
    init()
})