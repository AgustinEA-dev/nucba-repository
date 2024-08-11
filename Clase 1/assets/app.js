const persona = {
    nombre: ["Bob", "Smith"],
    edad: 32,
    genero: "masculino",
    intereses: ["música", "esquí"],
    bio: function () {
        alert(
            `${this.nombre[0]} ${this.nombre[1]} tiene ${this.edad} años. Le gusta la ${this.intereses[0]} y el ${this.intereses[1]}.`,
        );
    },
    saludo: function () {
        alert("Hola, Soy " + this.nombre[0] + " " + this.nombre[1] + ". ");
    },
};

const nombrePersonalizado = "altura"
const valorPersonalizado = "1.75"

persona[nombrePersonalizado] = valorPersonalizado



console.log(persona)
console.log(persona.nombre)
console.log(persona.altura)

function logName(objeto) {
    const { nombre } = persona
    console.log(nombre)
}

logName(persona)

function cambiarEdad(objeto, num, ocupación) {
    persona.edad = num
    persona["nombre"]["apellido"] = "Cratchit"
    persona["ojos"] = "avellana"
    persona["ocupación"] = ocupación
    console.log(objeto)
    console.log(objeto.nombre.apellido)
}

cambiarEdad(persona, 45, "músico")

class Persona {
    constructor(nombre, apellido, edad, genero, intereses) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.genero = genero;
        this.intereses = intereses;
    }
}

const person1 = new Persona("Agustín", "Álvarez", 37, "hombre", ["música", "artes visuales"])

const person2 = Object.create(person1)

const person3 = new Persona("Emilio", "Lucero", 35, "hombre", ["música", "comida"])

const person4 = new person1.constructor("Milena", "Gracioso", 34, "Mujer", ["teatro", "cocina"])

const cardContainer = document.querySelector(".root")

const createUser = (usuario) => {
    const { nombre, apellido, edad, genero, intereses } = usuario
    const cardTemplate = `<div class="card">
    <h1>${nombre} ${apellido}</h1>
    <h2>Edad: ${edad}</h2>
    <h2>Género: ${genero}</h2>
    <h2>Intereses: ${intereses[0] + ", " + intereses[1]}</h2>
    </div>
    `
    return cardTemplate

}

const createUser1 = (usuario) => {
    const { nombre, apellido, edad, genero, intereses } = usuario
    const cardTemplate = `<div class="card">
    <h1>${nombre} ${apellido}</h1>
    <h2>Edad: ${edad}</h2>
    <h2>Género: ${genero}</h2>
    <h2>Intereses: ${intereses[0] + ", " + intereses[1]}</h2>
    <h2>Comentarios: </h2>
    </div>
    `
    return cardTemplate

}

const usuario1 = createUser(person1)
const usuario2 = createUser(person4)
const usuario3 = createUser(person3)
const usuario4 = createUser1(person3)

const addToDom = (container, usuario) => {
    container.innerHTML += usuario
}

addToDom(cardContainer, usuario1)
addToDom(cardContainer, usuario2)
addToDom(cardContainer, usuario3)
addToDom(cardContainer, usuario4)
addToDom(cardContainer, usuario1)




class Person {
    name
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    introduceSelf() {
        console.log(`¡Hola!, soy ${this.name}`);
    }
}

const sarah = new Person("Sarah")
console.log(sarah)


class Auto {
    marca
    color
    modelo
    año
    constructor(marca, color, modelo, año) {
        this.marca = marca,
            this.color = color,
            this.modelo = modelo,
            this.año = año
    }
}

const auto = new Auto("nissan", "verde", "airpro", 1987)
console.log(auto);
addToDom(cardContainer, auto)

