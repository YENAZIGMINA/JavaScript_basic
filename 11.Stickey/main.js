let myFunction;

/* function myFunction(){
    console.log("실행")
} */

let navbar=document.getElementById('navbar');
let sticky=navbar.offsetTop;
//offsetTop은 내 영역위 공간의 높이값
console.log("sticky " + sticky)

myFunction=()=>{
    //console.log(window.pageYOffset)
    if(window.pageYOffset>=sticky){
        navbar.classList.add('sticky')
    }else{
        navbar.classList.remove('sticky')
    }
} 

window.onscroll=myFunction;