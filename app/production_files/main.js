$(document).ready(function (){
	 $(".btn_menu__js").click(function () {
        $(".nav_bar__js").addClass("opened");
    });
    $(".close_btn__js").click(function () {
        $(".nav_bar__js").removeClass("opened");
    });
    $('.gall__js').owlCarousel({
	    // loop:true,
	    margin:10,
	    nav:true,
	    dots:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	});
})