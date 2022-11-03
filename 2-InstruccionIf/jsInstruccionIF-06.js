function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	if(edad > 17)
	{
		alert("Ud es mayor de edad");


	}
	else
	{
		if(edad > 12)
		{
			alert("Usted es adolescente ");
		}
		
		else
		{
			alert("Ud es un niño")
		}
	}
	


}
//txtIdEdad