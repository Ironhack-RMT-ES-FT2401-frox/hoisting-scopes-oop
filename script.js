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



// Crear metodos en JS y la palabra reservada "this".


let person = {
  name: "alicia",
  place: "el pais de las maravillas",
  friends: ["sombrerero", "gato chesire", "liebre de marzo", "humty dumpty", "conejo blanco"],
  saludar(personaASaludar) {
    // metodo es el nombre que se le da a una funcion que pertenece a un objeto.
    // return `hola, mi nombre es ${person.name}`

    // la palabra "this"
    console.log(this) // en objetos, this siempre apunta al objeto donde se esta llamando
    return `hola ${personaASaludar}, mi nombre es ${this.name} de ${this.place}`
  },
  tamañoActual() {

    let randomNumber = Math.random() * 100 // 0 - 99.999999999

    if (randomNumber < 50) {
      return `${this.name} es pequeña`
    } else {
      return `${this.name} es grande`
    }
    
  },
  desearFelizNoCumpleaños() {

    // este metodo va a desear feliz no cumpleaños a un amigo aleatorio de Alicia

    let cantidadDeAmigos = this.friends.length
    let randomFriendIndexFloat = Math.random() * cantidadDeAmigos // 0 - 4.999999
    let randomFriendIndex = Math.floor(randomFriendIndexFloat)
    let unAmigo = this.friends[randomFriendIndex] // 0, 1, 2, 3, 4

    return `Feliz feliz no cumpleaños a ${unAmigo}`
  }
}




console.log( person.name )
console.log( person.saludar("reina") )

person.name = "alice";
console.log( person.name )
console.log( person.saludar("gusano") )

console.log( person.tamañoActual() )

console.log(person.desearFelizNoCumpleaños())




// Classes

// las clases deberian escribirse PascalCasing
class Hero {

  // definimos como estaran organizadas las propiedades
  constructor( parametroName, parametroSecretIdentity ) {
    // this this.nombreDePropiedad asignamos propiedades a los objetos creados de esta clase
    this.name = parametroName;
    this.secretIdentity = parametroSecretIdentity;
    this.isEvil = false; // ejemplo de una propiedad estatica
  }

  // definimos como estaran organizadas los metodos
  revelarIdentidadSecreta() {
    return `${this.name} dice: Mi identidad secreta es: ${this.secretIdentity}`
  }

  convertirseEnVillano() {
    this.isEvil = true;
    return `${this.name} se ha vuelto villano! Muahahahaha!`
  }

}

// como generamos un objeto basado en esta plantilla

let heroObjet1 = new Hero( "Iron Man", "Tony Stark" )
console.log(heroObjet1)

// podría hacer => heroObjet1.isEvil = true
console.log( heroObjet1.revelarIdentidadSecreta() )
console.log( heroObjet1.convertirseEnVillano() )
console.log(heroObjet1)

let heroObjet2 = new Hero( "Black Widow", "Natasha Romanoff" )
console.log(heroObjet2) 

console.log( heroObjet2.revelarIdentidadSecreta() )

// console.log( new Hero("patataman", "bob") )


// que pasa si yo quiero un subplantilla para superheroes (subclase)

// class subclase extens clasePadre {...}
class SuperHero extends Hero {

  // propiedades
  constructor(parametroName, parametroSecretIdentity, superpower) {
    super(parametroName, parametroSecretIdentity)
    // super pasa todos los argumentos a la clase padre para definir las propiedades indicadas en la clase padre
    this.superPower = superpower

  }

  // metodos
  usarSuperPoder(target) {
    return `${this.name} ha usado el poder de ${this.superPower} sobre ${target}`
  }

}

let superheroObject1 = new SuperHero("Spider-man", "Peter Parker", "Lanzar telarañas")
console.log(superheroObject1)

console.log( superheroObject1.revelarIdentidadSecreta())


let superheroObject2 = new SuperHero("Wolverine", "Logan", "garras de adamantiun")

console.log(superheroObject1.usarSuperPoder(superheroObject2.name))
console.log(superheroObject2.usarSuperPoder(heroObjet1.name))