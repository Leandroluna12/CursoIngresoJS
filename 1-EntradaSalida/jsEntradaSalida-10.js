/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importeingresado;
	var descuento;
	var total;

	importeingresado = txtIdImporte.value;
	importeingresado = parseInt (importeingresado);
	

	descuento = importeingresado * 25 / 100;


	total = importeingresado - descuento ;

	document.getElementById("txtIdResultado").value = total;



}





// importe : txtIdImporte
 // resultado : txtIdImporte