$(document).ready(function() {
    $('#welcome')
});

$('#welcome').hover(function() {
    $('#welcome').css({ "color": "yellow", "font-size": "50px" });
});

$("div#logo").click(function() {
    $("div#menu-popup").css("display", "block");
})
$("div#menu-popup").mouseout(function() {
    $("div#menu-popup").css("display", "none");
});


$("div#convertions").hover(function() {
    $("div#convertions ul#temperature").css("display", "block");
    $("div#convertions ul#weigth").css("display", "block");
});
$("div#convertions").mouseout(function() {
    $("div#convertions ul#temperature").css("display", "none");
    $("div#convertions ul#weigth").css("display", "none");
});