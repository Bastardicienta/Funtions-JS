// Escribe una función que reciba un parámetro y lo imprima en consola.

function message(name){
    console.log ("La calmación, que estoy aprendiendo, " + name + " >:v");
}
//message("Ramón");

// Escribe una función que reciba dos parámetros, los sume e imprima en consola el resultado de la operación.

function add(num1,num2){
    if(typeof num1 != 'number' || typeof num2 != 'number'){
        console.log("Sólo ingresa números, por favor");
    }else{
    console.log("El resultado es: " + (Number(num1) + Number(num2)));
    }
}
//add(-8,7)

// Escribe una función que reciba dos parámetros, los reste e imprima en consola el resultado de la operación.

function subtract(num1,num2){
    if(typeof num1 != 'number' || typeof num2 != 'number'){
        console.log("Sólo ingresa números, por favor");
    }else{
    console.log("El resultado es: " + (Number(num1) - Number(num2)));
    }
}
//subtract(7,-8)

// Escribe una función que reciba dos parámetros, los multiplique e imprima en consola el resultado de la operación.

function multi(num1,num2){
    if(typeof num1 != 'number' || typeof num2 != 'number'){
        console.log("Sólo ingresa números, por favor");
    }else{
    console.log("El resultado es: " + (Number(num1) * Number(num2)));
    }
}
//multi(7,-8)

// Escribe una función que reciba dos parámetros, los divida e imprima en consola el resultado de la operación. 

function divide(num1,num2){
    if(typeof num1 != 'number' || typeof num2 != 'number'){
        console.log("Sólo ingresa números, por favor");
    }else{
    console.log("El resultado es: " + (Number(num1) / Number(num2)));
    }
}
//divide(16,-8)

// Escribe una función que reciba el radio de un círculo como parámetro, calcule el área del círculo e imprima en consola.