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
