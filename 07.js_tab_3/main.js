function openCity(cityName, elem, color){
    let tabcontent = document.getElementsByClassName('tabcontent');
    for(let i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display="none";
        //console.log(tabcontent[i]) //i는 지역변수
    }

    let tablinks = document.getElementsByClassName('tablink');
    for(let i=0; i<tablinks.length; i++){
        tablinks[i].style.backgroundColor="";
        //❗빈 문자열을 할당하면, backgroundColor 속성은 기본값으로 초기화됨
    }
    elem.style.backgroundColor=color;
    document.getElementById(cityName).style.display="block";
    //❗cityName은 매개변수로 첫번째 인자값을 받아왔으므로 ''를 안넣어도 됨

}

document.getElementById('defaultOpen').click();
