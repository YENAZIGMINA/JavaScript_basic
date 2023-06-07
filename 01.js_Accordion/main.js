let acc = document.getElementsByClassName('accordion');
console.log(acc[1]) //유사배열(배열 형식으로 나옴) / 배열은 for문 돌려야함
//console.log(acc.length)

for(let i=0; i<acc.length; i++){
    acc[i].addEventListener('click',function(){
        this.classList.toggle('active')
        //classList에는 toggle, add, remove 속성 사용가능
        let panel=this.nextElementSibling; //나의 다음요소(동생)
        //0 --> false
        //0을 제외한 숫자 --> true
        //scrollHeight : 화면 바깥으로 삐져나간 부분까지 포함하여 전체 글의 높이
        if(panel.style.maxHeight){
            panel.style.maxHeight=null;
        }else{
            panel.style.maxHeight=panel.scrollHeight+"px"; //원래 내가 가지고 있는 높이값을 가져옴
        }
    })
}