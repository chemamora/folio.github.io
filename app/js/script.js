console.log('test script');


$( document ).ready(function() {
  $('.huge').each(function(){
    var string = $(this).html();
    string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
    $(this).html(string);
});

    ///////////////////// Custom  cursor 
    
    $("body").prepend("<div class='cursor cursor-follower'></div>" );
    $("body").prepend("<div class='cursor cursor-dot'></div>" );
    $(window).mousemove(function(e) { 
    $('.cursor').css({
      left: e.pageX,
      top: e.pageY
      })
    })
    $('.cursor_focus').on('mouseenter', function() { $('.cursor').addClass('focus')}).on('mouseleave', function() { $('.cursor').removeClass('focus')})
    
    ///////////////////// Custom  cursor 


    ///////////////////// Stagger Elements
    var rafId = null;
var delay = 200;
var lTime = 0;

function scroll() {
  var scrollTop = $(window).scrollTop();
  var height = $(window).height()
  var visibleTop = scrollTop + height;
  $('.reveal').each(function() {
    var $t = $(this);
    if ($t.hasClass('reveal_visible')) { return; }
    var top = $t.offset().top;
    if (top <= visibleTop) {
      if (top + $t.height() < scrollTop) {
        $t.removeClass('reveal_pending').addClass('reveal_visible');
      } else {
        $t.addClass('reveal_pending');
        if (!rafId) requestAnimationFrame(reveal);  
      }
    }
  });
}
function reveal() {
  rafId = null;
  var now = performance.now();
  
  if (now - lTime > delay) {
    lTime = now;
    var $ts = $('.reveal_pending');
    $($ts.get(0)).removeClass('reveal_pending').addClass('reveal_visible');  
  }
  
  
  if ($('.reveal_pending').length >= 1) rafId = requestAnimationFrame(reveal);
}

$(scroll);
$(window).scroll(scroll);
// $(window).click(function() {
//   $('.reveal').removeClass('reveal_visible').removeClass('reveal_pending');
//   lTime = performance.now() + 500;
//   var top = $(window).scrollTop();
//   $(window).scrollTop(top === 0 ? 1 : top-1);
// });
});

