
$(document).ready(function(){
    $("#lp_ad").mouseleave(function(){
        $(".lp-img6").fadeTo(2000,0.5);
    })
    $("#lp_ad").mouseenter(function(){
        $(".lp-img6").fadeTo(2000,1);
    })
})
window.onload=function(){
    lp_mf();
    lp_sq();
};
function lp_mf(){
    var lp_ad=document.getElementById("lp_ad");
    var imgs=document.getElementById("lp_ad").getElementsByTagName("img");
    animate(imgs[0],{"left":240,"top":150},function(){
        animate(imgs[1],{"left":600,"top":150},function(){
            animate(imgs[2],{"left":730,"top":100},function(){
                animate(imgs[3],{"left":830,"top":150},function(){
                    animate(imgs[4],{"left":750,"top":350},function(){
                        animate(imgs[6],{"opacity":1},function(){
                        })
                    })
                })
            })
        })
    })
};
function lp_sq(){
    var lp_content=document.getElementById("lp_content");
    var i_lp=document.getElementById("i_lp");
    animate(i_lp,{"left":10,"top":-23},function(){

    });
};
$(document).ready(function(){
    $(".lp_imgs").mouseenter(function(){
        $(this).css({"transform":"rotateY(180deg)","transition":"5s"})
    });
    $(".lp_imgs").mouseleave(function(){
        $(this).css({"transform":"rotateY(0deg)","transition":"3s"})
    });
})
