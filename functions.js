$(window).scroll(function() {
    if ($(window).scrollTop()) {
        $("nav").addClass("bluenav");
    } else {
        $("nav").removeClass("bluenav");
    }
});