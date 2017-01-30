$("div#logo").click(function() {
    $("div#menu-popup").css("display", "block");
})
$("div#menu-popup").mouseout(function() {
    $("div#menu-popup").css("display", "none");
});


$("div#convertions").hover(function() {
    $("div#convertions ul#temperature").css("display", "block");
    $("div#convertions ul#weigth").css("display", "block");
    $("div#convertions").css({ "background-color": "lightblue", "border-bottom": "solid 0.25em black", "width": "15em" });
});
$(".nav-bar").mouseout(function() {
    $("div#convertions ul").css("display", "none");
});