/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var centígrados;
	var fianl;


	temperatura = txtIdTemperatura.value;

	temperatura = parseFloat(temperatura);

	centígrados = (temperatura - 32) * 5;

	final = centígrados / 9 ;
	
	alert(temperatura+ " Fahrenheit son " + final+ " centígrados");	
}

function CentigradosFahrenheit () 
{
	var temperatura;
	var Fahrenheit;
	var final;

	temperatura = txtIdTemperatura.value;

	temperatura = parseFloat(temperatura);

	Fahrenheit = 1.8 * temperatura ;
	final = Fahrenheit + 32;

	alert(temperatura+ "centígrados son " + final+ " Fahrenheit");	
}
//txtIdTemperatura
