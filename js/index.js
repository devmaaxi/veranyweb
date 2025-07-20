// elements
var $page = $('.page');

$('.menu_toggle').on('click', function () {
    $page.toggleClass('shazam');
});
$('.navigation').on('click', function () {
    $page.removeClass('shazam');
});
$('.content').on('click', function () {
    $page.removeClass('shazam');
});
