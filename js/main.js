;(function(){
	let sticky = false
	console.log($(window).height());
	$(window).scroll(()=>{
		console.log(isInbottom())
	})

// por defecto los elementos son constantes a menos de que vayan a cambiar	
	function isInbottom(){
		// $description está asignada al id description y por como es constante ya no puede cambiar de valor
		const $description = $("#description")
		//recibo la altura del elemento description obtenido en la línea anterior
		const descriptionHeight = $description.height()
		return $(window).scrollTop() > $(window).height() - descriptionHeight;
	}
})()