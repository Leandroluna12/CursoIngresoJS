/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var sumaprecios;


	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	sumaprecios = precioUno + precioDos + precioTres;

	alert(" La suma de los productos es : "+ sumaprecios);

}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	promedio = (precioUno + precioDos + precioTres) / 3;

	

	alert("El promedio de los productos es : "+ promedio);


	
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var sumaprecios;
	var iva;
	var precioFinal;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);
	
	sumaprecios = precioUno + precioDos + precioTres;

	iva = sumaprecios * 21 / 100 ;

	precioFinal = sumaprecios + iva;

	alert("El precio final de los productos mas IVA es : "+ iva)






}



//precio uno : txtIdPrecioUno
// precio dos : txtIdPrecioDos
// precio tres : txtIdPrecioTres 