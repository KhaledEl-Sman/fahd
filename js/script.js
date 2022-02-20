$(document).ready(function () {
    $('.home .more').click(function () {
        $(this).hide(250);
        $(this).parent().next().css('max-height', '1000px');
        $(this).parent().parent().find('.less').show(250);
    })
    $('.home .less').click(function () {
        $(this).hide(250);
        $(this).parent().prev().css('max-height', '0px');
        $(this).parent().parent().find('.more').show(250);
    })

    let menu = true;
    $('.menu .open').click(function () {
        if (menu) {
            $('.menu').css('left', 'calc(25%');
            $('.menu .open i').css('transform', 'rotate(180deg)');
            menu = false;
        } else {
            $('.menu').css('left', 'calc(100% - 25px');
            $('.menu .open i').css('transform', 'rotate(0deg)');
            menu = true;
        }
    })

    let currentdate = new Date();
    let datetime = "" + currentdate.getFullYear() + "-"
        + (currentdate.getMonth() + 1) + "-"
        + currentdate.getDate() + "T"
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    $("#datey").attr("min", datetime);

})