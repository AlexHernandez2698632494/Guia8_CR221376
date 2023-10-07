//INIICANDO CONTROLES
const btnarea=document.getElementById("idBtnAltura");
const btnperim=document.getElementById("idBtnPerimetro");
const base =document.getElementById("idTxtBase");
const altura=document.getElementById("idTxtAltura");

//Registrar evento click del raton al precionar botones de envio
const iniciar=()=>{
    if(btnarea.addEventListener){
        btnarea.addEventListener("click",calculararea, false);
    }else{
        btnarea.attachEvent("onclick",calculararea);
    }
    if(btnperim.addEventListener){
        btnperim.addEventListener("click",calcularperimetro,false);
    }else{
        btnperim.attachEvent("onclick",calcularperimetro);
    }
};

const calculararea=function(){
    if(base.value==""|| altura.value==""){
        alert("Faltan campos por llenar");
    }else{
        var rect=new rectangulo(base.value,altura.value);
        rect.mostrar(rect.carea(),"area");
    }
    return false;
};

const calcularperimetro=function(){
    if(base.value==""||altura.value==""){
        alert("Faltan campos por llenar");
    }else{
        var peri=new rectangulo(base.value,altura.value);
        peri.mostrar(peri.cperimetro(),"perimetro");
    }
    return false;
};

//Creando una clase rectangulo
const rectangulo=function(base,altura){
    //prpiedades de la clase
    this.base=parseFloat(base);
    this.altura=parseFloat(altura);
    //
    //
    this.carea=new Function("return this.base * this.altura");
    this.cperimetro=new Function("return 2*this.base + 2*this.altura");
    this.mostrar=new Function(
        "valor",
        "tipoc",
        "alert('EL ' + tipoc + ' es: ' + valor )"
        );
};

//
iniciar();