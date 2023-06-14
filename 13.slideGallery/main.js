let slideIndex=1;
showSlides(slideIndex);

function showSlides(n){
    let slides=document.getElementsByClassName('mySlides');
    let dots=document.getElementsByClassName('demo');

    if(n>slides.length){
        slideIndex=1;
    }
    if(n<1){
        slideIndex=slides.length;
    }

    //(큰사진 - mySlides)모두 숨기고 첫번째 사진만 나타나라
    for(let i=0; i<slides.length; i++){
        slides[i].style.opacity="0";
    }
    slides[slideIndex - 1].style.opacity="1";

    //(아래사진) 활성화된 큰사진-아래사진 opacity=1 되도록
    for(let i=0; i<dots.length; i++){
        dots[i].classList.remove('active');
    }
    dots[slideIndex - 1].classList.add('active');
}




function plusSlides (n){
    showSlides(slideIndex += n);
}

function currentSlide (n){
    showSlides(slideIndex = n);
}