function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad >17)
	{
		alert("sos mayor de edad");
	}
	else
	{
		alert("sos menor de edad");
	}
}

//txtIdEdad