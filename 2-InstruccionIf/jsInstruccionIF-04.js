function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad >= 12 && edad <=17)
	{
		alert("usted es adolescente");
	}
	else
	{
		alert ("usted NO es adolescente");
	}

}//FIN DE LA FUNCIÓN

//txtIdEdad