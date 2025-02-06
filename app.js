// 程式碼寫這裡
document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.querySelector("#taskInput")
  const addBtn = document.querySelector("#addBtn")
  const todoList = document.querySelector(".todo-list")

  const createTaskItem = () => {
    const todoItem = `<li class="todo-item">
            <span class="item">${taskInput.value}</span>
            <button class="closeBtn">X</button>
          </li>`
    todoList.insertAdjacentHTML("afterbegin", todoItem)
  }

  addBtn.addEventListener("click", () => {
    createTaskItem()
  })
})
