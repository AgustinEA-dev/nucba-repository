
// SPREAD

const object1 = {
    num: 1,
    letter: 'a',
}

const object2 = {
    ...object1,
    day: 'wednesday',
    temp: '-24Cº',
    name: 'Agustín',
    lastName: 'Agustín',
}

const object3 = {
    ...object1, ...object2
}

console.log(object3)

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arr2 = [10, 11, 12, 13, 14, 15]

const arr3 = [...arr1, 10, 'perro', 'gato', { x: 5, y: 10 }]

console.log(arr3)

// DESTRUCTURING

const estudiantes = ['Agustín', 'Juan', 'Laura', 'Pablo', 'Cintia']

const [est1, est2, est3] = estudiantes

console.log(est1, est2, est3)