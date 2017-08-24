$(document).ready(function(){
	$('.btn-mio').click(function(){
		var numeroTarjeta = $('.j-input').val();
		var compilado = numeroTarjeta.substring(8);
		var mes = $('#mes').val();
		var anio = $('#anio').val();

		$('.tarjeta').append(compilado);
		console.log(compilado);

		if(numeroTarjeta.length == 0 || numeroTarjeta == undefined){
			alert('Favor, ingrese un numero de tarjeta')
		}else if(numeroTarjeta.length < 16) {
			alert('Favor, ingrese un numero de tarjeta valido')
		}else if(mes == undefined && anio == undefined){
			alert('favor ingresa la fecha de su tarjeta')
		}else{
			$('.titulo-1').hide();
			$('.titulo-2').show();
			$('.parrafo').hide();
			$('.escanear').hide();
			$('.input-1').hide();
			$('.input-2').show();
			$('.fecha-v').hide();
			$('.btn-mio').hide();
			$('.btn-regis').show();	
			$('.contenedor-tarjeta').show();
			$('.scan').hide();
		}

		/*var mes = $('#mes').val();
		var anio = $('#anio').val();
		
		$('#mes').blur(function(){
			if(mes == '' || anio == ''){
			alert('favor completa los campos')
		}else if(mes != 01 || mes != 02 /*|| mes !== '03' || mes !== '04' || mes !== '05' || mes !== '06' || mes !== '07' || mes !== '08' || mes !== '09' || mes !== '10' || mes !== '11' || mes !== '12'){
			/*console.log(mes)
			console.log(anio)
			alert('Debe ingresar un mes valido <br> ejemplo: 01, 02, etc.')
			return true;
		}/*else if(anio != 17 || anio != 18 /*|| anio !== '19' || anio !== '20' || anio !== '21' || anio !== '22' || anio !== '23' || anio !== '24'){*/
			/*alert('debe ingresar un anio valido <br> ejemplo: 17, 18, etc.')
			return true;
		}*//*else{
			$('.titulo-1').hide();
			$('.titulo-2').show();
			$('.parrafo').hide();
			$('.escanear').hide();
			$('.input-1').hide();
			$('.input-2').show();
			$('.fecha-v').hide();
			$('.btn-mio').hide();
			$('.btn-regis').show();	
			$('.contenedor-tarjeta').show();
			$('.scan').hide();
		}
	})*/
		
	})
	$('.input-2').hide();
	$('.titulo-2').hide();
	$('.btn-regis').hide();
	$('.contenedor-tarjeta').hide();

	/**PARTE VANESSA PEREZ**/

	/*funcionamiento del slider index1*/
	$('.slider').slider();
	
	/*funcionamiento de generación del codigo index2*/
	$('#btn2').hide();
	
	$("#btn1").click(function(){
		var fono = $("#number").val();
		var numero = /^[0-9]{9}$/;

		if(!numero.test(fono)){
			$("#mensaje").fadeIn("slow");           
               return false;
        }else{
          $("#mensaje").fadeOut();
            localStorage.setItem('phon', fono);
        }       
        if($('#test5').prop('checked')){
        	$("#mensaje2").fadeOut();
    		var test = true;
    		localStorage.setItem('testing', test);
		}else{
			$("#mensaje2").fadeIn("slow"); 
			test = false;         
             return false;
		}		

		$("#btn1").hide();
		$("#btn2").show();
		return true;		
	})	
	$('#btn2').hide();
	$("#btn2").click(function(){
		var num2 = localStorage.getItem('phon');
		console.log(num2);
		var test2 = localStorage.getItem('testing');
		console.log(num2);
		var codigo2 = localStorage.getItem('codigo'); 
		console.log(codigo2);

		console.log("hello");

		$.ajax({
			url: '/api/registerNumber',
			type: 'POST',
			data: {'terms': test2, 'phone': num2}
		})

		.done(function(respuesta){
			console.log('success');
			alert(respuesta.data.code);	
			var cod = (respuesta.data.code);
			localStorage.setItem('codigo', cod);	
		})	

		.fail(function(){
			console.log("error");
			console.log(respuesta);		
		})
	})
	/**FIN PARTE VANESSA PEREZ**/
})