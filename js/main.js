const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const btnAgregar = document.getElementById("btnAgregar");
const btnClear = document.getElementById("btnClear");

const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

const tablaListaCompras = document.getElementById("tablaListaCompras");
//Variable para la tabla de compras
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0);
//Variable para el tbody de la tabla
const filaTabla = document.createElement("tr");
//Crea una fila para la tabla


let cont = 0; //Contador de productos agregados

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
    let isValid = true; //Variable para validar si todo está correcto (bandera)
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
        isValid = false; //Si no es válido, cambia la bandera
    }

    if (!validarCantidad()) {
        txtNumber.style.border = "thin red solid"; //aqui hace un borde alrededor 
        alertValidacionesTexto.innerHTML += "<strong>La cantidad no es correcta </strong>";
        alertValidaciones.style.display = "block";
        isValid = false; //Si no es válido, cambia la bandera
    }//! validarCantidad

    if(isValid) {
        //Si es válido, entonces crea el producto
        cont++; //Incrementa el contador de productos agregados
        let precio = getPrecio(); //Obtener el precio aleatorio

        let row= `<tr>        
                <td>${cont}</td>
                <td>${txtName.value}</td>
                <td>${txtNumber.value}</td>
                <td>$${precio}</td>
            </tr>
        `; //Agrega una nueva fila a la tabla con los datos del producto
        
        cuerpoTabla.insertAdjacentHTML("beforeend", row);
        //Agrega la fila al cuerpo de la tabla  
                
        txtName.value = ""; //Limpia los campos después de agregar
        txtNumber.value = ""; //Limpia los campos después de agregar
        txtName.focus(); //Enfoca el campo de nombre para agregar otro producto
     
    }//isValid
}); //btnAgregar click


btnClear.addEventListener("click", function (event){
    event.preventDefault();
});