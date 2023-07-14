//제이쿼리
let offset=$('.main').offset().top - 400; //문서에서 .main 위의 높이값
let executed=false; //한번만 실행되도록 변수설정

$(window).scroll(function(){
    let wScroll=$(this).scrollTop();
    console.log(wScroll)
    if(wScroll>offset){
        if(!executed){
            $('.skill-per').each(function(){
                let $this=$(this);
                let per=$this.attr('per');
                //A.atter(B) : A가 가지고있는 B라는 속성의 값을 가져와라
                //A.attr(B,C) : A가 가지고있는 속성B를 C로 바꿔라
    
                $this.css({width:per+"%"})
                $({aniValue:0}).animate({aniValue:per},{ //code jquery에서 복붙
                    duration:1000,
                    step:function(){
                        //애니메이션 사이사이에 할일
                        $this.attr("per",Math.ceil(this.aniValue)+"%") //this는 animate를 의미
                    }
                })
            })
            executed=true;
        }
        
    }
})


