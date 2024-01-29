console.log("probando")



// hoisting es un proceso que ocurre en JS donde se realiza una prelecture del código y todas las variables creadas con var se suben al inicio del codigo pero sin valor.

// hoisting tambien ocurre para funciones creadas con la palabra function. En este caso la funcion de sube al inicio del codigo con la referencia de la funcion.

// var myName; // la caja se crea vacia
// function myFunction() {...} // ref. 1234


// var y let

// console.log("antes de declarar", myAge)

let myAge = 42;

// let myAge; // ya existe esta caja



console.log("antes de declara", myName) // la caja existe, pero el valor es undefined

var myName = "jorge"

console.log(myName)

// aqui pudieran haber 2000 lineas de codigo

var myName = "bob"

console.log(myName)



// hoisting en funciones

console.log(myFunction()) // ref. 1234


function myFunction() {
  return "hola"
} // ref. 1234


console.log(myFunction()) // ref. 1234

function myFunction() {
  return "adios"
} // OCURREN MUCHOS BUGS

let otrafuncion = function() {
  return "algo"
} // no hace hoisting por la palabra let

// conclusiones

/* 

- nunca usar var.
- puedes usar function, PERO tener cuidado de no reutilizar el mismo nombre de funcion.
- Se puede trabajar organizando todas las funciones al final del codigo, y se invocan al inicio. Solo creando funciones con la palabra function.

*/


// SCOPES

// bloques de código donde podemos escribir JS y son independientes entre ellos.


/* 
- SCOPE GLOBAL. Todo lo que existe en la base de JS
- SCOPE DE BLOQUE. las pequeñas secciones {} donde escribimos codigo. codicionales, bucles, switch
- SCOPE DE FUNCIONES. la seccion donde escribimos codigo en una funcion
*/

// - SCOPE GLOBAL
let someNumber = 10; // - SCOPE GLOBAL. puedo acceder en CUALQUIER lugar del codigo.

console.log(someNumber)

function algo() {
  for(let i = 0; i < 10; i++) {
    if (true) {
      console.log(someNumber)
    }
  }
}

algo()


// - SCOPE DE BLOQUE.

console.log(variableInBlockVar)
// console.log(variableInBlockSinPalabraDeCreación)

if (true) {

  var variableInBlockVar = "Variable creada con var en Scope Bloque"
  let variableInBlock = "Variable creada con let en Scope Bloque"
  variableInBlockSinPalabraDeCreación = "Variable creada en Scope Bloque. Sin palabra let o const" // se crea en Scope global

  console.log(variableInBlock)

}
console.log(variableInBlockVar)
let variableInBlock = "variable creada en Global"
console.log(variableInBlock)

console.log(variableInBlockSinPalabraDeCreación)



// SCOPE DE FUNCTION


function testFunction() {
  
  console.log(varVar)


  let varLet = "variable con let en funcion"
  var varVar = "variable con var en funcion"
  // el hoisting de esta variable var ocurren dentro del scope de la funcion
  varSinDeclarar = "variable sin declarar" // se crea en el SCOPE Global

}


testFunction()


// console.log(varLet) // NO
// console.log(varVar) // NO
console.log(varSinDeclarar)


// conclusiones 2:

/* 
- no usar var
- NUNCA crear variables sin palabra let o const
- saber que las variables existen dentro de sus scopes
- Hoisting y Scopes son preguntas tecnicas comunes en entrevistas. Estudiar esto cuando nos preparemos para entrevistas.

*/