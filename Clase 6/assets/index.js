
// CLOUSURE

// Un closure es la combinación de una función agrupada(dentro de otra) con referencias a su estado adyacente(el entorno léxico).En otras palabras, un closure te da acceso al alcance de una función externa desde una función interna.En JavaScript, los closure se crean cada vez que se crea una función, en el momento de la creación de la función.

// const generarFunción = () => {
//     const nombre = 'Mozilla'
//     const mostrarNombre = () => {
//         return alert(nombre)
//     }
//     return mostrarNombre

// }
// const nuevaFunción = generarFunción()

// nuevaFunción()

// OBJETOS

const producto = {
    nombre: "Kingston Fury Beast t34 16 GB",
    valoracion: 5,
    precio: 59186,
    caracteristicas: ["Memoria RAM de 16 GB para mejorar rendimiento en juegos", " velocidad de 3200 MHz para mayor fluidez en tus partidas", " compatible con sistemas AMD e Intel, fácil instalación", " certificación Intel XMP para un rendimiento óptimo y estable."]

}

console.log("Nombre: " + producto.nombre)
console.log("Valoración: " + producto.valoracion)
console.log("Precio: $" + producto.precio)
for (let i = 0; i < producto.caracteristicas.length; i++) {
    console.log(producto.caracteristicas[i])
}