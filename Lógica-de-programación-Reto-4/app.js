

// Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log("Bienvenidos a la Consola");

// Crea una variable llamada "nombre" y asígnale tu nombre. 
// Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

let Nombre = "Diego Armando"

console.log("Hola " +  Nombre);

// Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

alert("¡Hola " + Nombre);

// Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. 
// Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

let preguntaProgramaqueleGusta = prompt("Cuál es el lenguaje de programación que más te gusta?");

console.log(preguntaProgramaqueleGusta);

// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección.
// Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".
// Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección.
// Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".

let valorNumero1= 5;
let valorNumero2= 4;
let ResultadoSuma= valorNumero1 + valorNumero2;
let ResultadoResta= valorNumero1 - valorNumero2
// Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
console.log("La suma de valor: 1 y valor: 2 es: " + ResultadoSuma);

// Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
console.log("La diferencia entre valor 1 y valor 2 es : " + ResultadoResta);

// Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, 
// utiliza un if  para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

let mayorDeedad= 18;
let edadUsuario = prompt("Escribe tu Edad" );
if(edadUsuario>= mayorDeedad){
    alert("Tienes la edad requerida");
}else{
    alert("No cumples con la edad minima")
}

// Crea una variable "numero" y solicita un valor con prompt. 
// Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

let solicitudNumero = parseInt(prompt("Elige un numero de -10 a 10"));
console.log(typeof(solicitudNumero));

if(solicitudNumero > 0 ){
    alert("El numero es : " + solicitudNumero + " Positivo" );

}else if( solicitudNumero < 0){
    alert("El numero es : " + solicitudNumero + " Negativo"  );
}else{
    alert("El numero es Cero ");
}
// Utiliza un bucle while para mostrar los números del 1 al 10 en la consola
let numerosEnconsola = 1;
while(numerosEnconsola <= 10){
    console.log(numerosEnconsola);
    numerosEnconsola ++;
}
// Crea una variable "nota" y asígnale un valor numérico. 
// Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
let notaVariable= 8 ;
console.log(notaVariable + " Es la nota");

if(notaVariable >= 7 ){
    console.log("Aprobado");
}else{
    console.log("Reprobado");
}

// Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

let numeroAleatorio = Math.random();
console.log(numeroAleatorio + "  Es el numero aleatorio Math.random");

// Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

let numeroAleatorioEntero = Math.floor(Math.random()*10) + 1;
console.log(numeroAleatorioEntero + "  Es el numero aleatorio entero ");

// Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

let numeroEnteroMil = Math.floor(Math.random()*1000) + 1;
console.log(numeroEnteroMil + "  Es el numero aleatorio entre mil ");

