let personas = [];

document.getElementById('registroBtn').addEventListener('click', function () {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let fechaNacimiento = document.getElementById('fechaNacimiento').value;
let email = document.getElementById('email').value;
let usuario = document.getElementById('usuario').value;
let password = document.getElementById('password').value;


    if (nombre && apellido) {
        // Generar ID según las reglas especificadas
        let id = generateID(nombre, apellido);
        
        // Guardar información en el objeto Persona
                const persona = {
                    id: id,
                    nombre: nombre,
                    apellido: apellido,
                    fechaNacimiento: fechaNacimiento,
                    email: email,
                    usuario: usuario,
                    password: password
                };
                personas.push(persona);
                // Mostrar mensaje de registro exitoso
                alert(`El usuario ${nombre} se ha registrado correctamente con ID: ${id}`);

                // Limpiar campos del formulario
                document.getElementById('nombre').value = '';
                document.getElementById('apellido').value = '';
                document.getElementById('fechaNacimiento').value="";
                document.getElementById('email').value="";
                document.getElementById('usuario').value="";
                document.getElementById('password').value="";
                // Limpiar otros campos del formulario aquí

            } else {
                // Mostrar mensaje de error si no se llenan todos los campos
                alert('Por favor, complete todos los campos.');
            }
        });

        document.getElementById('mostrarBtn').addEventListener('click', function () {
            // Obtener la tabla de usuarios
            let tablaUsuarios = document.getElementById('tablaUsuarios').getElementsByTagName('tbody')[0];

            // Limpiar filas existentes en la tabla
            tablaUsuarios.innerHTML = '';

            // Llenar la tabla con datos de personas
            personas.forEach(function (persona) {
                let fila = tablaUsuarios.insertRow();
                let id = fila.insertCell(0);
                let nombre = fila.insertCell(1);
                let apellido = fila.insertCell(2);
                let fechaNacimiento=fila.insertCell(3);
                let email=fila.insertCell(4);
                let usuario=fila.insertCell(5);
                // Agregar otras celdas de la fila según los campos del formulario

                id.textContent = persona.id;
                nombre.textContent = persona.nombre;
                apellido.textContent = persona.apellido;
                fechaNacimiento.textContent=persona.fechaNacimiento;
                email.textContent=persona.email;
                usuario.textContent=persona.usuario;
                //                contraseña.textContent=<PASSWORD>;
                // Agregar otros campos de la fila según los campos del formulario
            });

            // Mostrar la tabla
            document.getElementById('tablaUsuarios').style.display = 'table';
        });

        function generateID(nombre, apellido) {
            // Obtener iniciales de los apellidos
            let iniciales = apellido.split(' ').map(function (word) {
                return word.charAt(0).toUpperCase();
            });

            // Si solo hay un apellido, duplicar la primera letra
            if (iniciales.length === 1) {
                iniciales.push(iniciales[0]);
            }

            // Obtener año actual
            let año = new Date().getFullYear();

            // Generar número aleatorio de 4 cifras
            let numeroAleatorio = Math.floor(1000 + Math.random() * 9000);

            // Concatenar iniciales, año y número aleatorio para formar el ID
            let id = iniciales.join('') + año + numeroAleatorio;

            return id;
        }