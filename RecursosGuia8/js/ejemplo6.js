//Registrar evento click al presionar el botón de envio 
const iniciar=function () {
const btnenviar = document.getElementById("idBtnEnviar");
document.frmmat.txtname.focus(); 
//A1 producirse un click sobre el botón de envio
//invocar los métodos del objeto carro que mostrarán
//los valores ingresados en el formulario
if (btnenviar.addEventListener) { btnenviar.addEventListener(
"click",
function () {
var chkvalue, selvalue, nuevoalumno; 
var radiofield =document.frmmat.elements["chkgender"];
for (var i = 0; i < radiofield.length; i++) {
if (radiofield[i].checked) {
chkvalue = radiofield[i].value;
}
}
selvalue =
document.frmmat.seldegree.options[frmmat.seldegree.selectedIndex]
.value;
//Verificando que los datos se encuentren llenos 
if (
document.frmmat.txtname.value != ""&&
document.frmmat.txtlastname.value !="" &&
document.frmmat.txtage.value !="" &&
selvalue !=""
){
nuevoalumno = new alumnoUDB(
document.frmmat.txtname.value,
document.frmmat.txtlastname.value, document.frmmat.txtage.value,
chkvalue,
selvalue
);
nuevoalumno.matricular(); 
nuevoalumno.imprimir();
} else {
alert("Faltan campos por completar");
}
},
false
);
} else {
btnenviar.attachEvent("onclik", function () {
var chkvalue, nuevoalumno;
var radiofield =document.frmmat.elements ["chkgender"]; 
for (var i = 0; i < radiofield.length; i++) {
if (radiofield[i].checked) {
chkvalue = radiofield[i].value;
}
}
selvalue =
document.frmmat.seldegree.options[frmmat.seldegree.selectedIndex].value;
nuevoalumno = new alumnoUDB(
document.frmmat.txtname.value,
document.frmmat.txtlastname.value,
document.frmmat.txtage.value,
chkvalue,
selvalue
);
nuevoalumno.matricular();
nuevoalumno.imprimir();
});
}
};

//Definiendo la clase alumnoUDB haciendo uso de sintaxis de función
function alumnoUDB (nombre, apellido, edad, genero, carrera) { //Propiedades de la clase
this.nombre=nombre; 
this.apellido = apellido;
this.edad =edad;
this.genero=genero;
this.carrera = carrera;
this.numCarnet = null;
//Métodos de la clase
this.matricular = function () {
var fecha = new Date();
var year =fecha.getFullYear(); 
var day =fecha.getDate();
var sec = fecha.getSeconds();
this.numCarnet =
this.nombre.substring(0, 1) + 
this.apellido.substring(0, 1) +
this.formato (sec) +
this.formato (day) +
year;
};
this.imprimir = function () {
let tblAlumno="";
tblAlumno =`
<table class="table table-striped table-hover table-bordered">
<thead>
<tr>
<th scope="col" class="text-center">Carnet</th>
<th scope="col" class="text-center">Nombre</th>
<th scope="col" class="text-center">Edad</th> <th scope="col" class="text-center">Género</th>
<th scope="col" class="text-center">Carrera</th>
</tr>
</thead>
<tbody>
<tr>
<td>${this.numCarnet}</td>
<td>${this.nombre} ${this.apellido}</td> 
<td>${this.edad}</td>
<td>${this.genero}</td>
<td>${this.carrera}</td>
</tr>
</tbody> 
</table>
`;
document.getElementById("idDivResultado").innerHTML = tblAlumno;
};
this.formato= function (valor) {
if (valor < 10) valor = "0" + valor;
return valor;
};
}
//Asociando función que manejará el evento load al cargar la página
if (window.addEventListener) { window.addEventListener("load", iniciar, false);
} else if (window.attachEvent) {
window.attachEvent("onload", iniciar);
}