$(document).ready(function(){
	$(document).on('click', '.js-nav a', function(e){
		e.preventDefault();
		var fixed_offset = 100;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
	});

})
