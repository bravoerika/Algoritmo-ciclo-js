alert("Bienvenido a este Proyecto");

let nombre = prompt("Ingrese un nombre:");
    console.log(nombre);

const sumar = (num1 , num2)=> num1 + num2;
const restar = (num1 , num2)=> num1 - num2;
const multiplicar = (num1 , num2) => num1 * num2;
const dividir = (num1 , num2) => num1 / num2;

function mostrarValores ( operacion, num1, num2) {
    switch ( operacion ) {
        case "+":
        console.log(sumar ( num1 , num2 ))
        break;

        case "-":
        console.log(restar ( num1 , num2 ))
        break;

        case "*":
            console.loge (multiplicar ( num1 , num2 ))
            break;

        case "/":
            console.log(dividir ( num1 , num2 ))
            break;  
        default:
            console.log ("operación no válida") 
    }
}                         
 let respuesta;
 do{
    let num1, num2, operacion
    do {
        num1 = parseFloat (prompt("ingrese número"));
        num2 = parseFloat (prompt("ingrese número"));
        operacion = (prompt ("Ingrese la operación (+,-,*,/)"));

    if (isNaN (num1) || isNaN (num2)) {
        console.log("El número ingresado no es correcto. Revisa los datos que ingresaste!!")
     }
    if (num2 === 0 && operacion == "/")
    console.log( "No se puede dividir por cero")

    }while(( isNaN(num1) || isNaN(num2) || isNaN (num2 === 0 && operacion == "/")))
    mostrarValores(operacion, num1, num2)
    do{
        respuesta = (prompt( "¿Desea ingresar otra operación?")).toLowerCase()
    }while (respuesta !="si" && respuesta != "no")
 }while (respuesta!= "no")
