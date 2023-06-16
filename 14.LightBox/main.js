let slideIndex=1;


function openModal(){
    document.getElementById('myModal').style.display="block";
}
function closeModal(){
    document.getElementById('myModal').style.display="none";
}

function plusSlides(n){
    showSlides(slideIndex += n)
}



//현재 페이지 연결
function currentSlide(n){
    showSlides(slideIndex = n)
}
function showSlides(n){
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('demo');
    let captionText = document.getElementById('caption');

    if(n>slides.length){slideIndex=1}
    if(n<1){slideIndex = slides.length}

    for(let i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }
    for(let i=0; i<dots.length; i++){
        dots[i].classList.remove('active'); // active붙은 이미지는 opacity1 효과
    }

    slides[slideIndex - 1].style.display="block";
    dots[slideIndex - 1].classList.add('active');

    captionText.innerHTML=dots[slideIndex - 1].alt;
}