function openCity (cityName){
    let tabcontnet, tablinks;
    tabcontnet = document.getElementsByClassName('tabcontent')
    //getElement's'ByClassName --> s가 붙으면 배열로 들어옴! (class는 배열로, id는 아님)
    //console.log(tabcontnet)

    for(let i=0; i<tabcontnet.length; i++){
        tabcontnet[i].style.display="none";
    }

    document.getElementById(cityName).style.display="block";
    //변수 그대로 들고오기 때문에 '' 작성안해도 됨

    let topright = document.getElementsByClassName('topright');
    console.log(topright)
    for(let i=0; i<topright.length; i++){
        topright[i].addEventListener('click',function(){
            //이벤트(click)에 반응하는 function을 이벤트핸들러
            this.parentElement.style.display="none";
        })
    }
}

// ↓ 위 openCity 함수와 무관하게 작동
document.getElementById('defaultOpen').click();