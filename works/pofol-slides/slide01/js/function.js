$(function(){

  const $container = $('#slides>.slides-container');
  const $indicators = $('#slides>.slides-pagination>li>a');

  let nowIdx = 0;
  

  $indicators.on('click', function(evt){

    evt.preventDefault();

    nowIdx = $indicators.index(this);

    $indicators.eq(nowIdx).parent().addClass('on');
    $indicators.eq(nowIdx).parent().siblings().removeClass('on');

    $container.animate({
      left: -250*nowIdx
     
    });
    $container.css({
      top: 7*nowIdx

    });
   

    

  });


});