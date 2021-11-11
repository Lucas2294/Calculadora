function numero(entero){
    document.getElementById("pantalla").innerHTML += entero
  
}

function calcular(){
    let resultado = eval(document.getElementById("pantalla").innerHTML)

    document.getElementById("pantalla").innerHTML = resultado

}

function borrar(){
    document.getElementById("pantalla").innerHTML = ' '
}