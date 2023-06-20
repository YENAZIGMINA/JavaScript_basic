let rotationX=0;
let rotationY=0;
let cube=document.querySelector('.box-area');
let six=document.querySelector('.box-bottom h2');
let three=document.querySelector('.box-back h2');
let four=document.querySelector('.box-left h2');

//1번 화면이 보이게 1번
cube.style.transform=`rotateX(0deg) rotateY(0deg)`;
//반전된 숫자 되돌리기
six.style.transform='rotateX(180deg)';
four.style.transform='rotateY(180deg)';

//1번 화면이 보이게 2번
function front(){
    cube.style.transform=`rotateX(0deg) rotateY(0deg)`;
}

function rotateXAis(n){
    rotationX+=(90 * n)
    cube.style.transform=`rotateX(${rotationX}deg) rotateY(0deg)`;
    three.style.transform='rotateX(180deg)'
}

function rotateYAis(n){
    rotationY+=(90 * n)
    cube.style.transform=`rotateX(0deg) rotateY(${rotationY}deg)`;
    three.style.transform='rotateY(180deg)'
}