$(document).ready(function () {

    $('#datepicker').datepicker({
        language: 'ar',
        format: 'yyyy-mm-dd'
    });

    $(".top-nav .noti").click(function () {
        $(".notifications").css("left", "0");
        $("body, html").css("overflow-y", "hidden");
    })

    $(".notifications .content .back").click(function () {
        $(".notifications").css("left", "-100%");
        $("body, html").css("overflow-y", "auto");
    })

    $("#menu").click(function () {
        if ($(".app-menu").hasClass("opened"))
            $(".app-menu").removeClass("opened");
        else
            $(".app-menu").addClass("opened");
    })

    $("nav a.active").click(function () {
        $(".app-menu").removeClass("opened");
    })
})