// replace

const frase = 'La mejor marca de guitarras es Gibson. La fabrica de Gibson queda en EE.UU'

const nuevaFrase = frase.replace('Gibson', 'Fender')

console.log(nuevaFrase)

// replaceAll

console.log(frase.replaceAll('Gibson', 'Fender'))

// length

const carrera = 'Compositor con medios electroacústicos'
console.log(carrera.length)

// toUpperCase

const animal = 'Ballena azul'
console.log(animal.toUpperCase())

// toLowerCase

const vegetal = 'MANZANA_DELICIOSA'
console.log(vegetal.toLowerCase())

// Trim

const nombreYApellido = ' Agustín Álvarez '
const nYATrim = nombreYApellido.trim()

console.log(nombreYApellido.length)
console.log(typeof (nombreYApellido))
console.log(nombreYApellido.trim())

const arrayFrase = nuevaFrase.split()
const arrayVeggie = vegetal.split("_")

const ballenaTrim = animal.split(' ')

ballenaTrim.forEach(word => {
    console.log(word.toUpperCase())
});

console.log(ballenaTrim)

const newBallena = ballenaTrim.map((word) => {
    return word.toUpperCase()
})

console.log(newBallena)

// includes

console.log(newBallena.includes('Ballena'.toUpperCase()))

console.log(vegetal.includes('manzana') ? 'Influye manzana' : 'No la incluye')

console.log(vegetal.slice(0, 7))