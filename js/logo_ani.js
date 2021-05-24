$(document).ready(function(){


    // big-logo-ani
    
    function totalBigani (){

        $('.ani-wrap.big .riborn').delay(1500).animate({ rotate:'0deg', top: '93%' },100).animate({top:'88%'},50).animate({top:'90%'},50,function(){

            $('.ani-wrap.big .eye.left').stop().animate({scale:'1.2'},300).delay(300).animate({'left':'40px','top':'60px'},50).delay(50).animate({'left':'45px','top':'70px'},50).delay(500).animate({'left':'135px'},100).animate({'left':'117px'},100).delay(500).animate({'left':'57px','top':'80px'},500).delay(100).animate({'top':'55px'},100).animate({'top':'63px'},100);

            $('.ani-wrap.big .eye.right').stop().animate({scale:'1.2'},300).delay(300).animate({'left':'90px','top':'60px'},50).delay(50).animate({'left':'100px','top':'70px'},50).delay(500).animate({'left':'190px'},100).animate({'left':'172px'},100).delay(500).animate({'left':'165px','top':'80px'},500).delay(100).animate({'top':'55px'},100).animate({'top':'63px'},100,function(){

                $('.ani-wrap.big .mouse').stop().delay(10).animate({'opacity':'1'},10,function(){
                    $('.ani-wrap.big .mouse').delay(1000).animate({'opacity':'0'},100);
        
                    $('.ani-wrap.big .eye.left').stop().delay(1000).animate({scale:'0','top':'86px'},100);
            
                    $('.ani-wrap.big .eye.right').stop().delay(1000).animate({scale:'0','top':'86px'},100);
            
                    $('.ani-wrap.big .riborn').stop().delay(1000).animate({rotate:'-45deg','top':'50%'},300,totalBigani);
                });
            });
        });
    }

    // small-logo-ani

    function totalSmallani (){

        $('.ani-wrap.small .riborn').delay(1500).animate({ rotate:'0deg', top: '95%' },100).animate({top:'89%'},50).animate({top:'92%'},50,function(){

            $('.ani-wrap.small .eye.left').animate({scale:'1.2'},300).delay(300).animate({'left':'6px','top':'10px'},50).delay(50).animate({'left':'8px','top':'12px'},50).delay(500).animate({'left':'25px'},100).animate({'left':'17px'},100).delay(500).animate({'left':'12px','top':'16px'},500).delay(10).animate({'top':'10px'},100).animate({'top':'12px'},100);

            $('.ani-wrap.small .eye.right').animate({scale:'1.2'},300).delay(300).animate({'left':'16px','top':'10px'},50).delay(50).animate({'left':'18px','top':'12px'},50).delay(500).animate({'left':'33px'},100).animate({'left':'28px'},100).delay(500).animate({'left':'27px','top':'16px'},500).delay(10).animate({'top':'10px'},100).animate({'top':'12px'},100,function(){

                $('.ani-wrap.small .mouse').delay(10).animate({'opacity':'1'},10,function(){
                    $('.ani-wrap.small .mouse').delay(1000).animate({'opacity':'0'},100);
        
                    $('.ani-wrap.small .eye.left').delay(1000).animate({scale:'0','top':'16px'},100);
            
                    $('.ani-wrap.small .eye.right').delay(1000).animate({scale:'0','top':'16px'},100);
            
                    $('.ani-wrap.small .riborn').delay(1000).animate({rotate:'-45deg','top':'48%'},300,totalSmallani);
                });
            });
        });
    }

    //x-s-logo-ani

    function totalXsmallani (){

        $('.ani-wrap.x-small .riborn').delay(1500).animate({ rotate:'0deg', top: '93%' },100).animate({top:'85%'},50).animate({top:'90%'},50,function(){

            $('.ani-wrap.x-small .eye.left').stop().animate({scale:'1.2'},300).delay(300).animate({'left':'5px','top':'10px'},50).delay(50).animate({'left':'7px','top':'12px'},50).delay(500).animate({'left':'18px'},100).animate({'left':'15px'},100).delay(500).animate({'left':'8px','top':'14px'},500).delay(10).animate({'top':'8px'},100).animate({'top':'10px'},100);

            $('.ani-wrap.x-small .eye.right').stop().animate({scale:'1.2'},300).delay(300).animate({'left':'14px','top':'10px'},50).delay(50).animate({'left':'16px','top':'12px'},50).delay(500).animate({'left':'26px'},100).animate({'left':'23px'},100).delay(500).animate({'left':'20px','top':'14px'},500).delay(10).animate({'top':'8px'},100).animate({'top':'10px'},100,function(){

                $('.ani-wrap.x-small .mouse').stop().delay(10).animate({'opacity':'1'},10,function(){
                    $('.ani-wrap.x-small .mouse').delay(1000).animate({'opacity':'0'},100);
        
                    $('.ani-wrap.x-small .eye.left').stop().delay(1000).animate({scale:'0','top':'13px'},100);
            
                    $('.ani-wrap.x-small .eye.right').stop().delay(1000).animate({scale:'0','top':'13px'},100);
            
                    $('.ani-wrap.x-small .riborn').stop().delay(1000).animate({rotate:'-45deg','top':'48%'},300,totalXsmallani);
                });
            });
        });
    }
    
    totalBigani ();
    totalSmallani ();
    totalXsmallani();
    


});



