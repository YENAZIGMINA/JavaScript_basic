let track=document.querySelector('.track');
let galleryTimeline=document.querySelector('.gallery-timeline');


track.animate([
    {transform: 'translate(-50%,0)'},
    {transform: 'translate(-50%,calc(2000px - 100vh))'}
],{
    fill: 'both',
        timeline: new ScrollTimeline({
            scrollOffsets: [
                {target:galleryTimeline,edge:'start',threshold:1},
                {target:galleryTimeline,edge:'end',threshold:1}
            ]
        })
})