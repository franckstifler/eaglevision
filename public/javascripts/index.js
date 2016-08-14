$(document).ready(function(){
	$('.carousel').carousel({
		duration: 5000
	});
	//smooth scroll of the site
	$('.carousel-caption a').on('click', function(evt){
		if(this.hash !== ""){
			evt.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset.top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	});
});