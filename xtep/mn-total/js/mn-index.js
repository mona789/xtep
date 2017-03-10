/**
 * Created by lenovo on 2016/12/8.
 */
var mn_nav = document.getElementById("mn_nav");
var mn_imgs = mn_nav.children;
var timer = null;
var mn_content = document.getElementById("mn_content");
var mn_doushi = mn_content.children[0];
var mn_sport = document.getElementById("mn_sport");
var mn_football = document.getElementById("mn_football");
var mn_way = document.getElementById("mn_way");
var mn_ul = document.getElementById("mn_ul");
var mn_lis = mn_ul.getElementsByTagName("li");
var mn_pic1 = mn_ul.getElementsByTagName("img");
var mn_div = document.getElementsByClassName("mn_word");
for (var i = 0; i < mn_lis.length; i++) {
    mn_lis[i].onmouseover = function () {
        for (var j = 0; j < mn_lis.length; j++) {
            mn_lis[j].style.backgroundImage = "";
        }
        this.style.backgroundImage = "url(images/chover.jpg)";
    }
}


setInterval(function () {
    //  人物效果 begin
    var mn_imgLeft = Math.random() * 60 + 294;
    var mn_imgTop = Math.random() * 5 + 180;
    mn_imgs[0].style.left = mn_imgLeft + "px";
    mn_imgs[0].style.top = mn_imgTop + "px";
    //人物效果   end

    // logo标签  begin
    //logo 标签 end

}, 1000);
//鞋子标签  begin
var leader = -433;
var target = 0;
timer = setInterval(function () {
    var step = (target - leader) / 10;
    step = step > 0 ? parseInt(Math.ceil(step)) : parseInt(Math.floor(step));
    leader = leader + step;
    mn_imgs[2].style.top = leader + "px";
    if (target == leader) {
        clearInterval(timer);
        setInterval(function () {
            var mn_imgTop = Math.random() * (-10);
            mn_imgs[2].style.top = mn_imgTop + "px";
        }, 800)
    }
//console.log(leader)
}, 60);
//鞋子标签  end
//重庆动力 begin
animate(mn_imgs[4], {"opacity": 1}, function () {
    animate(mn_imgs[4], {"left": 0})
});


//重庆动力  end
//内容图片 begin
for (var i = 0; i < mn_pic1.length; i++) {
    mn_pic1[i].onmouseover = function () {
        //console.log(i)
        this.style.transform = "rotateY(180deg)";
        this.style.transition = "5s";
    };

    mn_pic1[i].onmouseout = function () {
        this.style.transform = "rotateY(0deg)";
        this.style.transition = "3s";
    }
}

//内容图片 end
//都市系列图标begin
animate(mn_doushi, {"right": 966});
//都市系列图标 end
//缓动动画封装好的函数  begin
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {//opacity要特殊处理
                //opacity没有单位 参与运算自动转换成数值 所以不用parsetInt
                //取值范围 0-1 0.1 0.33 33 为了让以前的计算公式生效 要扩大100倍
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = (leader + step) / 100;
                obj.style[k] = leader;//opacity没有单位
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];//层级不需要渐变 直接设置即可
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 100);
}
//缓动动画封装好的函数  end
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}