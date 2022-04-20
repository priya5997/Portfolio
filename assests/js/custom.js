$( document ).ready(function() {  
  $('.wrapper').empty();
  for(let i=0; i<108; i++){
    $('.wrapper').append('<div class="item"></div>');
  }
  
  document.addEventListener('mousemove', (e) => {	
    const sqrs = document.querySelectorAll('.item');
      
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    
    sqrs.forEach(sqr => {
      const sqrX = sqr.offsetLeft + 10;
      const sqrY = sqr.offsetTop + 10;
  
      const diffX = mouseX - sqrX;
      const diffY = mouseY - sqrY;
      
      const radians = Math.atan2(diffY, diffX);
          
      const angle = radians * 180 / Math.PI;
      
      sqr.style.transform = `rotate(${angle}deg)`;
    })
    
  });
  
});


$('.sAHTI>button').click(function() {
    let current_ele_id = this.id;
    let active_ele = $('.sAHTI>button.deLjYW');

    let current_ele = $('#'+current_ele_id);

    console.log(active_ele);
    console.log(current_ele);

    active_ele.attr('tabindex', '-1');
    active_ele.attr('aria-selected', 'false');
    active_ele.removeClass('deLjYW');
    active_ele.addClass('jBtKSS');
    active_ele.css('border-left', '2px solid darkgrey');

    current_ele.attr('tabindex', '0');
    current_ele.attr('aria-selected', 'true');
    current_ele.removeClass('jBtKSS');
    current_ele.addClass('deLjYW');
    current_ele.css('border-left', '2px solid black');

    let active_ele_id = active_ele[0]['id'];
    


    let current_number = current_ele_id.slice(-1);
    let active_number = active_ele_id.slice(-1);

    console.log(active_number);

    let current_label = $('#panel-' + current_number);
    let active_label = $('#panel-' + active_number);

    console.log(active_label);

    active_label.attr('tabindex', '-1');
    active_label.attr('aria-hidden', 'true');
    active_label.hide();
    // active_label.attr('hidden', 'true');
    active_label.addClass('fade-exit-done');
    active_label.removeClass('fade-enter-done');

    current_label.attr('tabindex', '0');
    current_label.attr('aria-hidden', 'false');
    current_label.show();
    // current_label.attr('hidden', 'false');
    current_label.addClass('fade-enter-done');
    current_label.removeClass('fade-exit-done');

});


;( function( $ ) {
	"use strict";
	
	var $bars = $( ".bar" ),
		methods = {
			init: function() {
				
				// Bind events
				methods.bindEvents();
				
			},
			bindEvents: function() {

				// Loop through each of the bars...
				$bars.each( function() {

					var $bar = $( this ),
						$pct = $bar.find( ".pct" ),
						data = $bar.data( "bar" );

					setTimeout( function() {

						$bar
							.css( "background-color", data.color )
							.animate({
								"width": $pct.html()
							}, data.speed || 3000, function() {

								$pct.css({
									"color": data.color,
									"opacity": 1
								});

							});

					}, data.delay || 0 );			

				});

			}
		};
	
	// Initialize on page load
	methods.init();	
		
})( jQuery );


var multipleCardCarousel = document.querySelector(
  "#carouselExampleControls"
);
if (window.matchMedia("(min-width: 768px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;
  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}


$(document).ready(function () {
  $('.hover-div').hover(function () {
      $('.hover-div').stop().fadeTo('fast', 0.3);
      $(this).stop().fadeTo('fast', 1);
  }, function () {
      $('.hover-div').stop().fadeTo('fast', 1);
  });
});