const sceneInfo=[{
    //0
    type:"sticky", //sticky기능이 있는 것과 없는 것을 구별할 예정
    heightNum:5,
    scrollHeight:0,
    objs:{
        container:document.querySelector("#scroll-section-0"),
        MessageA:document.querySelector('#scroll-section-0 .main-message.a'),
        MessageB:document.querySelector('#scroll-section-0 .main-message.b'),
        MessageC:document.querySelector('#scroll-section-0 .main-message.c'),
        MessageD:document.querySelector('#scroll-section-0 .main-message.d'),
    },
    values:{
        messageA_opacity_in:[0,1,{start:0.1,end:0.2}],
        messageA_opacity_out:[1,0,{start:0.25,end:0.3}],
    }
},{
    //1
    type:"normal", //sticky기능이없는 것
    heightNum:5,
    scrollHeight:0,
    objs:{
        container:document.querySelector("#scroll-section-1")
    }
},{
    //2
    type:"sticky",
    heightNum:5,
    scrollHeight:0,
    objs:{
        container:document.querySelector("#scroll-section-2")
    }
},{
    //3
    type:"sticky",
    heightNum:5,
    scrollHeight:0,
    objs:{
        container:document.querySelector("#scroll-section-3")
    }
}];