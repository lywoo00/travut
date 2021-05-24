$(function(){
    $('.content_left').click(function(){
        $('.content-pop.left').fadeIn(200);
        $('.content_right').fadeOut(200);
        $('.etc-img').fadeIn(400);
    })
})

// const leftCont = document.querySelector('.content_left');
// const leftPop = document.querySelector('.content-pop,left');
// leftCont.addEventListener('click', function(){
//     TweenLite.to($( leftPop, 0.3, {autoAlpha: 1, display:'block'});
// })

// console.log(leftPop)