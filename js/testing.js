$(document).ready(function() {
    /*
    $("#logo *").hover(function() {
        $("#logo>a>img").attr("src", "/imgs/logo-cube.png");
    });
    $("#logo *").mouseout(function() {
        $("#logo>a>img").attr("src", "/imgs/logo-cube-gray.png");
    });

    $(".page-header  *").hover(function() {
        $("#welcome").fadeOut(2000, "swing");
    });
    */

    /* thumbnails  */
    $("a#tmb_currency>*").mouseenter(function() {
        $("p#tmb_currency*").fadeOut(1000);
    });
    $("a#tmb_currency> ").mouseleave(function() {
        $("p#tmb_currency ").fadeIn(1000);
    });

    $("a#tmb_weight>*").hover(function() {
        $("p#tmb_weight").fadeOut(1000);

    });
    $("a#tmb_weight>*").mouseout(function() {
        $("p#tmb_weight").fadeIn(1000);
    });

    $("a#tmb_length>*").hover(function() {
        $("p#tmb_length").fadeOut(1000);

    });
    $("a#tmb_length>*").mouseout(function() {
        $("p#tmb_length").fadeIn(1000);
    });

    $("a#tmb_area>*").hover(function() {
        $("p#tmb_area").fadeOut(1000);

    });
    $("a#tmb_area>*").mouseout(function() {
        $("p#tmb_area").fadeIn(1000);
    });

    $("a#tmb_volume>*").hover(function() {
        $("p#tmb_volume").fadeOut(1000);

    });
    $("a#tmb_volume>*").mouseout(function() {
        $("p#tmb_volume").fadeIn(1000);
    });




    /* welcome test
    $(".page-header  *").hover(function() {
        $(".jumbotron").css("background-color", "gray");
        $(".jumbotron>h1").css("color", "white");
    });
    
    $(".page-header  *").mouseout(function() {
        $(".jumbotron").removeAttr('style');
        $(".jumbotron>h1").removeAttr('style');
    });
    */
});