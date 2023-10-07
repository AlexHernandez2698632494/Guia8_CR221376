// Definición de la clase Potencia
class Potencia {
    constructor(base, exponente) {
        this.base = base;
        this.exponente = exponente;
        this.resultado = Math.pow(base, exponente);
    }

    // Método para calcular la potencia
    calcularPotencia() {
        this.resultado = Math.pow(this.base, this.exponente);
    }

    // Método para mostrar el resultado en la página web
    mostrarResultado() {
        document.getElementById("result").innerHTML = `${this.base} elevado a la ${this.exponente} es igual a ${this.resultado}`;
    }
}

// Event listener para el formulario
document.getElementById("calcularBtn").addEventListener("click", function() {
    // Obtener los valores del formulario
    const base = parseInt(document.getElementById("base").value);
    const exponente = parseInt(document.getElementById("exponent").value);

    // Crear un objeto Potencia con los valores ingresados
    const calculadoraPotencia = new Potencia(base, exponente);

    // Calcular la potencia y mostrar el resultado
    calculadoraPotencia.calcularPotencia();
    calculadoraPotencia.mostrarResultado();
});