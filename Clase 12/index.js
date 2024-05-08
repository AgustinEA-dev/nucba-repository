const body = document.querySelector('body')

// Enviando los elementos al DOM 

const div1 = document.createElement('div')
div1.classList.add('div1')
body.appendChild(div1)

const h3 = document.createElement('h3')
h3.classList.add('h3Div')
h3.innerHTML = '¡Esto es un h3!'
div1.appendChild(h3)

const h2 = document.createElement('h2')
h2.classList.add('h2')
h2.innerHTML = 'Flores y luna'
body.appendChild(h2)

const img = document.createElement('img')
img.classList.add('img')
img.src = './assets/flores y luna (20231213011037).png'
body.appendChild(img)

const img1 = document.createElement('img')
img1.classList.add('img')
img1.setAttribute('src', './assets/ROMANTICO (20230819044202).jpg')
body.appendChild(img1)
const link = document.createElement('a')
link.classList.add('button')
link.innerHTML = 'Ir a ilustraciones'
link.href = 'https://integrador-1-ruby.vercel.app/'
body.appendChild(link)

// Enviando los elementos al DOM con bloque HTML

const form = `
<form class ="form">
<h3> Form example </h3>
<input class = "input" type="text" placeholder="First name">
<input class = "input" type="text" placeholder="Last name">
<input class = "input" type="password" placeholder="Password">
</form>
`
body.innerHTML += form

// innerHTML + Template Literal + MAP/Loop

const arr = [1, 2, 3]
const animales = ['Perro', 'Gato', 'Ave', 'Serpiente']

const caja = document.createElement('div')
caja.classList.add('caja')
body.appendChild(caja)

const contenidoCaja = `<h3 class="h3">InnerHTML + Map + Temple literal</h3>
<p class="p">Estos son los números del array: ${arr.map((num) => num)}</p>
<h3 class ="h3">Estos son los animales</h3>
${animales.map((animal) => `<p class ="p">Soy ${animal}</p> `)}
`
caja.innerHTML += contenidoCaja


const cardsContainer = document.createElement('div')
cardsContainer.setAttribute('class', 'cardContainer')
body.appendChild(cardsContainer)

const cardContainer = document.querySelector('.cardContainer')

const card = {
    name: 'card',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa perspiciatis quidem nemo, id distinctio necessitatibus nostrum, neque animi assumenda sint sit quasi magni accusantium similique officiis illo architecto nisi iste.',
    image: './assets/Encuentro-UFO.png'
}

const card1 = {
    name: 'card1',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa perspiciatis quidem nemo, id distinctio necessitatibus nostrum, neque animi assumenda sint sit quasi magni accusantium similique officiis illo architecto nisi iste.',
    image: '.assets/flores y luna (20231213011037).png'
}

function createCard(card1) {
    const { name, description, image } = card
    return `
    <div class="card">
    <img src=${image} alt=${name} class="img">
    <h2>${name}</h2>
    <p>${description}</p>
</div>
    `
}

cardContainer.innerHTML = createCard(card)

