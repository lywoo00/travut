$(function(){

    // $(window).resize( function() {
    //     if($(window).width() > 768) { 
    //         mainAnimation();
    //     }
    // } );
    mainAnimation ();
    function mainAnimation (){
        $('.content_left').click(function(){
            $(this).toggleClass('active');
            if($(this).hasClass('active')){
                $('.content-pop.left').css('display','block');
                $('.content-pop.left').animate({opacity: '1'});
                $('.content_right').animate({opacity: '0'});
                $('.download').stop().fadeOut(200);
            } else {
                $('.content-pop.left').animate({opacity: '0'});
                $('.content-pop.left').css('display','none');
                $('.content_right').animate({opacity: '1'});
                $('.download').stop().fadeIn(200);
            }
        })
    
        $('.content_right').click(function(){
            $(this).toggleClass('active');
            if($(this).hasClass('active')){
                $('.content-pop.right').css('display','block');
                $('.content-pop.right').animate({opacity: '1'});
                $('.content_left').animate({opacity: '0'});
                $('.download').stop().fadeOut(200);
            } else {
                $('.content-pop.right').animate({opacity: '0'});
                $('.content-pop.right').css('display','none');
                $('.content_left').animate({opacity: '1'});
                $('.download').stop().fadeIn(200);
            }
        })
    }

    

    
    
    new WOW().init();
    
})

// const leftCont = document.querySelector('.content_left');
// const leftPop = document.querySelector('.content-pop,left');
// leftCont.addEventListener('click', function(){
//     TweenLite.to($( leftPop, 0.3, {autoAlpha: 1, display:'block'});
// })

// console.log(leftPop)