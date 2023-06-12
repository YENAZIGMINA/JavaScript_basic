window.onscroll=function(){
    /* let currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos)

    if(currentScrollPos>20){
        document.getElementById('navbar').style.top="0";
    }else{
        document.getElementById('navbar').style.top="-54px";
    } */


    //if(document.body.scrollTop)
    console.log("body",document.body.scrollTop)
    console.log("documentElement",document.documentElement.scrollTop)

    if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
        document.getElementById('navbar').style.top="0";
    }else{
        document.getElementById('navbar').style.top="-54px";
    }
}