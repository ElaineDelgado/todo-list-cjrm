const formAddTodo = document.querySelector('form.form-add-todo') 
const inputSearchTodo = document.querySelector('.form-search input')
const todosContainer = document.querySelector('ul.todos-container')

formAddTodo.addEventListener('submit', event => {
  event.preventDefault()

  const inputValue = event.target.add.value

  todosContainer.innerHTML += `
  <li class="list-group-item show" data-todo="${inputValue}">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete" data-delete="${inputValue}"></i>
      </li>
  `
  event.target.reset()
})

const removeTodo = (event) => {
  const dataDelete = event.target.dataset.delete
  const todo = document.querySelector(`[data-todo="${dataDelete}"]`)
  todo.remove()
}

const searchTodo = (event) => {
  const inputValue = event.target.value.trim().toLowerCase()
  Array.from(todosContainer.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach((todo) => {
      todo.classList.remove('show')
      todo.classList.add('hidden')
    })
  Array.from(todosContainer.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(inputValue))
    .forEach((todo) => {
      todo.classList.remove('hidden')
      todo.classList.add('show')
    })
}

todosContainer.addEventListener('click', removeTodo) 
inputSearchTodo.addEventListener('input', searchTodo)


// as classes adicionadas ou removidas foram modificadas pois antes utilizavam classes Bootstrap para mostrar
//  ou esconder o elemento  o que pode causar erro caso alguém remova essas essas classes no arquivo HTML
// (o que eu fiz, e depois a busca parou de funcionar e tive que buscar o erro.)