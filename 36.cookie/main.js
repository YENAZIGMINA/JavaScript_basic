let currentCookie=document.cookie;
let cookieCheck=currentCookie.indexOf('green');
console.log(cookieCheck)


if(cookieCheck>-1){
    document.querySelector('.notice').style.display="none";
}else{
    document.querySelector('.notice').style.display="block";
}


document.querySelector('.hide').addEventListener("click",()=>{
    let date=new Date();
    date.setDate(date.getDate() + 7); //getDate 오늘날짜 뽑아짐
    let setCookie= "CookieName=green;";
        setCookie += "expires"+ date.toUTCString();

    document.cookie=setCookie;
})


document.querySelector('.close').addEventListener('click',function(){
    console.log(this)
    this.parentElement.style.display="none";
})