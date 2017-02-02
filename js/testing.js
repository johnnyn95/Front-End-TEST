$(document).ready(function() {
    $("#logo").hover(function() {
        $("#logo>img").attr("src", "/imgs/logo-cube.png");
    });
    $("#logo").mouseout(function() {
        $("#logo>img").attr("src", "/imgs/logo-cube-gray.png");
    });
});