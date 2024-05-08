
// Objetos, This, Funciones

const cliente1 = {
    nombre: 'Agustín Álvarez',
    saldo: 0,
    cuentaCorriente: false,
    depositar: function (monto) {

        this.saldo += monto
        console.log('Depositaste $' + monto)
        console.log('##################')
        console.log('Dispones de: $' + this.saldo)
        console.log('Muchas gracias por operar en nuestros cajeros automáticos.')
    },
    extraer: function (monto) {
        this.saldo -= monto
        console.log('Retiraste $' + monto)
        console.log('##################')
        console.log('Dispones de: $' + this.saldo)
        console.log('Muchas gracias por operar en nuestros cajeros automáticos.')
    },
    consultar: function () {
        console.log('Su saldo es de $' + this.saldo)
        console.log('Muchas gracias por operar en nuestros cajeros automáticos.')
    }
}

cliente1.consultar()
cliente1.depositar(3000)
cliente1.consultar()
cliente1.extraer(1500)
cliente1.consultar()
cliente1.extraer(1.5)

const input = prompt('Ingrese una opción\n 1-Consultar\n 2-Depositar\n 3-Extraer')

if (input == 1) {
    cliente1.consultar()
} else if (input == 2) {
    let monto = parseInt(prompt('Ingrese el monto a depositar'))
    cliente1.depositar(monto)
} else if (input == 3) {
    let retiro = parseInt(prompt('Cuanto dinero deseas retirar?'))
    cliente1.extraer(retiro)
} else 'ERROR:::!, ingrese una opción válida'


