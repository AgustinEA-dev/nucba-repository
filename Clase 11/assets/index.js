const btn = document.querySelector('.btn')
const main = document.querySelector('main')
const divBtn3 = document.querySelector('.divBtn3')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const body = document.querySelector('body')
const h2 = document.querySelector('.h2')
const h2PRev = document.querySelector('.preventDef')
const form = document.querySelector('form')
const btn4 = document.querySelector('form button')
const btnModo = document.querySelector('.btn5')

btn.addEventListener('click', () => {
    console.log('Funciona!!!')
})

btn2.addEventListener('click', () => {
    h2.innerHTML = 'El botón dos fue clickeado con éxito.'
})

btn3.addEventListener('click', () => {
    divBtn3.innerHTML = `<div class = "divBtn3-var"></div> `
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event)
    h2.innerHTML = 'Formulario enviado atravez del evento "submit".'

})

btn4.addEventListener('click', (event) => {
    console.log(event)
    h2PRev.innerHTML = 'Formulario enviado atravez del evento "click".'
})

// stop propagation

const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

parent.addEventListener('click', () => {
    h2PRev.innerHTML = 'Parent cliqueado.'
})

child.addEventListener('click', (event) => {
    event.stopPropagation()
    h2.innerHTML = 'Child cliqueado.'
})

// estilos desde javascript

let divEstilos = document.querySelector('#estilos')
divEstilos.style.backgroundColor = ''
divEstilos.style.color = 'white'
divEstilos.style.fontSize = '50px'
divEstilos.style.textAlign = 'center'
divEstilos.innerHTML = '<h2 class="h2divEstilos">¡Hola Mundo!</h2>'
// divEstilos.style.position = 'relative'
// divEstilos.style.top = '100px'
// divEstilos.style.right = '200px'
console.log(divEstilos.style)

// modificar las classLists desde javascript

// btnModo.addEventListener('click', () => {
//     if (body.classList.contains('dark')) {
//         body.classList.remove('dark')
//     } else {
//         body.classList.add('dark')
//     }
// })

// modificar con toggle

btnModo.addEventListener('click', ()=>{
    body.classList.toggle('dark')
})

