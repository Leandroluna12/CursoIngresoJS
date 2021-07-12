/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldoingresado;
	var aumento;
	var resultado;


	sueldoingresado = txtIdSueldo.value;
	sueldoingresado = parseInt(sueldoingresado);

	aumento = sueldoingresado / 100 * 10 ;

	resultado = sueldoingresado + aumento ;

	document.getElementById("txtIdResultado").value = resultado;
	













}


// ID del sueldo: txtIdSueldo

// ID del resultado:  txtIdResultado 



















































