let textBlock=document.querySelectorAll('.text-block');
let pageContent=document.querySelector('.page-content');



textBlock.forEach((item)=>{
    let textTop=item.offsetTop; //각각의 천장에 닿는지점 뽑음
    let textHeight=item.offsetHeight; //이미지의 높이값 뽑음

    let offset1=textTop + textHeight - window.innerHeight;
    let offset12=textTop;

    item.animate([
        {opacity:0,transform:'scale(0.5)',offset:0},
        {opacity:1,transform:'scale(0.5)',offset:0.17},
        {opacity:1,transform:'scale(1.2)',offset:0.2},
        {opacity:1,transform:'scale(1)',offset:0.3}
    ],{
        timeline: new ScrollTimeline({
            scrollOffsets: [
                new CSSUnitValue(offset1, 'px'),
                new CSSUnitValue(offset12, 'px')
            ]
        })
    })
})