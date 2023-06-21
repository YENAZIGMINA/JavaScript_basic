let mainMenu=document.querySelectorAll('.main_menu>li'),
    header=document.querySelector('header');

    //mainMenu.forEach(mainMenu의 item 각각의 할일)
    //mainMenu.forEach(function(item){})//item은 요소각각을 의미
    //mainMenu.forEach(function(item){})

    mainMenu.forEach((item)=>{
        item.addEventListener('mouseover',function(){
            let submenuHeight= this.querySelector('.sub_menu').offsetHeight;
            console.log(submenuHeight)
            //console.log(this)
            header.style.height=`${submenuHeight + 120}px`
        })
        item.addEventListener('mouseout',function(){
            header.style.height=`120px`
        })
    })