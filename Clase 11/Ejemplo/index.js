const taskInput = document.querySelector('#task-input')
const addTaskBtn = document.querySelector('#addTaskBtn')
const ul = document.querySelector('ul')

function creatTaskItem(taskText) {
    const taskItem = document.createElement('li')
    taskItem.classList.add('task')
    taskItem.innerHTML = `
    <span>${taskText}</span>
    <button class = "completeButton">Complete</button>
    <button class = "deleteBtn">Delete</button>
    `
    const completeButton = taskItem.querySelector('.completeButton')
    const deleteButton = taskItem.querySelector('.deleteBtn')
    completeButton.addEventListener('click', () => {
        taskItem.classList.toggle('completed')
        completeButton.disabled = true
    })
    deleteButton.addEventListener('click', () => {
        taskItem.remove()
    })

    return taskItem
}

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim()
    if (taskText !== '') {
        const taskItem = creatTaskItem(taskText)
        taskList.appendChild(taskItem)
        taskInput.value = ''
    }
})


