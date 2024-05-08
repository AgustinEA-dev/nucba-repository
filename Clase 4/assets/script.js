// SUMA

const sumar = (a, b) => {
    const res = a + b
    console.log(res)
    if (res % 2 == 0) {
        console.log(`El resultado es ${res}. Es un número par.`)
    } else {
        console.log(`El resultado ${res}. No es par.`)
    }
}
sumar(12, 5)
sumar(32, 5)
sumar(15, 5)

// SALUDO - pasamos un String como parametro.

function saludar(nombre) {
    console.log(`Hola ${nombre}`)
}

saludar('Agustin')
saludar('Juan')
saludar('Laura')

// DEFINIR PARAMETRO PREDETERMINADO

function multiplicar(a, b = 1) {
    console.log(a * b)
}

multiplicar(5)
multiplicar(10)

// Imprimir si es menor que el parámetro

const esMenor = (num) => {
    if (num > 10) {
        return
    }
    console.log(num)
}

esMenor(2)
esMenor(21)

//PASAR COMO PARAMETRO UNA FUNCIÓN

function mult(a, b) {
    return a * b
}

function sum(a, b) {
    return a + b
}

const res = sum(mult(5, 2), 5)

// ARROW FUNCTION

const saludar2 = (nombre) => console.log(nombre)

saludar2('Pedro')

const despedir = (nombre) => console.log(`Estas despedido ${nombre}`)

despedir('Pablo')

// CALLBACKS - es una función que se pasa a otra función como parámetro.

// function alertHola(nombre) {
//     alertHola(`Hola ${nombre}`)
// }

// function consoleHola(nombre) {
//     console.log(`Hola ${nombre}`)
// }

// function procesarCallback(callback) {
//     const nombre = prompt('Ingrese su nombre')
//     callback(nombre)
// }

// procesarCallback(consoleHola)

const add = (a, b) => {
    return a + b
}

function handler(func) {
    const resultado = func(20, 5)
    console.log(resultado)
}

handler(add)