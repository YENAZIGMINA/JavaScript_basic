//(function(){})() --> 즉시실행함수 (지역함수로,,,쓰기위해?)

(function () {
    let yOffset = 0; // 전체 스크롤 값
    let prevScrollHeight = 0; //현재 활성화된 section의 이전 높이값
    let currentScene = 0; //현재 활성화된(화면에 보이는) 씬
    let enterNewScene=false; //새로운 section에 진입했을 때 알려주는 역할

    function setLayout() {
        //각 영역의 높이값을 셋팅
        for (let i = 0; i < sceneInfo.length; i++) {
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight; //지나온값
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }

        yOffset = pageYOffset;
        
        // 새로고침해도 페이지를 인식 할 수 있게 만들기
        let totlaScrollHeight = 0;
        for (let i = 0; i < sceneInfo.length; i++) {
            totlaScrollHeight += sceneInfo[i].scrollHeight
            if (totlaScrollHeight >= yOffset) {
                currentScene = i;
                break;
            }
        }

        document.body.setAttribute('id', `show-scene-${currentScene}`) //클래스명 순서대로 변경

    } //setLayout




    function calcValues(values, currentYOffset) {
        let rv;
        let scrollRatio = currentYOffset / sceneInfo[currentScene].scrollHeight;

        rv = scrollRatio * (values[1] - values[0]) + values[0]
        return rv;
    }



    function playAnimation() {
        let objs = sceneInfo[currentScene].objs;
        let values = sceneInfo[currentScene].values;
        let currentYOffset = yOffset - prevScrollHeight;
        console.log(currentScene, currentYOffset)
        switch (currentScene) {
            case 0:
                //console.log('0 play');
                let messageA_opacity_in = calcValues(values.messageA_opacity_in, currentYOffset)
                objs.MessageA.style.opacity = messageA_opacity_in;
                console.log(messageA_opacity_in)
                break;
            case 1:
                //console.log('1 play');
                break;
            case 2:
                //console.log('2 play');
                break;
            case 3:
                //console.log('3 play');
                break;
        }
    }


    //스크롤 움직일 때 마다 실행
    function scrollLoop() {
        enterNewScene=false;
        //console.log(pageYOffset)
        prevScrollHeight = 0;
        //지나온 값
        for (let i = 0; i < currentScene; i++) {
            prevScrollHeight += sceneInfo[i].scrollHeight
        }
        if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
            enterNewScene=true;
            currentScene++;
        }
        if (yOffset < prevScrollHeight) {
            enterNewScene=true;
            currentScene--;
        }

        //console.log(currentScene)
        document.body.setAttribute('id', `show-scene-${currentScene}`) //클래스명 순서대로 변경

        if(enterNewScene) return; //true일때 종료시키기
        
        //글자 애니메이션을 함수로 별도로 설정한다
        playAnimation();
    }




    window.addEventListener("scroll", function () {
        yOffset = pageYOffset;
        scrollLoop();
    })

    window.addEventListener('resize', setLayout)
    window.addEventListener('load', setLayout)

    //setLayout();
})()