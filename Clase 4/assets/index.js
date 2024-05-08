
// Piedra papel o tijera

function nombreJugador() {
    const nombre = prompt('Ingrese su nombre :)')
    return nombre
}

function jugada(nombre) {
    const eleccion = prompt('Elija una opción 1-Piedra, 2-papel, 3-tijera')
    console.log('-------------------------')
    console.log(`${nombre} jugó: ${eleccion}.`)
    console.log('-------------------------')

    return eleccion
}

function ganador(jugador1, jugador2, jugada1, jugada2) {
    if (jugada1 == 1 && jugada2 == 3 || jugada1 == 2 && jugada2 == 1 || jugada1 == 3 && jugada2 == 2) {
        console.log(`Ganó ${jugador1}`)
    } else if (jugada1 == jugada2) {
        console.log('El resulatado ha sido empate')
    } else {
        console.log(`Ganó ${jugador2}`)
    }
}

const jugador1 = nombreJugador()
const jugador2 = nombreJugador()

const jugada1 = jugada(jugador1)
const jugada2 = jugada(jugador2)

ganador(jugador1, jugador2, jugada1, jugada2)
