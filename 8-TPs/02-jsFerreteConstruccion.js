/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var Rectangulo;
	var cantidadAlambre;
	var final;


	largoTerreno = document.getElementById("txtIdLargo").value;
	largoTerreno = parseFloat(largoTerreno);
	anchoTerreno = document.getElementById("txtIdAncho").value;
	anchoTerreno = parseFloat(anchoTerreno);

	Rectangulo = (largoTerreno * 2 ) + (anchoTerreno * 2 );


	cantidadAlambre = Rectangulo * 3 ;

	final = cantidadAlambre;


	alert("se necesitan "+final+" metros de alambre");


}
function Circulo () 
{
	var radio;
	var cantidadAlambre;
	var diametro;
	var perimetro;

	radio = txtIdRadio.value ;
	radio = parseFloat(radio);

	diametro = radio * 2 ;

	perimetro = Math.PI * diametro;

	cantidadAlambre = perimetro * 3;

	alert("Se necesitan " + cantidadAlambre + " metros de alambre");
	
}
function Materiales () 
{
	var cemento;
	var cal;
	var largoTerreno;
	var anchoTerreno;
	var Rectangulo;
	var cantidadMaterial;
	var metrocontrapiso;

	largoTerreno = txtIdLargo.value;
	anchoTerreno = txtIdAncho.value;

	largoTerreno = parseFloat(largoTerreno);
	anchoTerreno = parseFloat(anchoTerreno);

	Rectangulo = (largoTerreno * 2) + (anchoTerreno * 2);

	cemento = Rectangulo * 2 ;
	cal = Rectangulo * 3 ;

	alert(" La cantidad necesaria de  bolsas de cemento es  " +cemento+ " y la cantidad necesaria de bolsas de cal es  " +cal);

	
}

//txtIdLargo : ID largo largo
//txtIdAncho : ID  ancho terreno
//txtIdRadio : ID radio
