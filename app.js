document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.querySelector("#taskInput");
  const addBtn = document.querySelector("#addBtn");

  addBtn.addEventListener("click", () => {
    console.log("Make sure that listening event can be catched from addBtn");
  });
});
