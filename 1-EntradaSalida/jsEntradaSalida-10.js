/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()

{
	var sueldo;
	var resultado;
	var descuento;

	//datos de entrada ( sirven para traer info del ID)

	sueldo = txtIdImporte.value;
	sueldo = parseFloat(sueldo);
	descuento = prompt("Ingrese el porcentaje de descuento");
	descuento = parseFloat(descuento);
	

	resultado = (sueldo - (sueldo / 100 * descuento));

	document.getElementById("txtIdResultado").value = (resultado);

}

// importe : txtIdImporte
 // resultado : txtIdResultado
 