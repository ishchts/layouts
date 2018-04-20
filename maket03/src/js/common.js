$(document).ready(function(){
	$(document).ready(function(){
		$('.socialSlider').slick({
			arrows: true,
			dots: false,
			autoplay: true,
			speed: 222
		});
	});

	$(document).on('click', '.js-pricingCards__item', function(){
		var pricingCard = $('.pricingCards__item');
		for(var i = 0; i < pricingCard.length; i ++ ){
			pricingCard.removeClass('pricingCards__item--current');
			$(this).addClass('pricingCards__item--current');
		}

	})
})
