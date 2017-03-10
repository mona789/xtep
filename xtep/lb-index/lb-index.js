$(document).ready(function () {
    //flash切换显示
    var showNum = 6;
    $(".toggle li").bind("click", function () {
        var Num = $(this).text();
        var List_ul = $(this).parent().parent().next();
        var obj_ul = $(List_ul).find("ul").eq((Num - 1));
        $(this).parent().find("li").removeClass("li_on");
        $(this).addClass("li_on");
        if ($(obj_ul).html() == "") {
            $(obj_ul).html("<li class='loading_01'>数据加载中,请稍后....</li>");
            $.ajax({
                url: "/idata/Return_ajax.aspx?fac=getindex&id=" + $(List_ul).attr("id") + "&start=" + ((Num - 1) * showNum) + "&end=" + (Num * showNum),
                async: false,
                success: function (html) {
                    $(obj_ul).html(html);
                }
            })
        }
        $(List_ul).find("div").animate({
            marginLeft: "-" + (705 * (Num - 1)) + "px"
        }, 500);
    });

//首页flash广告
    Flash_Ad();
    $(".DadR").each(function () {
        if ($(this).html() == "") {
            $(this).css({height: "0px"});
        }
    });
    $(".DadL").each(function () {
        if ($(this).html() == "") {
            $(this).css({height: "0px"});
        }
    });
    $(".Dad").each(function () {
        if ($(this).html() == "") {
            $(this).css({height: "0px"});
        }
    });
});

function Flash_Ad() {
    var defaultOpts = {interval: 5000, fadeInTime: 300, fadeOutTime: 200};
    var _titles = $("ul.slide_txt li");
    $(_titles).eq(0).addClass("li_on");
    var _titles_bg = $("ul.bg li");
    $(_titles_bg).eq(0).addClass("li_on");
    var _bodies = $("ul.slide-pic li");
    $(_bodies).eq(0).addClass("li_on");
    var _count = $(_titles).size();
    var _current = 0;
    var _intervalID = null;
    var stop = function () {
        window.clearInterval(_intervalID);
    };
    var slide = function (opts) {
        if (opts) {
            _current = opts.current || 0;
        } else {
            _current = (_current >= (_count - 1)) ? 0 : (++_current);
        }
        ;
        _bodies.filter(":visible").fadeOut(defaultOpts.fadeOutTime, function () {
            _bodies.eq(_current).fadeIn(defaultOpts.fadeInTime);
            _bodies.removeClass("li_on").eq(_current).addClass("li_on");
        });
        _titles.removeClass("li_on").eq(_current).addClass("li_on");
        _titles_bg.removeClass("li_on").eq(_current).addClass("li_on");
    };
    var go = function () {
        stop();
        _intervalID = window.setInterval(function () {
            slide();
        }, defaultOpts.interval);
    };
    var itemMouseOver = function (target, items) {
        stop();
        var i = $.inArray(target, items);
        slide({current: i});
    };
    _titles.hover(function () {
        if ($(this).attr('class') != 'li_on') {
            itemMouseOver(this, _titles);
        } else {
            stop();
        }
    }, go);
    _bodies.hover(stop, go);
    go();
}


// 小动画
window.onload = function () {
    var oBtnLeft = document.getElementById("goleft");
    var oBtnRight = document.getElementById("goright");
    var oDiv = document.getElementById("indexmaindiv");
    var oDiv1 = document.getElementById("maindiv1");
    var oUl = oDiv.getElementsByTagName("ul")[0];
    var aLi = oUl.getElementsByTagName("li");
    var now = -2 * (aLi[0].offsetWidth + 16);
    oUl.style.width = aLi.length * (aLi[0].offsetWidth + 16) + 'px';
    oBtnRight.onclick = function () {
        var n = Math.floor((aLi.length * (aLi[0].offsetWidth + 16) + oUl.offsetLeft) / aLi[0].offsetWidth);

        if (n <= 2) {
            move(oUl, 'left', 0);
        }
        else {
            move(oUl, 'left', oUl.offsetLeft + now);
        }
    }
    oBtnLeft.onclick = function () {
        var now1 = -Math.floor((aLi.length / 2)) * 2 * (aLi[0].offsetWidth + 13);

        if (oUl.offsetLeft >= 0) {
            move(oUl, 'left', now1);
        }
        else {
            move(oUl, 'left', oUl.offsetLeft - now);
        }
    }
    var timer = setInterval(oBtnRight.onclick, 5000);
    oDiv.onmouseover = function () {
        clearInterval(timer);
    }
    oDiv.onmouseout = function () {
        timer = setInterval(oBtnRight.onclick, 5000);
    }

};

function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    }
    else {
        return getComputedStyle(obj, false)[name];
    }
}

function move(obj, attr, iTarget) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        var cur = 0;
        if (attr == 'opacity') {
            cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
        }
        else {
            cur = parseInt(getStyle(obj, attr));
        }
        var speed = (iTarget - cur) / 6;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (iTarget == cur) {
            clearInterval(obj.timer);
        }
        else if (attr == 'opacity') {
            obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
            obj.style.opacity = (cur + speed) / 100;
        }
        else {
            obj.style[attr] = cur + speed + 'px';
        }
    }, 20);
}

//右侧小动画
function b() {
    h = $(window).height();
    t = $(document).scrollTop();
    if (t > h) {
        $('#gotop').show();
    } else {
        $('#gotop').hide();
    }
}

$(document).ready(function (e) {
    b();
    $('#gotop').click(function () {
        $(document).scrollTop(0);
    });
    $('#code').hover(function () {
        $(this).attr('id', 'code_hover');
        $('#code_img').show();
    }, function () {
        $(this).attr('id', 'code');
        $('#code_img').hide();
    })

});

$(window).scroll(function (e) {
    b();
})
