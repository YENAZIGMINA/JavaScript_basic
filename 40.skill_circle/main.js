let counterDate=$('.box h3');
let executed=false;

$(window).scroll(function(){
    let $scroll=$(this).scrollTop() + 200;
    let $offset=$('.easypiechart').offset().top;

    if($scroll>$offset){
        pieChart()

        if(!executed){
            counterDate.each(function(){
                let currrent=$(this);
                let target=currrent.attr('data-rate');//data-rate의 숫자를 뽑아옴
                //A.animate({width:100%},시간,이징,끝나면 할일)
                /* $({변수:초기값}).animate({변수:종료값}),{
                    옵션
                } */
                $({rate:0}).animate({rate:target},{
                    duration:2500,
                    progress:function(){//중간에 할일
                        let now=this.rate;
                        
                        currrent.text(Math.ceil(now)+"%")
                    }
                })
            })
            executed=true
        }

    }
})


function pieChart(){
    $('.chart').easyPieChart({
        //easypiechart 깃헙 복붙
        barColor:'#bb54cf',
        scaleColor:false,
        trackColor:'#e6aff1',
        lineWidth:15,
        size:180,
        animate:2000,
        lineCap:"round" //butt, round, square 중 선택가능
    });

}