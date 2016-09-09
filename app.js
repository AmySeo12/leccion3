window.addEventListener("load", function() {
	var boton = document.getElementById("button");
	button.addEventListener("click", function() {
		var nombre = document.getElementById("nombre").value;
		var edad = parseInt(document.getElementById("edad").value);
		var sexo = document.getElementById("sexo").value;

		function PersonaPresentacion(nombre, edad, sexo){
			this.nombre = nombre;
			this.edad = edad;
			this.sexo = sexo;
			this.mayorDeEdad = (edad >= 18);
		}

		PersonaPresentacion.prototype.saludar = function(){
				return "Hola, mi nombre es " + this.nombre + ", tengo " + this.edad + " años y soy " + ((this.mayorDeEdad) ? "mayor" : "menor") + " de edad";
			}

		var persona = new PersonaPresentacion(nombre, edad, sexo);

		document.getElementById("presentacion");
		presentacion.innerHTML= persona.saludar();
	});
});