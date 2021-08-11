/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numerouno = parseInt(document.getElementById("txtIdNumeroUno").value)
	var numerodos =parseInt(document.getElementById("txtIdNumeroDos").value)
	var suma = numerouno + numerodos;

	alert("La suma es :"+suma);
}

function restar()
{
	var numerouno = parseInt(document.getElementById("txtIdNumeroUno").value)
	var numerodos =parseInt(document.getElementById("txtIdNumeroDos").value)
	var resta = numerouno - numerodos;

	alert("La resta es : "+resta);
}

function multiplicar()
{ 
	var numerouno = parseInt(document.getElementById("txtIdNumeroUno").value)
	var numerodos =parseInt(document.getElementById("txtIdNumeroDos").value)
	var multiplicar = numerouno * numerodos;

	alert("La multiplicacion es : "+multiplicar);
}

function dividir()
{
	var numerouno = parseInt(document.getElementById("txtIdNumeroUno").value)
	var numerodos =parseInt(document.getElementById("txtIdNumeroDos").value)
	var dividir = numerouno / numerodos;

	alert("La division es : "+dividir);
}


//numero uno :txtIdNumeroUno
//numero dos :txtIdNumeroDos
