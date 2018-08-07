$(document).ready(function (){
	 $(".btn_menu__js").click(function () {
        $(".nav_bar__js").addClass("opened");
    });
    $(".close_btn__js").click(function () {
        $(".nav_bar__js").removeClass("opened");
    });
})