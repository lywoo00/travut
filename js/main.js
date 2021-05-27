$(function(){

    // $(window).resize( function(){
    //     let windowWidth  = $(window).width;
    //     if(windowWidth > 768) {
    //         mainAnimation ();
    //         } else {
    //         //창 가로 크기가 500보다 클 경우
    //         }
            
    // });

    mainAnimation ();
    function mainAnimation (){
        $('.content_left').click(function(){
            $(this).toggleClass('active');
            $('.content-pop.left').toggleClass('active');
            if($(this).hasClass('active')){
                // $('.content-pop.left').addClass('active');
                // $('.content-pop.left').css('display','block');
                // $('.content-pop.left').animate({opacity: '1'},200);
                // $('.content_right').animate({opacity: '0.5'},200);
                $('.download').stop().fadeOut(200);
                $('.content_right').removeClass('active');
                $('.content-pop.right').removeClass('active');
            } else {
                // $('.content-pop.left').animate({opacity: '0'},200);
                // $('.content-pop.left').css('display','none');
                // $('.content_right').animate({opacity: '1'},200);
                $('.download').stop().fadeIn(200);
            }
            
        })
    
        $('.content_right').click(function(){
            $(this).toggleClass('active');
            $('.content-pop.right').toggleClass('active');
            if($(this).hasClass('active')){
                // $('.content-pop.right').css('display','block');
                // $('.content-pop.right').animate({opacity: '1'},200);
                // $('.content_left').animate({opacity: '0.5'},200);
                $('.download').stop().fadeOut(200);
                $('.content_left').removeClass('active');
                $('.content-pop.left').removeClass('active');



            } else {
                // $('.content-pop.right').animate({opacity: '0'},200);
                // $('.content-pop.right').css('display','none');
                // $('.content_left').animate({opacity: '1'},200);
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