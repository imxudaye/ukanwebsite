$(document).ready(function () {
    //��¡�ֲ�ͼ���һ��
    var i = 0;
    var clone = $(".bannerbox ul li").first().clone();
    $(".bannerbox ul").append(clone);
    var size = $(".bannerbox ul li").size();
    console.log(size);
    //��껬��СԲ��
    for(var j = 0; j<size-1;j++){
        $(".bannerbtn ul").append("<li></li>")
    }
    $(".bannerbtn ul li").first().addClass("btnon");
    $(".bannerbtn ul li").hover(function(){
        var index= $(this).index();
        $(".bannerbox ul").stop().animate({left:-index*1920},500)
        $(this).addClass('btnon').siblings().removeClass('btnon');
    });
    //�����ֲ�������ͣ�ֲ�
    $(".banner").hover(function(){
        clearInterval(t);
        $(".control span").fadeIn();
    },function(){
        t = setInterval(function () {
            i++;
            move()
        }, 5000);
        $(".control span").fadeOut();
    });

    //�ֲ�������ʼ

    function move(){
        if(i==size){

            $(".bannerbox ul").css({left:0});
            i=1;
        }
        if(i == -1){
            $(".bannerbox ul").css({left:-1920*(size-1)});
            i=size-2;

        }

        $(".bannerbox ul").stop().animate({left:-1920*i},500)

        if(i==size-1){
            $(".banner .num li").eq(0).addClass('btnon').siblings().removeClass('btnon');
        }else {
            $(".banner .num li").eq(i).addClass('btnon').siblings().removeClass('btnon');
        }
    }
    //��ʱ��

    var t = setInterval(function () {
        i++;
        move()
    }, 5000);
    //���Ұ�ť
    $(".control .right").click(function () {
        i++;
        move();
    })
    /* ����İ�ť */
    $(".control .left").click(function () {
        i--;
        move();
    })



    //ר��
    $(".tab ul li").hover(function () {
        $(this).addClass("tabon").siblings().removeClass("tabon");
        var index = $(this).index();
        $(".tab div").eq(index).addClass("tabactive").siblings().removeClass("tabactive");

    });
    $(".filmbox1").hover(function () {
        $(".filmbox1 .filmmask").stop().fadeIn();
    }, function () {
        $(".filmbox1 .filmmask").stop().fadeOut();
    });

    $(".filmbox2").hover(function () {
        $(".filmbox2 .filmmask").stop().fadeIn();
    }, function () {
        $(".filmbox2 .filmmask").stop().fadeOut();
    });
    $(".col-md-2").hover(function () {
        $(this).children().addClass("dianshijuboxon").parent().siblings().children().removeClass("dianshijuboxon");
    }, function () {
        $(".dianshijubox").removeClass("dianshijuboxon");
    })

    $(".icon-weixin").hover(function () {

        $(".erweima").stop().fadeIn();
    }, function () {
        $(".erweima").stop().fadeOut();
    })
//    tab
    $(".tabul li").hover(function(){
        var index = $(this).index();
        $(this).children().css("display","block").parent().siblings().children().css("display","none");
        $(this).addClass("tablion").css("color","white").siblings().removeClass("tablion").css("color","black");
        $(".tabbox").eq(index).css("display","block").siblings().css("display","none");
    })
    $(".tabul1 li").hover(function(){
        var index = $(this).index();
        $(this).children().css("display","block").parent().siblings().children().css("display","none");
        $(this).addClass("tablion1").css("color","white").siblings().removeClass("tablion1").css("color","black");
        $(".tabbox1").eq(index).css("display","block").siblings().css("display","none");
    })
});

