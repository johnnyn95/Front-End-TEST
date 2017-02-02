$(document).ready(function() {
    $("#logo").hover(function() {
        $("#logo>img").attr("src", "/imgs/logo-cube.png");
    });
    $("#logo").mouseout(function() {
        $("#logo>img").attr("src", "/imgs/logo-cube-gray.png");
    });

    $(".page-header  *").hover(function() {
        $(".jumbotron").css("background-color", "gray");
        $(".jumbotron>h1").css("color", "white");
    });
    $(".page-header  *").mouseout(function() {
        $(".jumbotron").removeAttr('style');
        $(".jumbotron>h1").removeAttr('style');
    });
});