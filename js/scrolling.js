// Smooth Scrolling Effect by Cykalele
$(function () {

    $('a[href*=#]').stop().click(function () {
        if (location.hostname === this.hostname && location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')) {
            var hashtag = this.hash;
            var target = $(this.hash);
            if (target.length) {
                var difference = target.offset().top;
                $('html, body').animate({
                    scrollTop: difference
                }, 1000, function () {
                    window.location.hash = hashtag;
                });
                return false;
            }
        }

    });
});
