/* function myFunction (){
    let input = document.getElementById('mySearch');
    //toUpperCase 대문자로
    //.value --> input태그에 적힌 값을 확인
    let filter = input.value.toUpperCase();
    //console.log(filter)
    let ul = document.getElementById('myMenu');
    let li = ul.getElementsByTagName('li');
    //console.log(li)
    for(let i=0; i<li.length; i++){
        //a태그 배열후, [0]으로 li에 작성한 문자배열
        let a = li[i].getElementsByTagName('a')[0]; 
        //innerHTML --> a태그안 글자만 콘솔에
        console.log(a.innerHTML.toUpperCase())

        if(a.innerHTML.toUpperCase().indexOf(filter)>-1){
            //-1보다 크냐는 것은 a.innerHTML에 검색한 텍스트가 존재하냐고 묻는 것
            li[i].style.display='block';
        }else{
            li[i].style.display='none';
        }
        
    }
} */



function myFunction (){
    let input = document.getElementById('mySearch');
    let filter = input.value.toUpperCase();
    //console.log(filter)
    let ul = document.getElementById('myMenu');
    let li = ul.getElementsByTagName('li');
    //console.log(li)
    for(let i=0; i<li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        console.log(a.innerHTML.toUpperCase())
        

        if(a.innerHTML.toUpperCase().indexOf(filter)>-1){
            li[i].style.display='block';
        }else{
            li[i].style.display='none';
        }
        
    }
}