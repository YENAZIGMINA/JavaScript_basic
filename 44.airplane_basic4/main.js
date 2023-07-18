document.body.animate([
    {backgroundColor:'#cd8fdd'},
    {backgroundColor:'skyblue'},
    {backgroundColor: 'pink'}
],{
    fill: 'both',
    timeline: new ScrollTimeline({
        scrollOffsets: [
            {target:document.body,edge:"start",threshold:1},
            {target:document.body,edge:"end",threshold:1}
        ]
    })

})