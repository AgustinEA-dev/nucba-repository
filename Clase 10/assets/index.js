const h1 = document.querySelector('.h1')
console.log(h1)

h1.innerHTML = "Introducción al DOM - / Modelo de documento del objeto."

const body = document.querySelector('body')
console.log(body)
console.dir(body)


const h2s = document.getElementsByTagName('h2')
console.log(h2s)

const h2 = document.getElementById('subtitulo')
h2.innerText = 'Welcome to the jungle. You gonna die!!!'.toUpperCase()
h2.style.color = 'red'
h2.style.fontSize = '50px'

console.log(h2)

const h3 = document.querySelector('h3')
h3.style.backgroundColor = 'green'
h3.style.color = 'white'
h3.style.fontFamily = 'helvetica'
h3.style.textAlign = 'center'
h3.style.padding = '20px'
h3.innerText = 'Ejercitación DOM - h3'
console.log(h3)

const div = document.querySelector('div')
div.style.display = 'flex'
div.style.flexDirection = 'column'
div.style.alignItems = 'center'
div.style.padding = '20px'
div.style.gap = '10px'
div.style.backgroundColor = 'black'
div.style.maxWidth = '500px'
div.style.width = '30%'

const button = document.querySelector('button')
button.style.backgroundColor = 'magenta'
button.style.border = 'none'
button.style.fontSize = '20px'
button.style.color = 'white'
button.style.padding = '10px'
button.style.borderRadius = '10px'

const span = document.querySelector('span')
span.style.border = '2px solid magenta'
span.style.padding = '10px'
span.style.backgroundColor = 'white'
console.log(span)

const ul = document.querySelector('ul')
ul.style.display = 'flex'
ul.style.gap = '50px'
ul.style.justifyContent = 'center'
ul.style.listStyle = 'none'
ul.style.padding = '0'
ul.style.backgroundColor = 'orange'

const lis = document.querySelectorAll('li')

console.dir(lis)


const colors = ['red', 'blue', 'green']

function changeColor() {

    lis.forEach(li => {
        li.style.color = 'white'
        li.style.fontSize = '20px'
        li.style.fontFamily = 'Jersey 10'
    });

}

changeColor()

const sabor = prompt('Ingrese su sabor preferido')
const div2 = document.querySelector('.div2')

div2.innerHTML = `<h3> Su sabor preferido es ${sabor}</h3>.`

