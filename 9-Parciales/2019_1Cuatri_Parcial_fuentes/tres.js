function mostrar()
{
	var precio;
	var porcentajeDescuento;
	var precioFinal;

	precio = prompt("Ingrese precio");
	porcentajeDescuento = prompt("Ingrese porcentaje de descuento");

	precio = parseInt(precio);
	porcentajeDescuento = parseInt(porcentajeDescuento);

	precioFinal = precio -(porcentajeDescuento / 100);

	document.getElementById("elPrecioFinal").value = precioFinal;


// ID : elPrecioFinal

}
