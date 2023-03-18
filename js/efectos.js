$(document).ready(function(){
// --  Efecto Menu
	$('.menu a').each(function(index, elemento){ //A cada elemento...
		$(this).css({
			'top': '-200px'
		});

		$(this).animate({
			top: '0'
		},2000 + (index * 500));//Por cada posicion que se vaya ejecutando ira aumentando el tiempo
	});

// --- Efecto Header
	if( $(window).width() > 800 ){ //Si el ancho de la ventana es mayor a 800px...
		$('header .textos').css({
			opacity: 0,
			marginTop: 0 
		});

		$('header .textos') .animate({
			opacity: 1,
			marginTop: '-52px'
		}, 1500);
	}

// --- Scroll Elementos Menu
	var acercaDe = $('#acerca-de').offset().top, //Obtenemos la distancia respecto al top del documento
		menu = $('#platillos').offset().top,
		galeria = $('#galeria').offset().top,
		ubicacion = $('#ubicacion').offset().top;


	$('#btn-acercaDe').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: acercaDe -100 //Nos lleva al acerca de
		},500);
	});

	$('#btn-menu').on('click', function(e){
		e.preventDefault(); //prevenimos el redireccionamiento de enlace
		$('html, body').animate({
			scrollTop: menu 
		},500);
	});

	$('#btn-galeria').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: galeria 
		},500);
	});

	$('#btn-ubicacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ubicacion
		},500);
	});
});