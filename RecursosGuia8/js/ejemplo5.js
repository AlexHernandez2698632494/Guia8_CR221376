//Registrar evento click al presionar botones de envio 
//y evento change al cambiar de opción en el elemento select
const iniciar = function () {
    const select = document.getElementById("selfab");
    const button = document.getElementById("idBtnEnviar");
    //A1 producirse en evento change en el elemento select
    //invocar a la función addOptions para volver a llenar //el select dependiente con los datos adecuados

    if (select.addEventListener) {
        select.addEventListener(
            "change",
            function () {
                addOptions(
                    marcas[this.options[this.selectedIndex].text],
                    document.frmcar.selmod
                );
            },
            false
        );
    } else {
        select.attachEvent("onchange", function () {
            addOptions(
                marcas[this.options[this.selectedIndex].text],
                document.frmcar.selmod
            );
        });
    }
    //Al producirse un click sobre el botón de envío //invocar los métodos del objeto carro que mostrarán
    //los valores ingresados en el formulario
    if (button.addEventListener) {
        button.addEventListener(
            "click",
            function () {
                let seleccion = showRadioSelected(document.frmcar.radcolor);
                if (document.frmcar.txtanio.value != "" && seleccion != undefined) {
                    carro.pedido(
                        document.frmcar.selfab.value,
                        document.frmcar.selmod.value,
                        seleccion,
                        document.frmcar.txtanio.value
                    );
                    carro.mostrar();
                    alert("Informacion registrada");
                } else {
                    alert("Faltan campos por completar");
                }
            },
            false);
    } else {
        button.attachEvent("onclik", function () {
            let seleccion = showRadioSelected(document.frmcar.radcolor);
            carro.pedido(document.frmcar.selfab.value,
                document.frmcar.selmod.value,
                seleccion,
                document.frmcar.txtanio.value
            );
            carro.mostrar();
        });
    }
};
const marcas = new Array(7);
marcas["Toyota"] = [
    "Corolla",
    "Echo",
    "Yaris",
    "Avensis",
    "Camry",
    "Land Cruiser",
    "4 Runner",
    "Hilux",
];
marcas["Nissan"] = [
    "Sentra", "Platina",
    "Almera",
    "Altima",
    "Tiida",
    "Pathfinder",
    "Patrol",
    "X-Trail",
    "Frontier",
];
marcas["Hyundai"] = ["Elantra", "Accent", "Coupé", "Santa Fe", "130"];
marcas["Volkswagen"] = ["Golf",
    "Jetta",
    "Passat",
    "Phaeton",
    "Thunder Bunny",
    "Touareg",
    "Saveiro",
];
marcas["Chevrolet"] = [
    "Optra",
    "Aveo",
    "Cobalt",
    "Malibu",
    "Corvette",
    "Chevy",
    "Avalanche",
    "Trailblazer",
];
marcas["Honda"] = [
    "Civic", "Acura",
    "Accord",
    "Fit",
    "Odyssey",
    "CR-V", "Pilot",
    "Ridgeline",];
marcas["Mitsubishi"] = [
    "Lancer",
    "Galant",
    "Eclipse",
    "Montero",
    "Nativa",
    "Outlander",
    "1200",
];

//Creando el objeto carro con el constructor Object() 
let carro = new Object();
//Propiedades del objeto
carro.fabricante = "";
carro.modelo = "";
carro.color = "";
carro.anio = "";
//Métodos del objeto
carro.pedido = function (fab, mod, col, an) {
    carro.fabricante = fab; carro.modelo = mod;
    carro.color = col;
    carro.anio = an;
};
carro.mostrar = function () {
    let tblCarro = "";
    tblCarro = `
<table class="table table-striped table-hover table-bordered">
<thead>
<tr>
<th scope="col" class="text-center">Fabricante</th>
<th scope="col" class="text-center">Modelo</th>
<th scope="col" class="text-center">Color</th>
<th scope="col" class="text-center">Año</th>
</tr>
</thead>
<tbody>
<tr>
<td>${carro.fabricante}</td>
<td>${carro.modelo}</td>
<td>${carro.color}</td>
<td>${carro.anio}</td>
</tr>
</tbody>
</table>
`;
    document.getElementById("idDivResultado").innerHTML = tblCarro;
};
const showRadioSelected = function (radiogroup) {
    let seleccionado;
    let numradios = radiogroup.length;
    for (let i = 0; i < numradios; i++) {
        if (radiogroup[i].checked) {
            seleccionado = radiogroup[i].value;
        }
    }
    return seleccionado;
};
const removeOptions = function (optionMenu) {
    for (i = 0; i < optionMenu.options.length; i++) {
        optionMenu.options[i] = null;
    }
};
const addOptions = function (optionList, optionMenu) {
    let i = 0;
    removeOptions(optionMenu); //Limpia las opciones 
    for (i = 0; i < optionList.length; i++) {
        optionMenu[i] = new Option(optionList[i], optionList[i]);
    }
};
//Asociando función que manejará el evento load al cargar la página
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}