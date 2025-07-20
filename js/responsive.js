/*
var UD_MENU_OPEN = false;

$(document).ready(function(e){
    $('.menu_toggle').stop().click(function(e){
        if (UD_MENU_OPEN === false) {
            UD_MENU_OPEN = true;
            $('.menu_open').stop().slideUp(500);
            $('.menu_close').stop().slideDown(500);
            document.getElementByID('sidebar').classList.toggle('active');
        } else {
            UD_MENU_OPEN = false;
            $('.menu_close').stop().slideUp(500);
            $('.menu_open').stop().slideDown(500);

        }
    });
}); */
$(document).ready(function () {
    $(document).delegate('.open', 'click', function (event) {
        $(this).addClass('oppenned');
        event.stopPropagation();
    })
    $(document).delegate('body', 'click', function (event) {
        $('.open').removeClass('oppenned');
    })
    $(document).delegate('.cls', 'click', function (event) {
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });
});
