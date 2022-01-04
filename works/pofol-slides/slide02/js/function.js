$(function(){

  const $indicator = $('.slides>.slides-pagination>li>a');
  const $container = $('.slides>.slides-container');
  let nowIdx = 0;

  const $btnNext =$('.next'); 
  const $btnPrev =$('.prev');

  

  $indicator.on('click', function(evt){

    // 이번에 클릭한 a의 인덱스번호 추출
    nowIdx = $indicator.index(this);

    // 활성화표시
    $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');


    // 컨테이너 이동 - 슬라이드, 원페이지 컨테이너 이동은 stop을 꼭 붙이기.
    $container.stop().animate({
      left: -1180 * nowIdx
    },400,"easeInOutCubic",function(){
      console.log("슬라이드 이동완료");
    });





    evt.preventDefault();


  });

  $btnNext.on('click', function(evt){


    evt.preventDefault();

    //보여줄 슬라이드에 대한 인덱스번호 추출
    /*
    nowIdx = 
      0     ---다음버튼누르면--> 1
      1     -> 2
      2     -> 3
      3     -> 4
                      +1씩 증가
                      nowIdx < 4 이면 1증가 또는 
                      nowIdx <= 3 이면 1증가
                      nowIdx == 4 이면 0

                      nowIdx == 4 이면 nowIdx-4
                      nowIdx > 3 이면 -4

      4     -> 0
                      -4 됨.
    
    
    
  */
  if(nowIdx<=3){
nowIdx++;
  }else{
    nowIdx = 0;
  }
  console.log(nowIdx);

    // 활성화표시

    $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');


    // 컨테이너 이동 - 슬라이드, 원페이지 컨테이너 이동은 stop을 꼭 붙이기.
    $container.stop().animate({
      left: -1180 * nowIdx
    },400,"easeInOutCubic",function(){
      console.log("슬라이드 이동완료");
    });


   



  });

  $btnPrev.on('click', function(evt){

    evt.preventDefault();

    /* 0 -> 4, 1 -> 0, 2->1, 3->2, 4->3 */
    if(nowIdx>0){
      nowIdx --;
    }else{
      nowIdx=4;
    }
    console.log(nowIdx);

    $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');


    // 컨테이너 이동 - 슬라이드, 원페이지 컨테이너 이동은 stop을 꼭 붙이기.
    $container.stop().animate({
      left: -1180 * nowIdx
    },400,"easeInOutCubic",function(){
      console.log("슬라이드 이동완료");
    });



  });

  let intervalID = "";
  // 슬라이드 자동실행 - setinterval 사용
  intervalID = setInterval(function(){
    if(nowIdx<=3){
      nowIdx++;
        }else{
          nowIdx = 0;
        }
        console.log(nowIdx);
      
          // 활성화표시
      
          $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
      
      
          // 컨테이너 이동 - 슬라이드, 원페이지 컨테이너 이동은 stop을 꼭 붙이기.
          $container.stop().animate({
            left: -1180 * nowIdx
          },400,"easeInOutCubic",function(){
            console.log("슬라이드 이동완료");
          });





  },5000);

});