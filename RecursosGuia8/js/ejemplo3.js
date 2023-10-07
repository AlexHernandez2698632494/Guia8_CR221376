//La fecha del día en la zona del cliente web
//usando el objeto Date de JavaScript
let fechaHoy = new Date(); 
//Cálculo del desfase en el huso horario para hacer 
//luego el ajuste con la zona horaria seleccionada
 //en el elemento select del formulario 
let desfase = -Math.round(fechaHoy.getTimezoneOffset() / 60) + 12; 8
 //Registrar evento click del ratón al presionar botones de envío

const iniciar = function () { let select = document.getElementById("zhselect");
if (select.addEventListener) {
select.addEventListener("change", getHoraLocal, false); } else if (select.attachEvent) { select.attachEvent("onchange", getHoraLocal);
}
}; 
//Calcula la hora en la zona horaria seleccionada 
const getHoraLocal=function () {
//Función getHoraLocal()
let fechaHoy = new Date();
//Ajustar el desfase horario respecto a la zona seleccionada. 
//Por ejemplo, la zona horaria para América Central está 
//en el indice 21 de la colección el cálculo se realizaría asi:
//en el índice 6 de la colección de opciones del elemento select. 
//Si un usuario selecionara la zona horaria de Tokio que está
//21 - desfase del cliente (zona horaria de América Central) = 15
let zh = document.frmZonaHoraria.zonas.selectedIndex - desfase;

//Sumar (o restar) las horas de desfase respecto a la hora //local del cliente
fechaHoy.setHours(fechaHoy.getHours() + zh);
//Informar la hora local del huso horario elegido
document.frmZonaHoraria.hour.value = fechaHoy.toLocaleString();
};  iniciar();
//Inicializando datos
getHoraLocal();
