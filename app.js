document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.querySelector("#taskInput");
  const addBtn = document.querySelector("#addBtn");
  const todoList = document.querySelector(".todo-list");

  const createTaskItem = () => {
    const task = taskInput.value;
    const todoItem = `<li class="todo-item">
            <span class="item">${task}</span>
            <button class="closeBtn">X</button>
          </li>`;
    todoList.insertAdjacentHTML("afterbegin", todoItem);
    taskInput.value = ""; // 新增完項目之後，清空輸入框
    taskInput.focus(); // 新增完項目之後，讓游標回到輸入框
  };

  todoList.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      e.target.parentNode.remove();
    }
  });

  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      createTaskItem();
    }
  });

  addBtn.addEventListener("click", () => {
    console.log(createTaskItem());
  });
});
