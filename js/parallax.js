$(document).ready(function(){
	$(window).scroll(function(){ //Obtenemos el evento del Scroll
		var windowWidth = $(window).width(); //Obtenemos el ancho de la ventana

		if(windowWidth > 800){
			var scroll = $(window).scrollTop(); //Guardamos la posicion del scroll con referencia a top

		// - header
			$('header .textos').css({
				'transform': 'translate(0px,' + scroll / 2 + '%)'
				//translate(horizontal, verticalmente) va a ir cambiando el porentaje dependiendo al valor
			});

		// - Accerca de
			$('.acerca-de article').css({
				'transform': 'translate(0px, -' + scroll / 4 + '%)'
			});
		}
	});

	$(window).resize(function(){ //Si el usuario por casualidad voltea la pantalla
		var windowWidth = $(window).width();
		if(windowWidth < 800){
			$('.acerca-de article').css({
				'transform': 'translate(0px, 0px)' //resutauramos el translate para que el article no se monte en el header
			});
		}
	});
});