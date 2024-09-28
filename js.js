let nombre = prompt("Coloca tu nombre");

alert("¡Hola" + " " + nombre + " " + "Bienvenido al taller de JavaScript");

let edad = prompt("Cual es tu edad");
const mensaje = ("Tu edad es" + " " + edad);

console.log(mensaje);

 //Se le pide al cliente un numero.

let numero1 = prompt("pon tu primer numero: ")
let numero2 = prompt("pon tu segundo numero: ")

 //se cambia los numeros a enteros

let suma = parseInt(numero1) + parseInt(numero2) ;

console.log(suma)
 //Una comparacion sencilla 
if (suma > 50) {
      console.log("Esa suma supera los 50");
} else {
      console.log("Esa suma no supera los 50");
}

//Calculadora

let numeroUno = parseInt(prompt("Poner el primer numero:"));
let numeroDos = parseInt(prompt("Poner el segundo numero:"));

let operador = prompt("Que operador deseas hacer: suma, resta, multiplicacion o division?");

if (operador === "suma") {
      console.log(numeroUno + numeroDos);
} 
else if (operador === "resta") {
      console.log(numeroUno - numeroDos);
}
else if (operador === "multiplicacion") {
     console.log(numeroUno * numeroDos);
}
else if (operador === "division") {
      console.log(numeroUno / numeroDos);
}
else {
      console.log("Operador no reconocido");
}

let numeroUnoo = parseInt(prompt("Poner el primer numero:"));
let numeroDoss = parseInt(prompt("Poner el segundo numero:"));

if (numeroUnoo > numeroDoss) {
      console.log("El primer número es mayor que el segundo.");
} 
else if (numeroUnoo < numeroDoss) {
      console.log("El primer número es menor que el segundo.");
} 
else {
      console.log("Ambos números son iguales.");
}
