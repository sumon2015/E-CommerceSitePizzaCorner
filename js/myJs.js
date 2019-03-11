/*

*/



$(document).ready(function(){


//  slider controls..

$('.bxslider').bxSlider({
				auto: true,
				autoControls:false,
				pager:false,
				captions: true,
				//useCSS: true,
				//easing: 'easeOutElastic',
				//pause: 3000,
				// speed: 500
				});
				

// Dropdown menu js
				
				
$('ul li').click(function(){
    $(this).find('ul li').stop().slideToggle(500);
});

$('.button').click(function(){
    $('.bmenu').slideToggle(1000);
});

    
    
// Mobile Menu click functions......
    

    $(".mobile_menu").click(function(){
        $(".menuArea").slideToggle();
    });
    

// ========== Lazy Load Image function ==============
  
  $("img.lazy").show().lazyload();
				
	$("img.lazy").lazyload({
		effect : "fadeIn",
		// threshold : 200, // it's means image will be ready before 200px 
		//event : "click",
	}); 
	

// ============== End Lagy Load ==============


    var s = $("#sticker");
				var pos = s.position();					   
				$(window).scroll(function() {
					var windowpos = $(window).scrollTop();
					if (windowpos >= pos.top) {
						s.addClass("stick");
					} else {
						s.removeClass("stick");	
							}
						});
						
    
    
    
    
});







