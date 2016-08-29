$(document).ready(function(){
	$('ul.nav li').on('click', function(){
		$('ul.nav li.active').removeClass('active');
		$(this).addClass('active');
	});
	$('.carousel').carousel({
		duration: 3000
	});
	//wow js
	(function(){
		new WOW().init();
	})();
	//smooth scroll of the site
	$('.carousel-caption a').on('click', function(evt){
		if(this.hash !== ""){
			evt.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1000, function(){
				window.location.hash = hash;
			});
		}
	});
});