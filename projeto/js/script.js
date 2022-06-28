 
 
	function validarFormulario()
	{
		let nomeCompleto = document.getElementById("nome-completo").value
		let email = document.getElementById("email").value
		let telefone = document.getElementById("telefone").value
		let estado = document.getElementById("estado").value
		let cidade = document.getElementById("cidade").value
		
		if(nomeCompleto == "")
		{
			alert("o campo nome-completo está vazio")
			
		}
		
		if(email == "")
		{
			alert("o camapo email está vazio")
		
		}
		
		if(telefone == ""|| telefone.lenght <8) 
		{
			alert("o campo telefone está vazo")
			
		}
		
		if(estado == "")
		{
			alert("o campo estado está vazio")
			
		}	
		
		if(cidade == "")
		{
			alert("o campo cidade está vazio")
			
		}
		
			
		
		console.log(nomeCompleto)
		console.log(email)
		console.log(telefone)
		console.log(estado)
		console.log(cidade)

	}