/**
 * Created by Administrator on 2016/12/8.
 */
var box = document.getElementById("box");
var ul = box.children[0];
var lis = ul.children;
var arrow = box.children[1];
var left = arrow.children[0];
var right = arrow.children[1];


window.onload = function () {
    var config = [
        {
            "width": 210,
            "top": 0,
            "left": 308,
            "opacity": 0.2,
            "zIndex": 2
        },//1
        {
            "width": 240,
            "top": 25,
            "left": 131,
            "opacity": 0.4,
            "zIndex": 3
        },//2next.png
        {
            "width": 270,
            "top": 50,
            "left": -9,
            "opacity": 0.6,
            "zIndex": 4
        },//3
        {
            "width": 300,
            "top": 75,
            "left": 118,
            "opacity": 0.7,
            "zIndex": 5
        },//4
        {
            "width": 339,
            "top": 100,
            "left": 344,
            "opacity": 1,
            "zIndex": 6
        },//5
        {
            width: 300,
            top: 75,
            left: 627,
            opacity: 0.7,
            zIndex: 5
        },//4
        {
            "width": 270,
            "top": 50,
            "left": 826,
            "opacity": 0.6,
            "zIndex": 4
        },//3
        {
            width: 240,
            top: 25,
            left: 682,
            opacity: 0.4,
            zIndex: 3
        },//2
        {
            "width": 210,
            "top": 0,
            "left": 526,
            "opacity": 0.2,
            "zIndex": 2
        },//1
    ];
    var flag = true;
    box.onmouseover = function () {
        animate(arrow, {opacity: 1})
    };
    box.onmouseout = function () {
        animate(arrow, {opacity: 0})
    };


    function run() {
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], config[i], function () {
                flag = true;
            });

        }
    }

    run();


    right.onclick = function () {
        flag = false;
        config.push(config.shift());

        run();
    };
    left.onclick = function () {
        flag = false;
        config.unshift(config.pop());
        run();
    }
};
