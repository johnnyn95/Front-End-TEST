$(document).ready(function() {
    $("li>a").hover(function() {
        $(this).css({ "text-shadow": "2px 2px white" });
    })
    $("li>a").mouseout(function() {
        $(this).css({ "text-shadow": "none" });
    })
    $("div#logo").hover(function() {
        $("div#menu-popup").fadeIn("slow"); //css("display", "block");
    })
    $("div#menu-popup").mouseout(function() {
        $(this).fadeOut("slow"); //css("display", "none");
    });

    $("div#convertions").hover(function() {
        $("div#convertions ul#temperature").show("slow"); //css("display", "block");
        $("div#convertions ul#weigth").show("slow"); //css("display", "block");
        $("div#convertions").css({ "background-color": "lightblue", "border-bottom": "solid 0.25em black", "height": "15em" });
    });
    $(".nav-bar").content().mouseout(function() {
        $("div#convertions").css({ "background-color": "lightblue", "border-bottom": "solid 0.25em black", "height": "2em" });
        $("div#convertions ul#temperature").hide("slow");
        $("div#convertions ul#weigth").hide("slow");

    });
});