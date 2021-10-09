// Escribe una función que reciba un parámetro y lo imprima en consola.

function message(name){
    console.log ("La calmación, que estoy aprendiendo, " + name + " >:v");
}
//message("Ramón");

// Escribe una función que reciba dos parámetros, los sume e imprima en consola el resultado de la operación.

function add(num1,num2){
    if(typeof num1 != 'number' || typeof num2 != 'number'){
        console.log("Sólo ingresa números, por favor");
    }
    else{
    console.log("El resultado es: " + (Number(num1) + Number(num2)));
    }
}
//add(-8,7)

// Escribe una función que reciba dos parámetros, los reste e imprima en consola el resultado de la operación.

function subtract(num1,num2){
    if(typeof num1 != 'number' || typeof num2 != 'number'){
        console.log("Sólo ingresa números, por favor");
    }
    else{
    console.log("El resultado es: " + (Number(num1) - Number(num2)));
    }
}
//subtract(7,-8)

// Escribe una función que reciba dos parámetros, los multiplique e imprima en consola el resultado de la operación.

function multi(num1,num2){
    if(typeof num1 != 'number' || typeof num2 != 'number'){
        console.log("Sólo ingresa números, por favor");
    }
    else{
    console.log("El resultado es: " + (Number(num1) * Number(num2)));
    }
}
//multi(7,-8)

// Escribe una función que reciba dos parámetros, los divida e imprima en consola el resultado de la operación. 

function divide(num1,num2){
    if(typeof num1 != 'number' || typeof num2 != 'number'){
        console.log("Sólo ingresa números, por favor");
    }
    else{
    console.log("El resultado es: " + (Number(num1) / Number(num2)));
    }
}
//divide(16,0.5)

// Escribe una función que reciba el radio de un círculo como parámetro, calcule el área del círculo e imprima en consola.

function circleArea(radio) {
    const pi=Math.PI
    if(typeof radio != 'number'){
        console.log("No lo hagas más difícil, amigo :'v");
    }
    else{
    console.log("El área del círculo es: " + (pi * Math.pow(radio,2)));
    }
}
//circleArea(6)

// Escribe una función que reciba como parámetro un valor en metros e imprima en consola su equivalente en kilómetros, con máximo dos decimales.

function convertLength(meters){
    if(typeof meters != 'number'){
        console.log("Sólo ingresa números, por favor");
    }
    else{
        console.log(meters + " metros es igual a " + (meters/1000).toFixed(2) +" kilómetros")
    }
}
//convertLength(1000)

// Escribe una función que reciba como parámetro un valor en grados Celsius e imprima en consola su equivalente en grados Farenheit, con máximo dos decimales.

function convertTemp(Celsius){
    if(typeof Celsius != 'number'){
        console.log("Sólo ingresa números, por favor");
    }
    else{
        console.log(Celsius + "° Celsius es igual a " + ((Celsius*1.8)+32).toFixed(2) + "° Fahrenheit")
    }
}
//convertTemp(5)

// Escribe una función que reciba las siguientes listas de números como parámetro y encuentre el valor más alto y más bajo en la lista. Lista1 = [10,4,2,20,5] Lista2=[0,0,0,1,0] Lista3=[-13,10,9,8,0,2000,-1]

//Con este me hice bolita

// Escribe una función que reciba dos parámetros con los que se calculará el valor exponencial de una base. El primer parámetro será la base y el segundo será el exponente. Imprimir el resultado del valor exponencial de la base en consola.

function exponential(base,exponent){
    if(typeof base !='number' || typeof exponent != 'number'){
        console.log("Sólo ingresa números, por favor");
    }
    else{
        console.log("El valor exponencial es " + Math.pow(base,exponent))
    }
}
exponential(3,2)

//Escribe una función que reciba un número como parámetro. Este número será la cantidad de veces que se debe solicitar, con la función prompt, que el usuario ingrese el nombre de un país diferente. Después de que el usuario ingrese el nombre de los países, el sistema debe mostrar un mensaje en pantalla indicando el nombre del país y cuántas letras tiene el nombre del país.

function counterCountry() {
    let repeat = prompt("¿cuántas veces quieres que se repita?");

    if (repeat == null || repeat == "" || !Number.isInteger(Number(repeat))) {
         alert("Ingrese información valida");
    } else {

         let paises = [];
         for (let index = 0; index < repeat; index++) {
              let pais = prompt("Ingrese el nombre del país");
              if (pais == null || pais == "") {
                   alert("Ingrese información valida");

              } else {
                   paises[index] = pais;
              }
         }

         for (let index = 0; index < paises.length; index++) {

              alert("La palabra: " + paises[index] + " tiene " + paises[index].length + " letras")

         }
    }

}
