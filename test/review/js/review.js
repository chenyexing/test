 /**
 * Created by Administrator on 2016/8/15 0015.
 */

 function onReady(){
     var curIndex = 0;
     var timeInterval = 3500;
     var arr = new Array();
     arr[0] = "img/wb-1.jpg";
     arr[1] = "img/wb-2.jpg";
     arr[2] = "img/wb-3.jpg";
     arr[3] = "img/wb-4.jpg";
     arr[4] = "img/wb-5.jpg";
     arr[5] = "img/wb-6.jpg";
     arr[6] = "img/wb-7.jpg";
     setInterval(changeImg,timeInterval);
     function changeImg() {
         var obj = document.getElementById("obj");
         if (curIndex == arr.length-1) {
             curIndex = 0;
         } else {
             curIndex += 1;
         }
         obj.src = arr[curIndex];
     }

     var curIndexskb = 0;
     var timeIntervalskb = 3500;
     var arrskb = new Array();
     arrskb[0] = "img/skb-1.jpg";
     arrskb[1] = "img/skb-2.jpg";
     arrskb[2] = "img/skb-3.jpg";
     arrskb[3] = "img/skb-4.jpg";
     arrskb[4] = "img/skb-5.jpg";
     arrskb[5] = "img/skb-6.jpg";
     setInterval(changeImgskb,timeIntervalskb);
     function changeImgskb() {
         var obj = document.getElementById("y-skb");
         if (curIndexskb == arrskb.length-1) {
             curIndexskb = 0;
         } else {
             curIndexskb += 1;
         }
         obj.src = arrskb[curIndexskb];
     }

     var d=document.getElementById("text");
     var dtx= d.getContext("2d");
     dtx.font="25px Arial";
     dtx.fillStyle="crimson";
     dtx.fillText("Hello",20,50);  // fillText 实心字体   20 距离左边的距离  50 距离上边的距离
     dtx.strokeText("Hello",20,100); //strokeText 空心字体
 }

$(function () {
    $(".link-wanbei").click(function () {
        $("[ y-hide='wanbei']").fadeIn();
    });
    $("[ y-hide='wanbei']").click(function () {
        $("[ y-hide='wanbei']").fadeOut();
    });

    $(".y-shht-ol li").mouseover( function( event )
    {
        var index = $(this ).index();
        $(".y-shht-ul li" ).eq(index ).fadeIn().siblings().fadeOut();
        $(this ).addClass("#current" ).siblings().removeClass("#current");
    });
    $(".link-shht").click(function () {
        $(".y-shht").fadeIn();
    });
    $(".y-shht").click(function () {
        $(".y-shht").fadeOut();
    });

    $(".link-yyht").click(function () {
        $(".y-yyht").fadeIn();
    });
    $(".y-yyht").click(function () {
        $(".y-yyht").fadeOut();
    });

    $(".link-skb").click(function () {
        $(".y-skb").fadeIn();
    });
    $(".y-skb").click(function () {
        $(".y-skb").fadeOut();
    });

    $(".link-sdk").click(function () {
        $(".y-sdk").fadeIn();
    });
    $(".y-sdk").click(function () {
        $(".y-sdk").fadeOut();
    })
    
});
