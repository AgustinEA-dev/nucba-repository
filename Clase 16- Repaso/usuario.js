const estudiante = JSON.parse(localStorage.getItem('estudiante'))

const body = document.querySelector('body')

body.innerHTML = `<div>
<h2>Nombre: ${estudiante.nombre}</h2>
<h2>Apellido: ${estudiante.apellido}</h2>
<h2>Edad: ${estudiante.edad}</h2>
</div>
<a href="./index.html"></a>`