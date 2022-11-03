function mostrar()
{
	var precio;
	var porcentajeDescuento;
	var precioFinal;
	var porcentaje;
	
	precio = prompt("Ingrese Precio aqui");
	porcentaje= prompt("Ingrese porcentaje aqui");

	precio = parseFloat(precio);
	porcentaje= parseFloat(porcentaje);

	porcentajeDescuento = porcentaje * precio / 100;

	precioFinal = precio - porcentajeDescuento ;

	document.getElementById("elPrecioFinal").value = precioFinal;
}
//elPrecioFinal
