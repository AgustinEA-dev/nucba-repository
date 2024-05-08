// CICLOS Y REPETICIONES

const array = [1, 2, 3, 4, 5, 6, 7]

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element)
}

console.log('*************************')

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element % 2 === 0) {
        console.log(element)
    }
}

console.log('*************************')

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element * 2)

}

console.log('*************************')
for (let i = 0; i < array.length; i++) {
    const element = array[i]
    if (element === 3) {
        console.log('Esto que estamos imprimiendo no tiene nada que ver, pero podemos hacerlo.')
    }
}

console.log('*************************')

const names = ['Agustin', 'Diego', 'Pablo', 'Laura', 'Joaquín']

function Saludar(nombre) {
    console.log(`Hola ${nombre}`)
}

names.forEach(name => {
    function Saludar(nombre) {
        console.log(`Hola ${nombre}`)
    }
    if (name === 'Agustin') {
        console.log('Coincide')
    }
    Saludar(name)

console.log(name)
console.log(name.toUpperCase())
console.log(name[2].toUpperCase())
console.log(name.includes('s'))
});
