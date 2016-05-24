//Loading Screen 
$(window).load(function () {
//Show The Scroll
$('.page-overlay .spinner').fadeOut(130,function() {
  $(this).parent().fadeOut(800, function () {
    $(this).remove();
    });
  });
});
//End Loading Screen 

$(document).ready(function() {

    autoHeight();

    function autoHeight() {
        $winWidth = $(window).height();

        if ($winWidth > 420) {
            $('.auto-height').css('min-height', $winWidth);
        } else {
            $('.auto-height').css('min-height', '420px;');
        }
    }

    $('#parallax-image').parallax("45%", -0.30);

    // Window Resize
    $(window).resize(function() {
        if ($(window).width() > 765) {
            $('.fluid-header').removeAttr('style');
            $('.hamburger').removeClass('open');
        }
    });



    $(window).resize(function() {
        if ($(window).width() > 670) {

        }
    });

    // Mobile Nav
    $('.hamburger').click(function(e) {
        $('.fluid-header').slideToggle('fast');
        $(this).toggleClass('open');
    });
});

$(window).scroll(function() {
    var eScroll = $(this).scrollTop();
    
    $('.main-banner-intro').css ({
        '-webkit-transform' : 'translate(0px, '+ eScroll /9 +'%)',
        '-moz-transform' : 'translate(0px, '+ eScroll /9 +'%)',
        'transform' : 'translate(0px, '+ eScroll /9 +'%)'
    });

    if(eScroll > $('.works-details').offset().top - ($(window).height() / 1.2)) {
        $('.works-details li').each(function(i) {
            setTimeout(function() {
                $('.works-details li').eq(i).addClass('is-showing');
            }, 150 * (i+1));
        });
    }

    if(eScroll > $('.what-we-do-image').offset().top - ($(window).height() / 1.2)) {
        $('.what-we-do-image .fade').each(function(i) {
            setTimeout(function() {
                $('.what-we-do-image .fade').eq(i).addClass('fade-in');
            }, 150 * (i+1));
        });
    }

});