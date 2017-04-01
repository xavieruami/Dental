;(function(){

	let sticky = false
	$("#stiky-navigation").removeClass("hidden")
	$("#stiky-navigation").slideUp(0)
	$(window).scroll(()=>{
		const inBottom = isInBottom()
		if (inBottom && !sticky){
			//mostrar la navegación stiky
			sticky = true
			stickNavigation()
		}
		if(!inBottom && sticky){
			//ocultar la navegación stiky
			sticky = false
			unStickNavigation()
		}
	})

	function stickNavigation(){
		$("#description").addClass ("fixed").removeClass("absolute")//cambia la posición a fixed
		$("#navegation").slideUp("fast")
		$("#stiky-navigation").slideDown("fast")
	}

	function unStickNavigation(){
		$("#description").removeClass ("fixed").addClass("absolute")//cambia la posición a fixed
		$("#navegation").slideDown("fast")
		$("#stiky-navigation").slideUp("fast")
	}


//esta función regresa verdadero desde que alcanzamos el footer de la página aunque nos pasemos
	function isInBottom(){
		const $description = $("#description")
		const descriptionHeight = $description.height()
		return $(window).scrollTop() > $(window).height() - (descriptionHeight*2)
	}
})()
