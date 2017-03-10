/**
 * Created by asus on 2016/12/8.
 */
window.onload = function () {

    //制噪生活
    var live = document.getElementById("live");
    var background = document.getElementById("background");

    animate(live, {"width": 0, "height": 0, "top": 350, "left": 0}, function () {
        animate(live, {"width": 283, "height": 99, "top": 300, "left": 550}, function () {
                animate(live, {"opacity": 0}, show);
            }
        )
    })


    setInterval(function(){
        animate(background,{"opacity": 1} )
    },500)

    function hide() {
        animate(live, {"opacity": 0}, show);
    }

    function show() {
        animate(live, {"opacity": 1}, hide);
    }

    //轮播图
    var liangScreen = document.getElementById("liangScreen");
    var ul = liangScreen.children[0];
    var ulLis = ul.children;
    var liangFraction = document.getElementById("liangFraction");
    var ol = liangFraction.children[0];
    var olLis = ol.children;
    var liangLeft = document.getElementById("liangLeft");
    var liangRight = document.getElementById("liangRight");
    var liangMovemap = document.getElementById("liangMovemap");
    var imgWidth = liangScreen.offsetWidth;
    console.log(imgWidth);
    var timer = null;
    //鼠标移动到上面  显示隐藏
    liangMovemap.onmouseover = function () {
        liangFraction.style.display = "block";
        clearInterval(timer);
    }
    liangMovemap.onmouseout = function () {
        liangFraction.style.display = "none";
        timer = setInterval(function () {
            nextMap();
        }, 3000)
    }
    //生成第一张图片
    var firstImg = ulLis[0].cloneNode(true);
    ul.appendChild(firstImg);
    for (var i = 0; i < olLis.length; i++) {
        olLis[i].index = i;
        olLis[i].onmouseover = function () {
            for (var j = 0; j < olLis.length; j++) {
                olLis[j].className = "";
            }
            this.className = "current";
            var target = -this.index * imgWidth;
            animatemap(ul, target);
            pic = this.index;
            square = this.index;
        }
    }

    var pic = 0;//能从开始就让小按钮变色  没有就不能从开始变色
    var square = 0;  //能从开始就让小按钮变色  没有就不能从开始变色
    liangRight.onclick = function () {
        nextMap();
    }
    liangLeft.onclick = function () {
        if (pic == 0) {
            ul.style.left = -imgWidth * olLis.length + "px";
            pic = olLis.length;
        }
        pic--;
        var target = -pic * imgWidth;
        animatemap(ul, target);
        if (square > 0) {
            square--;
        } else {
            square = olLis.length - 1;
        }
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        olLis[square].className = "current";
    }
    function nextMap() {
        if (pic == olLis.length) {

            ul.style.left = 0;
            pic = 0;
        }
        pic++;
        var target = -pic * imgWidth;
        animatemap(ul, target);
        if (square < olLis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        olLis[square].className = "current";
    }

    timer = setInterval(function () {
        nextMap();
    }, 3000)


    //二维码
    var move = document.getElementById("move");
    var map = document.getElementById("map");
    var divs = move.children;
    var timer1 = null;

    move.onmouseover=function(){
        clearInterval(timer1);
        map.style.display="block";
    }
    map.onmouseout=function(){
        timer1=setInterval(play, 500);
        map.style.display="none";
    }


    timer1=setInterval(play, 500);
    function play() {
        for (var i = 0; i < divs.length; i++) {
            var width = parseInt(Math.random() * 25);
            var height = parseInt(Math.random() * 25);
            var top = parseInt(Math.random() * 200);
            var left = parseInt(Math.random() * 150);
            var bdr = parseInt(Math.random() * 50);
            var red = parseInt(Math.random() * 255);
            var green = parseInt(Math.random() * 255);
            var blue = parseInt(Math.random() * 255);
            var opa=(parseInt(Math.random() * 5)+5)/10;
            var bgc = "rgba(" + red + ", " + green + ", " + blue + ","+opa + ")";
            //console.log( "rgb (" + red + ", " + green + ", " + blue + ")");
            animate(divs[i], {"width": width, "height": height, "top": top, "left": left,
                "borderRadius": bdr,  "backgroundColor": bgc,
            });

        }
    }
    //动画
    var cartoon=document.getElementById("cartoon");
    var cartoonUl=cartoon.children[0];

    setInterval(function() {
        var leader = cartoonUl.offsetLeft;
        var step = -3;
        if (leader > -60) {
            leader = leader + step;
            cartoonUl.style.left = leader + "px";
        } else {
            cartoonUl.style.left = 0;
        }
    }, 30);


}