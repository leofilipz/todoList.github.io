let addTaskButton = document.getElementById("add-button")
let inputTask = document.getElementById("task")
let container = document.getElementById("container")

addTaskButton.addEventListener('click', function(){
    var newEl = document.createElement('div')
    var text = document.createElement('p')
    var button = document.createElement('button')
    container.appendChild(newEl)
    newEl.classList.add('frst')
    newEl.appendChild(text)
    newEl.appendChild(button)
    button.classList.add('close')
    button.innerText = "✖"
    text.innerText = inputTask.value
    inputTask.value = ""

    button.addEventListener('click', function(){
        container.removeChild(newEl)
    })
})