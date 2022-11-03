function mostrar()
{
	var edad;
	var estado;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	estado= estadoCivil.value;

	if(edad <18 && estado != "soltero" )
	{
		alert("Es muy pequeño para NO ser soltero");
	}

	


}


//txtIdEdad
//estadoCivil