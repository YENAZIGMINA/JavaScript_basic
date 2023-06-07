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
    console.log(evt.currentTarget) //currentTarget index에 작성한 태그
    evt.currentTarget.classList.add('active');
}

