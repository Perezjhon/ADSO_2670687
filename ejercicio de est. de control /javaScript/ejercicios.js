/*ejercicio 1
var edad = prompt("ingrese su edad:");
edad = parseInt(edad);
if (edad >= 18){
    alert("eres mayor de edad.");
} else {
    alert("eres menor de edad.");
}*/

 /* ejercicio 2
 let promedio = prompt("ingrse su calificaciones");
let exa = prompt("ingrese su  calificacion  ");
let trab = prompt("ingrse su calificacion");
let pro1 = 55/100
let pro2 = 30/100
let pro3 = 15/100
let pr = parseInt (promedio*pro1);
let pe = parseInt (exa*pro2);
let pt = parseInt (trab*pro3);
let cf = parseInt(pr)+ parseInt(pe)+ parseInt(pt);
alert("su calificacion final de la materia  es: " +cf );


if (cf >= 10){
    alert("Aprobado");
} else {( cf<= 1)
    alert("Reprobado")
}*/

/* ejercicio 3 
let A= prompt("ingrese el numero")
let B= prompt("ingrese el numero")
if ( A<= B){
    alert("A es mayor que B");
} else {( A>= B)
    alert("B es menor que A ")}*/

/* ejercicio 4
    let peso = prompt("ingrese su peso ");

    peso = parseInt(peso);

    if (peso <= 40){

        alert("persona baja de peso");

    } else  if (peso >= 41 && peso <= 70){
    
        alert("persona con peso promedio");
    } else {
        alert("persona con sobrepeso");
    }*/

/* ejercicio 5
let dia = prompt("ingrese un numero entre 1 y 7: ");
dia =  parseInt(dia); 

if (dia < 1 || dia > 7){

alert("escribio un numero de fuera de rango, escribe un numero entre 1 y 7 ");  

} else  {

switch (dia) {
    case 1:
    alert("dia 1; lunes");
    break;
    case 2:
        alert("dia 2; Martes");
        break;
        case 3:
    alert("dia 3; Miercoles");
    break;
    case 4:
    alert("dia 4; Jueves");
    break;
    case 5:
    alert("dia 5; viernes");
    break;
    case 6:
    alert("dia 6; Sabado");
    break;
    case 7:
    alert("dia 7; domingo");
    break;
}
}*/

/* ejercicio 6 
var  compra = prompt("ingrese lel valor de la compra");
compra =  parseInt(compra); 

if (compra>=1000){
    descuento= 0.2 * compra;
} else {
    descuento = 0.05 * compra;
}
total = compra - descuento;
alert("el total de pagar es: "+ total + "peso");*/

/* ejercicio 7
var  horas = prompt("ingrese las horas trabajadas ");
horas = parseInt(horas);
if (horas <= 40) {
salario = horas * 16000;

}else{

salario = 40 * 16.000 + (horas - 40) * 20000;
}
alert("el salrio semanal es de "+ salario + "pesos.")*/

/* ejercicio 8
let nombre1 = prompt("ingrese su nombre");
let edad1 = prompt("ingrese la edad");
let nombre2 = prompt("ingres su nombre");
let  edad2 = prompt("ingrese la edad");

if (edad1<edad2){

    alert(nombre1 + "  tiene mas edad que " + nombre2);
 }else {
       (edad1>edad2)

     alert(nombre1 + " tienes mas edad que "+ nombre2);

    }*/


    let precio = prompt("ingrese de la camisa");
let cantidad = prompt("ingrese la cantidad de camisas compradas");

totalsindescuento = cantidad * precio

if (cantidad>=3) {
    descuento = 0.2 = totalsindescuento;
}else{
    descuento = 0.1 = totalsindescuento;
}
total = totalsindescuento - descuento;
 
alert("el total apagar es de "+ total + "pesos.");