var personas = [];

        function generarId(apellido, añoRegistro) {
            var randomNum = Math.floor(Math.random() * 9000) + 1000;
            var id = (apellido.substring(0, 2) + añoRegistro + randomNum).toUpperCase();
            return id;
        }

        function registrarPersona() {
            var nombre = document.getElementById("nombre").value;
            var apellido = document.getElementById("apellido").value;
            var fechaNacimiento = document.getElementById("fechaNacimiento").value;
            var email = document.getElementById("email").value;
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            var añoRegistro = new Date().getFullYear();
            var id = generarId(apellido, añoRegistro);

            var persona = {
                id: id,
                nombre: nombre,
                apellido: apellido,
                fechaNacimiento: fechaNacimiento,
                email: email,
                username: username,
                password: password
            };

            personas.push(persona);
            alert("Persona registrada con ID: " + id);
        }

        function mostrarInformacion() {
            var resultadoDiv = document.getElementById("resultado");
            resultadoDiv.innerHTML = "<h2>Información de Personas Registradas</h2>";
            resultadoDiv.innerHTML += "<table><tr><th>ID</th><th>Nombre</th><th>Apellido</th><th>Fecha de Nacimiento</th><th>Email</th><th>Username</th><th>Password</th></tr>";

            for (var i = 0; i < personas.length; i++) {
                resultadoDiv.innerHTML += "<tr><td>" + personas[i].id + "</td><td>" + personas[i].nombre + "</td><td>" + personas[i].apellido + "</td><td>" + personas[i].fechaNacimiento + "</td><td>" + personas[i].email + "</td><td>" + personas[i].username + "</td><td>" + personas[i].password + "</td></tr>";
            }

            resultadoDiv.innerHTML += "</table>";
        }