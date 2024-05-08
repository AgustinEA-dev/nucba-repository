let helados = ['banana split', 'pistachio', 'frutilla', 'chocolate']
let heladosProhibidos = ['menta granizada', 'super gridito', 'crema del cielo']

// concat, toString, indexof, length

console.log(`La longitud de este array es de ${helados.length} elementos`)
console.log(`La longitud de este array es de ${heladosProhibidos.length} elementos`)
console.log("El helado más feo está en la posición: " + heladosProhibidos.indexOf("super gridito"),)
console.log(helados.toString())

const heladosConcat = helados.concat(heladosProhibidos)
console.log(heladosConcat)

let animales = ['perro', 'gato', 'águila', 'serpiente']

animales.push('toro')
animales.unshift('tortuga')
animales.pop()
animales.shift()

console.log(animales)

let animalLargo = animales.pop()

console.log(animales)
console.log(animalLargo)

let mejorHelado = helados.shift()

console.log(mejorHelado)
console.log("Es un " + typeof (mejorHelado))

console.log(`Me gusta la combinación de ${helados[1]} con ${heladosProhibidos[2]}.`)

console.log("Helados es un " + typeof (helados))
console.log("Animales es un " + typeof (animales))
console.log("Mejor helado es un " + typeof (mejorHelado))

console.log(typeof (helados[0]))

console.log(animales.join(' - '))
console.log(animales.reverse())

console.log(animales.slice(1, 2))
console.log(animales.push('perro', 'águila', 'toro'))

console.log(animales)

console.log(animales.splice(2, 3))
console.log(animales.slice(0, 1))

console.log(animales.push('perro', 'águila', 'toro'))
console.log(animales)

let animalesSlice = animales.slice(1, 3)
console.log(animales)

console.log(animales.splice(1, 3))

console.log(animales)

console.log(animales.slice(-2))

console.log(animalesSlice)

console.log(helados[0])

console.log(mejorHelado)

// Callbacks
// const numeros = [1, 2, 3, 4, 5, 6, 7]

// numeros.forEach(numero => {
//     console.log(numero)
//     console.log(`Hola soy el número ${numero}`)

// });
const colores = ['azul', 'rojo', 'verde', 'marrón', 'gris', 'anaranjado']
const animalesNew = ['perro', 'gato', 'águila', 'serpiente', 'vaca', 'yacaré']


for (let i = 0; i < animalesNew.length; i++) {

    console.log(`${animalesNew[i].toUpperCase()} ${colores[i]}`)

}

const coloresUpperCase = colores.map((color) => {
    return `${color.toUpperCase() + " LINDO".toLocaleLowerCase()}`
})

console.log(coloresUpperCase)
console.log(colores)

const coloresAnimales = animalesNew.map((animal) => {
    return animal + " azul"
})

const animalFilter = animales.filter((animal) => {
    return animal[2] === 'r'
})

console.log(animalFilter)

console.log(coloresAnimales)

const marcasBebidas = ['coca cola', 'sprite', 'vino toro', 'villa vicencio', 'tang', 'fanta']

marcasBebidas.forEach(marca => {
    console.log(marca)
});

const nuevasMarcas = marcasBebidas.map(marca => marca)

nuevasMarcas.forEach(marca => {
    console.log(marca.toUpperCase())

});




