function openCity(cityName, elem, color){
    let tabcontent = document.getElementsByClassName('tabcontent');
    for(let i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display="none";
        //console.log(tabcontent[i]) //i는 지역변수
    }

    let tablinks = document.getElementsByClassName('tablink');
    for(let i=0; i<tablinks.length; i++){
        tablinks[i].style.backgroundColor="";
    }
    elem.style.backgroundColor=color;
    document.getElementById(cityName).style.display="block";

}

document.getElementById('defaultOpen').click();