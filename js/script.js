$(document).ready(function () {

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

    $("button[type='button']").click(function () {
        $(this).prev().css('display', 'flex');
        $("html, body").css("overflow", "hidden");
    })
})

$(document).click(function (e) {
    let container = $(".popup");
    if (container.is(e.target) && container.has(e.target).length === 0) {
        $("html, body").css("overflow", "auto");
        container.css("display", "none");
        console.log(0);
    }
});