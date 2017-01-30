$(document).ready(function() {
    $("li>a").hover(function() {
        $(this).css({ "text-shadow": "2px 2px white" });
    })
    $("li>a").mouseout(function() {
        $(this).css({ "text-shadow": "none" });
    })
    $("div#logo").hover(function() {
        $("div#menu-popup").fadeIn();
        $("#animate").animate({ left: "-10em", opacity: '0.7' }, "fast");

    })
    $("div#menu-popup").mouseout(function() {
        $(this).fadeOut(); //css("display", "none");
        $("#animate").animate({ left: "35em", opacity: '0.2' }, "fast");
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