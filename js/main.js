
$(function () {

    $(".hamburger").on("click", function () {
        $("header").toggleClass("open");
    });

    $("#header_nav a").on("click", function () {
        $("header").toggleClass("open");
    });

    $(document).ready(function () {
        $(".hamburger").click(function () {
            $(".nav_menu").toggleClass("open"); // メニューの開閉
            $(".site_title").toggleClass("hide"); // site_titleを非表示
            $(".header_inner").toggleClass("transparent"); // 背景色を解除
        });
    });
        
    
});


