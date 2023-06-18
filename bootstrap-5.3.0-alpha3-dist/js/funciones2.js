function sumar() {

    let resultado, num1, num2;

    num1 = document.getElementById('numero1').value;
    num2 = document.getElementById('numero2').value;

    if(validacion(num1, num2)) {
        resultado = parseInt(num1) + parseInt(num2);
        document.getElementById('resultado').innerHTML = "El resultado es " + resultado;
    }else {
        alert("Campos incompletos");
    }

}

function validacion(num1, num2){
    let verificado = (num1 != "" || num2 != "");
    return verificado;
}

function restar() {

}