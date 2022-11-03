function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	if(edad<13 || edad>17)
	{
		alert("Usted No es adolescente");
	}

}
//if(! (edad>=12 && edad <=17))
//otra forma de ahcerlo