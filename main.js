// Ejercicio 1 

//N°1 | Realizar un programa que dado 2 números imprima por consola si el primer número es mayor que el segundo.

/* let numero1 = 15; 
let numero2 = 10;

if( numero1 >= numero2 ){
    console.log( numero1 + " es mayor que " + numero2 );
} */

// Ejercicio 2 

//N°2 | Realizar un programa que dado 2 números imprima por consola si los números son iguales o si son diferentes.

/* let num1 = 11; 
let num2 = 12;

let igual = num1 >= num2 


if (igual) {
    console.log( " Los números son iguales" )
}else{
    console.log( "los numeros son distinto")
}
 */

//Ejercicio 3 

// N°3 | Realizar un programa que dado 2 números imprima por consola cuál de los 2 números es el más grande o si son iguales.

/* let numer1 = 11; 
let numer2 = 12;

let mayor = numer1 > numer2 

if (mayor){
    console.log( `el ${numer1} es mayor que ${numer2}` )
}
if(numer2 > numer1 )console.log( `el ${numer2} es mayor que ${numer1} `)
else{
    numer1 == numer2 
    console.log("Los numeros son iguales")
} 
 */


//Ejercicio 4

//N°4 | Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el más chico.

/* let num1 = 33;
let num2 = 342;
let num3 = 11;

let menor =  num1 <= num2 && num1 <= num3 

if (menor) {  
    console.log (`${num1} es el mas chico `)
}
else if (num2 <= num1 && num2 <= num3) {
    console.log(`${num2} es el mas chico `);
}
else {
    menor= num3; 
    console.log(`${num3} es el mas chico `);
} */

//Ejercicio 5 

//N°5 | Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 personas es la más alta y cual es la de mayor edad. 

/* const persona1 = {
    nombre: "Adrian",
    edad: 21,
    altura: 1.63

}
const persona2 = {
    nombre: "juan",
    edad: 22,
    altura: 1.75   
}

let personaMasAlta = persona1.altura > persona2.altura
if (personaMasAlta){
    console.log(`${persona1.nombre} es la persona con mayor altura`)
    console.log(persona1)
}
else {
    console.log(`${persona2.nombre} es la persona con mayor altura`)
    console.log (persona2)
} */

// Ejercicio 6

//N°6 | Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estás capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir más de 150 cm y tener una visión de 8 de 10 como mínimo.

/* let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
let altura = prompt("Ingrese su altura en CM");
let vision = prompt("Ingrese su vision 1/10");

let puedeConducir = edad >= 18 && altura >= 150 && vision >= 8 ;

if(puedeConducir){
    console.log(`Bienvenido ${nombre} usted esta capacitado para conducir`);
}else{
    console.log(`Bienvenido ${nombre} usted no esta capacitado para conducir`);
} */

// Ejercicio 7 NO RESUELTO

//N°7 | Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o   normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por último de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida



//ejercicio 8 

//    N°8 | Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable  llamada numeroIncognita y que permita en 3 intentos adivinar el número. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una  variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario  diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor,  vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, has adivinado el número.” No te preocupes si usas mucho código repetido, más adelante verás cómo realizar este juego de manera más eficiente.

/* let numeroIncognita = 9
let intento1 = prompt('primero intento advina un numero del 1 al 10')

if (intento1 == 9){
    alert("Ganaste felicitaciones")
}else if (intento1 < 9){alert("el numero incognito es mayor")}
else if (intento1 > 9){alert ("el numero incognito es menor")}
else{alert ("Tienes dos intento mas")}

let intento2 = prompt('segundo intento adivina un  numero del 1 al 10')

if (intento2 == 9){
    alert("Ganaste felicitaciones")
}else if (intento2 < 9){alert("el numero incognito es mayor")}
else if (intento2 > 9){alert ("el numero incognito es menor")}
else{alert ("Tienes un intento mas")}

let intento3 = prompt('Tercer intento advina un numero del 1 al 10')

if (intento3 == 9){
    alert("Ganaste felicitaciones")
}else if (intento3 < 9){alert("el numero incognito es mayor")}
else if (intento3 > 9){alert ("el numero incognito es menor")}
else{ alert("Perdiste buen intento")} */

//Ejercicio 9

//N°9 | Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años),adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (más de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.

/* let edad = prompt('ingrese su edad')

if (edad >= 0 && edad <= 12){
    alert("Usted es un niño")
}else if (edad >= 13 &&  edad <=18 ){
    alert("Usted es una adolesente")
}else if (edad >=19 && edad <= 45){
    alert("Usted es un joven mayor")
}else if (edad >= 45 && edad <= 99){
    alert("usted es un anciano ")
}else if (edad >= 100){
    alert("Enserio tiene esa edad?")
} */

//ejercicio 10

// N°10 | Crear un programa que permita el ingreso de  a 2 jugadores y muestre en pantalla cuál de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa

/* let nombreJugador1 = "Adrian"
let nombreJugador2 = "Aylin"
let jugador1 = prompt(`Jugador1 ingrese “PIEDRA”, “PAPEL” o “TIJERAS” una sola opcion`)
let jugador2 = prompt('jugador 2 ingrese “PIEDRA”, “PAPEL” o “TIJERAS” una sola opcion')


if (jugador1 == `piedra` && jugador2 == `papel`) {
    alert(`${nombreJugador2} ha ganado!`)
}else if (jugador1 == `piedra` && jugador2 == `tijera`) {
    alert(`${nombreJugador1} ha ganado!`)
}else if (jugador1 == `papel` && jugador2 == `piedra`) {
    alert(`${nombreJugador1} ha ganado!`)
}else if (jugador1 == `papel` && jugador2 == `tijera`) {
    alert(`${nombreJugador2} ha ganado!`)
}else if (jugador1 == `tijera` && jugador2 == `piedra`) {
    alert(`${nombreJugador2} ha ganado!`)
}else if (jugador1 == `tijera` && jugador2 == `papel`){
    alert(`${nombreJugador1} ha ganado!`)}
    let empate = jugador1 == jugador2
    if (empate){
        alert("Empate") }
else{alert ("un jugador hizo trampas")} */

//Ejercicio 11 

//N°11 | Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones:
//● Blanco o Negro: Falta de color.
//● Verde: El color de la naturaleza.
//● Azul: El color del agua.
//● Amarillo: El color del sol.
//● Rojo: El color del fuego.
//● Marrón: el color de la tierra.
//● y para cualquier otro valor: Excelente elección, no lo teníamos pensado.

/* let color = prompt('ingrese un color')

switch (color) {
    case `blanco`:
        alert(`Falta de color`)
        break;
    case `negro`:
        alert(`Falta de color`)
        break;
    case `verde`:
        alert(`El color de la naturaleza`)
        break;
    case `azul`:
        alert(`El color del agua`)
        break;
    case `amarillo`:
        alert(`El color del sol`)
        break;
    case `rojo`:
        alert(`El color del fuego`)
        break;
    case `marron`:
        alert(`El color de la tierra`)
        break;
    default: 
        alert(`Excelente elección, no lo teníamos pensado.`)
        break;
} */

//Ejercicio 12

//N°12 | Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.

/* let operacion = prompt( "Ingrese operacion: suma, resta, multiplicacion, division" )
let numeroUno = Number( prompt( 'Ingrese el primer numero' ) )
let numeroDos = Number( prompt( 'Ingrese el segundo numero' ) )


switch ( operacion ) {
    case "suma":
        console.log( `El resultado de sumar ${numeroUno} y ${numeroDos} es ${numeroUno + numeroDos}` )
        break;
    case "resta":
        console.log( `El resultado de restar ${numeroUno} y ${numeroDos} es ${numeroUno - numeroDos}` )
        break;
    case "multiplicacion":
        console.log( `El resultado de multiplicar ${numeroUno} y ${numeroDos} es ${numeroUno * numeroDos}` )
        break;
    case "division":
        console.log( `El resultado de dividir ${numeroUno} y ${numeroDos} es ${numeroUno / numeroDos}` )
        break;
    default:
        console.log('operacion no valida')
        break
} */

//Ejercicio 13

//N°13 | Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() más un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.

/* let nombre = prompt(`Ingresa tu nombre:`)
let apellido = prompt(`Ingresa tu apellido:`)
let cumpleaños = prompt(`Ingresa tu fecha de nacimiento:`)
let dniNum = prompt(`Ingresa tu número de DNI:`)
let sexo = prompt(`Ingresa tu sexo:`)
alert(`Revisa tu datos: ${nombre} - ${apellido} - ${cumpleaños} - ${dniNum} - ${sexo}`)

let confirma = prompt(`Son los datos correctos?: Escribe Si o No:`)

if (confirma.toLowerCase `si`) {
    const dataDni = {
        nombre: `${namee}`,
        apellido: `${apellid}`,
        nacimiento: `${birthday}`,
        dni: `${dniNum}`,
        sexo: `${sexo}`
        }
        console.table(dataDni);
        alert(`Sus datos son correctos`)
}else{
    alert(`Sus datos son incorrectos , vuelva en un MES`)
} */