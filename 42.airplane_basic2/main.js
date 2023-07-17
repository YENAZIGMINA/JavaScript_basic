let airplane=document.querySelector('.airplane');
let airplaneScrollTimeline=document.querySelector('.airplane-scroll-timeline');


airplane.animate([
    {offsetDistance:"100%"},
    {offsetDistance:"0%"}
],{
    fill: 'both', //끝과 끝이 맞아야 할 떄, 존재해야할 떄는 꼭 작성
        timeline: new ScrollTimeline({
            scrollOffsets: [
                {target:airplaneScrollTimeline, edge:"start", threshold:1},
                {target:airplaneScrollTimeline, edge:"end", threshold:1}
            ]
        })
})