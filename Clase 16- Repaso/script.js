const taskInput = document.querySelector('#taskInput')
const addTaskButton = document.querySelector('#addTaskButton')
const taskList = document.querySelector('#taskList')
const btnDark = document.querySelector('#modo')
const body = document.querySelector('body')
// creamos un toDo

const creatTaskItem = (task) => {
    const taskItem = document.createElement('li')
    taskItem.classList.add('task')
    taskItem.innerHTML = `<span>${task}</span>
    <button class="completeButton">Completa</button>
    <button class="deleteButton">Eliminar</button>`

    const completeButton = taskItem.querySelector('.completeButton')
    const deleteButton = taskItem.querySelector('.deleteButton')

    completeButton.addEventListener('click', () => {
        taskItem.classList.toggle('completed')
        completeButton.disabled = true
    })

    deleteButton.addEventListener('click', () => {
        taskItem.remove()
    })

    return taskItem
}

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim()
    if (taskText !== '') {
        const taskItem = creatTaskItem(taskText)
        taskList.appendChild(taskItem)
        taskInput.value = ''
    } else {
        alert('Necesitas ingresar al menos una tarea!')
    }
})

btnDark.addEventListener('click', () => {
    body.classList.toggle('dark')
    body.style.transition = '0.2s ease-in-out'
})

// Agregamos renderizado dinámico. formularios y storage

const form = document.querySelector('form')
const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const edad = document.querySelector('#edad')
const bienvenido = document.querySelector('#bienvenido')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    bienvenido.innerHTML = `Bienvenido ${nombre.value} ${apellido.value}`
    let estudiante = {
        nombre: nombre.value.trim(),
        apellido: apellido.value.trim(),
        edad: edad.value.trim()
    }
    console.log(estudiante)
    localStorage.setItem('estudiante', JSON.stringify(estudiante))
    form.reset()
})