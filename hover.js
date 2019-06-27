$(function() {
 
  //マウスを乗せたら発動
  $('.imgbtn').hover(function() {
    $('.imgbtnp1').css('font-size', '1.6em');
  
  //ここにはマウスを離したときの動作を記述
  }, function() {

     $('.imgbtnp1').css('font-size', '1.3em');

  });

   //マウスを乗せたら発動
  $('.imgbtn2').hover(function() {
 
     $('.imgbtnp2').css('font-size', '1.6em');

  //ここにはマウスを離したときの動作を記述
  }, function() {
 
     $('.imgbtnp2').css('font-size', '1.3em');
 
  });


   //マウスを乗せたら発動
  $('.imgbtn3').hover(function() {
 
    $('.imgbtnp3').css('font-size', '1.6em');

  //ここにはマウスを離したときの動作を記述
  }, function() {
 
     $('.imgbtnp3').css('font-size', '1.3em');
 
  });


   //マウスを乗せたら発動
  $('.itembox').hover(function() {
 
    $(this).css('animation', 'rotate-vert-center 1s cubic-bezier(0.455, 0.030, 0.515, 0.955)');

  //ここにはマウスを離したときの動作を記述
  }, function() {
 
     $(this).css('animation', 'none');
 
  });


});








// LINE


$(function () {
  $('div.line').each(function () {
    var $win = $(window),
        $winH = $win.height(),
        $connect = $(this),
        position = $connect.offset().top,
        current = 0,
        scroll;
    $win.on('load scroll', function () {
      scroll = $win.scrollTop();
      current = (1 - (position - scroll) / $winH) * 2 * 100;
      if (current > 99.9) {
        current = 100;
      }
      if (scroll > position - $winH) {
        $connect.css({width: current-20 + '%'});
      }
    });
  });



  $('div.line3').each(function () {
    var $win = $(window),
        $winH = $win.height(),
        $connect = $(this),
        position = $connect.offset().top,
        current = 0,
        scroll;
    $win.on('load scroll', function () {
    	console.log(position);
      scroll = $win.scrollTop();
      current = (1 - (position - scroll) / $winH) * 2 * 100;
      if (current > 99.9) {
        current = 100;
      }
      if (scroll > position - $winH) {
        $connect.css({width: current-10 + '%'});
      }
    });
  });
});

