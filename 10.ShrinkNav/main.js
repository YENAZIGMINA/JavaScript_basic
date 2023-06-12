//window.onscroll=function(){scrollFution()}
window.onscroll=scrollFution;

/* function scrollFution (){
    console.log("실행")
} */

function scrollFution (){
    if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
        document.getElementById('navbar').style.padding="30px 10px";
        document.getElementById('logo').style.fontSize="25px";
    }else{
        document.getElementById('navbar').style.padding="90px 10px";
        document.getElementById('logo').style.fontSize="35px";
    }
}