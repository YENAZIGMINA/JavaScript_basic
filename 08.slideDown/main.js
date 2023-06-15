let preScrollpos=window.pageYOffset;
console.log("이전값", preScrollpos)

//window.addEventListener('scroll',function(){}) -->아래랑 같은말
window.onscroll=function(){
    let currentScrollPos=window.pageYOffset;
    console.log("현재값", currentScrollPos)
    if(preScrollpos>currentScrollPos){
        document.getElementById('navbar').style.top="0";
    }else{
        document.getElementById('navbar').style.top="-53px";
    }

    preScrollpos=currentScrollPos;
}
