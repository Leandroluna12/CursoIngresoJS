/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numerouno ;
	var numerodos ;
	var suma ;

	numerouno = txtIdNumeroUno.value;
	numerodos = txtIdNumeroDos.value;

	numerouno = parseInt(numerouno);
	numerodos = parseInt(numerodos);

	suma = numerouno + numerodos;

	alert("el resultado es:" + suma);


}

function restar()
{
	var numerouno ;
	var numerodos ;
	var resta ;

	numerouno = txtIdNumeroUno.value;
	numerodos = txtIdNumeroDos.value;

	numerouno = parseInt(numerouno);
	numerodos = parseInt(numerodos);

	resta = numerouno - numerodos;

	alert("el resultadoes:" + resta);



}

function multiplicar()
{ 
	var numerouno ;
	var numerodos ;
	var multiplica ;

	numerouno = txtIdNumeroUno.value;
	numerodos = txtIdNumeroDos.value;

	numerouno = parseInt(numerouno);
	numerodos = parseInt(numerodos);

	multiplica = numerouno * numerodos;

	alert("el resultado es:" + multiplica);



}

function dividir()
{
	var numerouno ;
	var numerodos ;
	var dividir ;

	numerouno = txtIdNumeroUno.value;
	numerodos = txtIdNumeroDos.value;

	numerouno = parseFloat(numerouno);
	numerodos = parseFloat(numerodos);

	dividir = numerouno / numerodos;

	alert("el resultado es:" + dividir);



}


//numero uno :txtIdNumeroUno
//numero dos :txtIdNumeroDos
