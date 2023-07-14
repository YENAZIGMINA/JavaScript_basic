let hero=document.querySelector('.hero');
let heroTitles=document.querySelectorAll('.hero_row_text>h2');
let heroSubTitles=document.querySelectorAll('.hero_row_text>h4');
let heroSeparator=document.querySelectorAll('.hero_row_speparator');
let heroMedia=document.querySelector('.hero_media');
let onenter=false;


const initHero=()=>{
    gsap.set(heroTitles,{y:'101%', opacity:1});
    gsap.set(heroSubTitles,{opacity:0});
    gsap.set(heroSeparator,{width:0});
    gsap.set('.cell',{opacity:1});

    showHero();
}
const showHero=()=>{
    var tl = gsap.timeline();
    tl.to(heroTitles, {y: 0,duration: 1,ease: "expo.out",stagger:0.2})
    tl.to(heroSubTitles, {opacity: 1, duration: 1,ease: "expo.in",stagger:0.2},-0.2)
    tl.to(heroSeparator, {width: '100%', duration: 1.5,ease: "expo.in",stagger:0.2},-0.2)
    tl.fromTo('.cell',{height:0,scale:0.5},{duration:1.25, height:'100%',scale:1,stagger:0.025,ease:'expo.inOut'})

};


const spliteAnimation=()=>{
    Splitting({
        target:heroMedia,
        by:'cells',
        image:true,
        rows: 4
    })
}

window.onload=()=>{

    window.addEventListener('scroll',()=>{
    if(!onenter && pageYOffset>hero.offsetTop  - 300){
        spliteAnimation();
        initHero();

        onenter=true;
    }
    
    })


}
