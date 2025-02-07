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
// TODO 完成的項目加上完成的時間戳記
// TODO 改成以打勾來確定完成項目
// TODO 可以拖拉項目的排序
// TODO 可以編輯項目
// TODO 可以新增分類
// TODO 已經完成的放到另一區塊
