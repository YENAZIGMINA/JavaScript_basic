function openCity (evt,cityName){
    let tabcontent=document.getElementsByClassName('tabcontent');
    console.log(tabcontent) //유사배열
    for(let i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display="none";
    }

    let tablinks=document.getElementsByClassName('tablinks');
    for(let i=0; i<tablinks.length; i++){
        tablinks[i].classList.remove('active');
    }
    //this = currentTarget 비슷함 - 후자는 클릭한 요소를 가져옴
    console.log(evt.currentTarget) 
    //currentTarget -> index에 작성한 태그를 콘솔에 찍음
    evt.currentTarget.classList.add('active');
    document.getElementById(cityName).style.display="block";
}

document.getElementById('defaultOpen').click();

//🎀classList 메서드
//.classList.add('active') --> active라는 클래스를 추가
//.classList.remove('active') --> active라는 클래스를 제거
//.classList.toggle('active') --> active 클래스가 존재하면 active클래스를 제거하고
//                              active 클래스가 존재하지 않으면 active클래스를 추가
//.classList.contain('active') --> active클래스가 존재하는가? (true/false로 반환)
//.classList.replace('A','B) --> A클래스를 B클래스로 변경