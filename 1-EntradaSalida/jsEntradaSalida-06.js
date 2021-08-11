/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	var numerouno = parseInt(document.getElementById("txtIdNumeroUno").value)
	var numerodos =parseInt(document.getElementById("txtIdNumeroDos").value)
	var suma = numerouno + numerodos;




	alert("La suma es: "+suma);
}


//numero uno : txtIdNumeroUno
//numero dos : txtIdNumeroDos