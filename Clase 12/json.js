const bienvenido = document.querySelector('#bienvenido')

if (localStorage.nombre) {
    let nombreDelStorage = localStorage.getItem('nombre')
    bienvenido.innerHTML = `Bienvenido ${nombreDelStorage}`
}

const form = document.querySelector('form')
const nombre = document.querySelector('.nme')
const apellido = document.querySelector('.lst')
const edad = document.querySelector('.age')
const body = document.querySelector('body')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const estudiante = {
        nombre: nombre.value,
        apellido: apellido.value,
        edad: edad.value
    }
    bienvenido.innerHTML = `Bienvenido ${estudiante.nombre} ${estudiante.apellido}`
    localStorage.setItem('estudiante', JSON.stringify(estudiante))

    body.innerHTML += `
<div>
<h2>Nombre: ${estudiante.nombre} </h2>
<h2>Apellido: ${estudiante.apellido} </h2>
<h3>Apellido: ${estudiante.edad} </h3>
`
    form.reset()
})