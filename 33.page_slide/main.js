let buttons=document.querySelectorAll('button');
let contentWrap=document.querySelectorAll('.contentWrap');
let imgArr=document.querySelectorAll('img');
let title=document.querySelector('h2');
let pageNum=0;
let totalNum=0;
totalNum=contentWrap.length; //3



buttons[0].addEventListener('click',function(){
    preFunc();
})
buttons[1].addEventListener('click',function(){
    nextFunc();
})

function preFunc(){
    if(pageNum>0){
        pageNum--;
    }else{
        pageNum=totalNum - 1;
    }
    pageSetFunc();
}
function nextFunc(){
    if(pageNum<totalNum -1){
        pageNum++;
    }else{
        pageNum=0;
    }

    pageSetFunc();
}

function pageSetFunc(){
    imgArr.forEach((img)=>{
        img.classList.remove('active');
    })
    contentWrap[pageNum].querySelectorAll('img').forEach((img)=>{
        img.classList.add('active');
    })

    title.innerHTML=`PAGE:${pageNum + 1}`;
}

pageSetFunc();