$(function() {


	// Smooth Scroll to block
	$('a[href^="#l"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false; 
   });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        css3: true,
        navigationPosition: 'left',
        navigationTooltips: false,
        responsiveWidth: 770,               
        scrollingSpeed: 1700,               
        afterResponsive: function(isResponsive){
            
        }
    });
});