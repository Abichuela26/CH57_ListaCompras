const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const btnAgregar = document.getElementById("btnAgregar");
const btnClear = document.getElementById("btnClear");

const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");


function validarCantidad() {
    if (txtNumber.value.length == 0) {
        return false;
    }//Tenga información

    if (isNaN(txtNumber.value)) {
        return false;
    }//Tiene que ser un número

    if (Number(txtNumber.value) <= 0) {
        return false;
    }//Mayor que 0

    return true;
}//Validar cantidad

function getPrecio(){
    return Math.round(Math.random() * 10000) /100; //Genera un número aleatorio entre 0 y 100
}//getPrecio


btnAgregar.addEventListener("click", function (event) {
    event.preventDefault();
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none"; // Aqui limpia la alerta cada que oprimes el botón
    txtName.style.border = "";
    txtNumber.style.border = "";
    //Name
    //Validar que tenga información mínimo 3 letras

    if (txtName.value.length < 3) {
        txtName.style.border = "thin red solid"; //aqui hace un borde alrededor 
        //mensaje de error
        alertValidacionesTexto.innerHTML = "<strong>El nombre del producto no es correcto </strong><br/>";
        alertValidaciones.style.display = "block";
    }

    if (!validarCantidad()) {
        txtNumber.style.border = "thin red solid"; //aqui hace un borde alrededor 
        alertValidacionesTexto.innerHTML += "<strong>La cantidad no es correcta </strong>";
        alertValidaciones.style.display = "block";
    }//! validarCantidad


    //Number
    //Validar que tenga información
    //Tiene que ser un número
    //Mayor que 0

}); //btnAgregar click


btnClear.addEventListener("click", function (event){
    event.preventDefault();
});