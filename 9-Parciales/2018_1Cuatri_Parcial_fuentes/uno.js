
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho = prompt("Ingrese ancho del rectangulo aqui ");
	largo = prompt("Ingrese largo del rectangulo aqui");

	ancho = parseFloat(ancho);
	largo = parseFloat(largo);

	ancho = ancho * 2 ;
	largo = largo * 2 ;

	perimetro = ancho + largo ;

	alert("El perimetro del rectangulo es de " + perimetro+ " metros ");
}


