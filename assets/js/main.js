$(document).ready(function(){
	$('.btn-mio').click(function(){
		/*var numeroTarjeta = $('.j-input').val();
		var compilado = numeroTarjeta.substring(8);
		var mes = $('#mes').val();
		var anio = $('#anio').val();

		$('.tarjeta').append(compilado);
		console.log(compilado);

		/*if(numeroTarjeta.length == 0 || numeroTarjeta == undefined){
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
		/*}*/

		var mes = $('#mes').val();
		var anio = $('#anio').val();
		
$('#mes').blur(function(){
	if(mes == '' || anio == ''){
			alert('favor completa los campos')
		}else if(mes != 01 || mes != 02 /*|| mes !== '03' || mes !== '04' || mes !== '05' || mes !== '06' || mes !== '07' || mes !== '08' || mes !== '09' || mes !== '10' || mes !== '11' || mes !== '12'*/){
			console.log(mes)
			console.log(anio)
			alert('Debe ingresar un mes valido <br> ejemplo: 01, 02, etc.')
			return true;
		}/*else if(anio != 17 || anio != 18 /*|| anio !== '19' || anio !== '20' || anio !== '21' || anio !== '22' || anio !== '23' || anio !== '24'){*/
			/*alert('debe ingresar un anio valido <br> ejemplo: 17, 18, etc.')
			return true;
		}*/else{
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
})
		
	})
	$('.input-2').hide();
	$('.titulo-2').hide();
	$('.btn-regis').hide();
	$('.contenedor-tarjeta').hide();
})