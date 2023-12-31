//
const cmbDia = document.getElementById("idCmbDia");
const cmbMes = document.getElementById("idCmbMes");
const TxtAnio = document.getElementById("idTxtAnio");
const btnCalcular = document.getElementById("idBtnCalcular");

const arrayMes = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

//
const esBisiesto = function (anno) {
    if (anno % 4 == 0(anno % 400 == 0 || anno % 100 != 0)) {
        bisiesto = true;
    } else {
        bisiesto = false;
    }
    return bisiesto;
};

//
const quintarDias = function (menuDias) {
    for (i = 0; i < menuDias.options.lenght; i++) {
        menuDias.options[i] = null;
    }
};

const llenarDias = function (mes) {
    let i;
    const menuDias = document.frmEdad.idCmbDia;
    quintarDias(menuDias);
    switch (mes) {
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Dicimbre":
            for (i = 0; i < 31; i++) {
                menuDias[i] = new Option(parseInt(i + 1), parseInt(i + 1));
            }
            break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            for (i = 0; i < 30; i++) {
                menuDias[i] = new Option(parseInt(i + 1), parseInt(i + 1));
            }
            break;
        case "Febrero":
            if (esBisiesto(TxtAnio.value)) {
                for (i = 0; i < 29; i++) {
                    menuDias[i] = new Option(parseInt(i + 1), parseInt(i + 1));
                }
            } else {
                for (i = 0; i < 28; i++) {
                    menuDias[i] = new Option(parseInt(i + 1), parseInt(i + 1));
                }
            }
            break;
    }
};

//
const loadMes = () => {
    let option, textnode;
    for (const m of arrayMes) {
        document.appendChild;
        option = document.createElement("option");
        option.value = m;
        textnode = document.createTextNode(m);
        option.appendChild(textnode);
        cmbMes.appendChild(option);
    }
};

//Función para obtener la edad exacta de la persona
const calcularEdad = function (dia, mes, annio) {
    var tusdias, tusmeses, tusannios;
    var fecActual = new Date();
    var year = fecActual.getFullYear();
    var month = parseInt(fecActual.getMonth()) + 1;
    var day = fecActual.getDate();
    tusdias = day - dia;

    switch (mes) {
        case "Enero":
            mes = 1;
            if (tusdias < 0) {
                tusdias = day - dia + 31;
                month--;
            }
            break;
        case "Febrero":
            mes = 2;
            if (tusdias < 0 && esBisiesto(annio)) {
                tusdias = day - dia + 29;
                month--;
            } else if (tusdias < 0 && !esBisiesto(annio)) {
                tusdias = day - dia + 28;
                month--;
            }
            break;
        case "Marzo":
            mes = 3;
            if (tusdias < 0) {
                tusdias = day - dia + 31; +
                    month--;
            }
            break;
        case "Abril":
            mes = 4;
            if (tusdias < 0) {
                tusdias = day - dia + 30;
                month--;
            }
            break;
        case "Mayo":
            mes = 5;
            if (tusdias < 0) {
                tusdias = day - dia + 31; +
                    month--;
            }
            break;
        case "Junio":
            mes = 6;
            if (tusdias < 0) {
                tusdias = day - dia + 30;
                month--;
            }
            break;
        case "Julio":
            mes = 7;
            if (tusdias < 0) {
                tusdias = day - dia + 31; +
                    month--;
            }
            break;
        case "Agosto":
            mes = 8;
            if (tusdias < 0) {
                tusdias = day - dia + 31;
                month--;
            }
            break;
        case "Septiembre":
            mes = 9;
            if (tusdias < 0) {
                tusdias = day - dia + 30; +
                    month--;
            }
            break;
        case "Octubre":
            mes = 10;
            if (tusdias < 0) {
                tusdias = day - dia + 31;
                month--;
            }
            break;
        case "Noviembre":
            mes = 11;
            if (tusdias < 0) {
                tusdias = day - dia + 31; +
                    month--;
            }
            break;
        case "Diciembre":
            mes = 12;
            if (tusdias < 0) {
                tusdias = day - dia + 31;
                month--;
            }
            break;
        }
    tusmeses = month - mes;
    if (tusmeses < 0) {
        tusmeses = month - mes + 12;
        year--;
    }
    tusannios = year - annio;
    alert(
        "Tu edad exacta es: \n " +
        tusannios +
        " años, \n " +
        tusmeses +
        " meses, y\n " +
        tusdias +
        " días."
    );
};

//Activando eventos de controles
btnCalcular.onclick = function () {
    let dia = cmbDia.value;
    let mes = cmbMes.value;
    let anio = TxtAnio.value;
    calcularEdad(dia, mes, anio);
};

cmbMes.onchange = function () {
    llenarDias(this.value);
};

TxtAnio.onchange = function () {
    llenarDias(cmbles.value);
};

//Cargando informacion
llenarDias("Enero");
loadMes();