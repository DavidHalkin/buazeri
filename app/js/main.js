$(document).ready(function (){
	 $(".mob__js").click(function () {
        $(".nav_bar__js").addClass("opened");
        $("body").addClass("overflow");
    });
    $(".close_js").click(function () {
        $(".nav_bar__js").removeClass("opened");
        $("body").removeClass("overflow");
    });
})