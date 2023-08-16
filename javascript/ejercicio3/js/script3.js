/* Ejercicio 1 - Una tienda ofrece un 25% de descuento por cada compra. Un cliente desea
saber cuánto deberá pagar por su compra.*/

/*let compra = prompt("escriba el valor de su compra");
let desc = (25/100);
let tpag = parseInt(compra*desc);
alert("su total  de pagar es: "+tpag);*/

/* Ejercicio 2 - Suponga que un individuo desea invertir su capital en un banco y desea saber
cuánto dinero ganara después de un mes si el banco paga a razón de 2%
mensual. */

/*let invercion = prompt("escribir valor de invercion ")
let razon = (2/100);

let trazon = parseInt(invercion*razon)
alert("su ganancia del mes es: " +trazon)*/

/*ejercicio 3 Un alumno desea saber cuál será su calificación final en la materia de
Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
c. 15% de la calificación de un trabajo final.*/

/*let promedio = prompt("ingrse el promedio de su calificaciones");
let exa = prompt("ingrese la calificacion de su examen final ");
let trab = prompt("ingrse su calificacion del trabajo final ");
let pro1 = 55/100
let pro2 = 30/100
let pro3 = 15/100
let pr = parseInt (promedio*pro1);
let pe = parseInt (exa*pro2);
let pt = parseInt (trab*pro3);
let cf = parseInt(pr)+ parseInt(pe)+ parseInt(pt);
alert("su calificacion final de la materia de algoritmo es: " +cf );*/

/*  Ejercicio 4 El dueño de una tienda compra un artículo a un precio determinado. Obtener el
precio en que lo debe vender para obtener una ganancia del 30%.*/

/*let compra = prompt("ingrese el valor del articulo");
let porce = 30/100;
let gan = parseInt(compra)+ parseInt(compra*porce);
alert("el producto que se debe vender es de: "+gan);*/


/*  Ejercicio 5 Un taxi cobra por una carrera 15 mil pesos por kilómetro recorrido y 2 mil por
minuto. Determine el monto a pagar por una carrera */

/*let distancia = prompt("ingrse la distacia que recorrio ");
let tiempo = prompt("ingrese el tiempo que recorrio ");
let tpag = parseInt(15000*distancia)+ parseInt(2000*tiempo);
alert("su total de pagar es: "+tpag);*/

/*  Ejercicio 6 Realizara un programa en el cual se van a leer tres números y determinar el
cuadrado de cada uno de ellos. */

/*let num1 = prompt("ingrese el primer numero ")
let cuadr1 = num1 * num1 
alert("el cuadrado 1 es de: "+cuadr1)
let num2 = prompt("ingrese el segundo numero ")
let cuadr2 = num2 * num2 
alert("el cuadrado 2 es de: "+cuadr2)
let num3 = prompt("ingrese el tercer numero ")
let cuadr3 = num3 * num3
alert("el cuadrado 3 es de: "+cuadr3)*/

/*  Ejercicio 7 En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología. El
presupuesto anual del hospital se reparte conforme a la sig. tabla: 

Área Porcentaje del presupuesto
Ginecología 40%
Traumatología 30%
Pediatría 30%

Obtener la cantidad de dinero que recibirá cada área, para cualquier monto
presupuestal.*/

let prosupes = prompt("ingrese el prosupueto del hospital ")
let gine = 40/100
let Traum = 30/100
let pediat= 30/100
let pros = parseInt(prosupes*gine);
let pros2 = parseInt(prosupes*Traum);
let pros3 = parseInt(prosupes*pediat);
let trecb = parseInt(pros)+ parseInt(pros2)+ parseInt(pros3);
alert("la cantidad de dinero que recibira es: "+trecb);

/*Ejercicio 3 */

