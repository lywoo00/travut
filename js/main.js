$(function(){

    let isOpenPopUp = false;
    $('.content_left').click(function(){
        isOpenPopUp = !isOpenPopUp
        if (isOpenPopUp) {
            // $('.content_left').stop().animate({scale:'1.1'},300);
            $('.content-pop.left').stop().fadeIn(300);
            $('.etc-img').stop().fadeIn(300);
            $('.click-me').stop().fadeOut(100);
            $('.download').stop().fadeOut(100);
            $('.content_left .arrow-box').stop().animate({opacity: '0'},100);
            $('.content_right').stop().animate({opacity: '0'},100);
        } else {
            // $(this).stop().animate({scale:'1'},300);
            $('.content-pop.left').stop().fadeOut(300);
            $('.etc-img').stop().fadeOut(300);
            $('.click-me').stop().fadeIn(100);
            $('.download').stop().fadeIn(100);
            $('.content_left .arrow-box').stop().animate({opacity: '1'},100);
            $('.content_right').stop().fadeIn(100);
            $('.content_right').stop().animate({opacity: '1'},100);
        }
    })
    $('.content_right').click(function(){
        isOpenPopUp = !isOpenPopUp
        if (isOpenPopUp) {
            // $(this).stop().animate({transform:'scale(1.1)'});
            $('.content-pop.right').stop().fadeIn(300);
            $('.etc-img').stop().fadeIn(300);
            $('.click-me').stop().fadeOut(100);
            $('.download').stop().fadeOut(100);
            $('.arrow-box').stop().animate({opacity: '0'},100);
            $('.content_left').stop().animate({opacity: '0'},100);
        } else {
            // $(this).stop().animate({transform:'scale(1)'});
            $('.content-pop.right').stop().fadeOut(300);
            $('.etc-img').stop().fadeOut(300);
            $('.click-me').stop().fadeIn(100);
            $('.download').stop().fadeIn(100);
            $('.arrow-box').stop().animate({opacity: '1'},100);
            $('.content_left').stop().animate({opacity: '1'},100);
        }
    })
    
    new WOW().init();
    
})

// const leftCont = document.querySelector('.content_left');
// const leftPop = document.querySelector('.content-pop,left');
// leftCont.addEventListener('click', function(){
//     TweenLite.to($( leftPop, 0.3, {autoAlpha: 1, display:'block'});
// })

// console.log(leftPop)