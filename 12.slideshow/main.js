let slideIndex = 1;
showSlides(slideIndex)

function showSlides(n){
    let slides = document.getElementsByClassName('mySlides');
    let dot = document.getElementsByClassName('dot');
    console.log(slides)

    if(n>slides.length){
        slideIndex = 1
    }
    if(n<1){
        slideIndex = slides.length
    }


    for(let i=0; i<slides.length; i++){
        slides[i].style.display="none"
    }
    for(let i=0; i<dot.length; i++){
        dot[i].classList.remove('active')
    }


    slides[slideIndex - 1].style.display="block"
    dot[slideIndex - 1].classList.add('active')

}



//버튼넘기면 다음 사진 나오도록하는 함수
function plusSlides(n){
    showSlides(slideIndex += n) //slideIndex = slideIndex + n
}

//페이지네이션 버튼 눌렀을 때 해당 사진으로
function currentSlide(n){
    showSlides(slideIndex = n)
}



//setInterval(function(){},시간)
setInterval(() => {
    plusSlides(1)
}, 3000);