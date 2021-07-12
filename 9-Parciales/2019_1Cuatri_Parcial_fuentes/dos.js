function mostrar()
{

	var nombre1
	var nombre2
	var peso1
	var peso2
	var sumapeso
	var promediopeso

	nombre1 = prompt("Ingrese nombre de la primera persona");
	nombre2 = prompt("Ingrese nombre de la segunda persona");
	peso1 = prompt("Ingrese el peso de la primera persona");
	peso2 = prompt("Ingrese el peso de la segunda persona");
	peso1 = parseInt(peso1);
	peso2 = parseInt(peso2);


	sumapeso = peso1 + peso2;
	sumapeso = parseInt(sumapeso);

	promediopeso = sumapeso / 2 ;


	alert("Ustedes se llaman "+ nombre1+ " y " + nombre2+ " pesan " + peso1+ " y " +peso2+ ", que sumandos son " + sumapeso+ " kilos y el promedio de peso es " + promediopeso );

}

