// $(window).scroll(function() {

//     if ($(window).scrollTop()) {
//         $("nav").addClass("bluenav");

//     } else {
//         $("nav").
//     }
// });


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        $("nav").addClass("bluenav");
    } else {
        $("nav").removeClass("bluenav");
    }
}