$(function(){

  //배너 슬라이드
  const $prev = $('header > .container > .btn');
  const $container = $('header > .container > .slides_container')
  nowIdx = 0;

  $prev.on('click', function(evt){
    evt.preventDefault();
    // console.log('dd');
    if(nowIdx<4){
      nowIdx++;
    }else{
      nowIdx = 0;
    }
    console.log(nowIdx);
    $container.stop().animate({
      left: -1120*nowIdx
    },400,"easeInOutCubic",function(){
      // console.log('이동완료')
    });

    let intervalID = "";

  });
  

    //배너 슬라이드 자동실행 - setinterval 사용
    intervalID = setInterval(function(){
      if(nowIdx<4){
        nowIdx++;
          }else{
            nowIdx = 0;
          }
          // console.log(nowIdx);
          
            // 컨테이너 이동 - 슬라이드, 원페이지 컨테이너 
            $container.stop().animate({
              left: -1120 * nowIdx
            },200,"easeInOutCubic",function(){
              // console.log("슬라이드 이동완료");
            });  
    },2000);


    // 남양아이 추천상품 슬라이드
    const $prevbtn = $('section > .product > .btn > a');
    const $product_container = $('section > .product > .slides > .slides_container');
    $prevbtn.on('click', function(evt){
      evt.preventDefault();
    nowindex = 0;

      console.log(nowIdx);
      if(nowindex<9){
        nowindex++;
      }else{
        nowindex = 0;
      }

      $product_container.stop().animate({
        left: -1180*nowindex
      },400,"easeInOutCubic",function(){
        console.log('상품이동완료')
      });

    });


    // 서브메뉴 
    
    
});