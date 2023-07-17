let progress=document.querySelector('.progress');
let targetImages=document.querySelectorAll('.target-image');


//progress.animate([키프레임],{옵션})
progress.animate([
    {transform:'scale(0)'},
    {transform:'scale(1)'}
],{
    timeline: new ScrollTimeline({
        scrollOffsets: [
            {target:document.body,edge:'start',threshold:1}, //문서전체가 target
            {target:document.body,edge:'end',threshold:1}
        ]
    })
})



targetImages.forEach((image)=>{
    let imageTop=image.offsetTop; //각각의 천장에 닿는지점 뽑음
    //console.log(imageTop)
    let imageHeight=image.offsetHeight; //이미지의 높이값 뽑음
    //console.log(imageHeight)

    let offset1=imageTop + imageHeight - window.innerHeight;
    let offset12=imageTop;
    image.animate([
        {opacity:0}, //0% 지점
        {opacity:1} //100% 지점
    ],{
        timeline: new ScrollTimeline({
            scrollOffsets: [
                new CSSUnitValue(offset1, 'px'),
                new CSSUnitValue(offset12, 'px')
            ]
        })
    })
})