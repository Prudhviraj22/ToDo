
const addTaskBtn = document.getElementById("add-task-btn");
const taskContainer = document.getElementById("add-task-container");
const inputTask = document.getElementById("input-task");

addTaskBtn.addEventListener("click", () => {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  let checkBtn = document.createElement("button");
  checkBtn.innerHTML = "check";
  checkBtn.classList.add("checkTask");
  task.appendChild(checkBtn);

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "delete";
  deleteBtn.classList.add("deleteTask");
  task.appendChild(deleteBtn);
  if (inputTask.value === "") {
    alert("Please enter a task");
  } else {
    taskContainer.appendChild(task);
  }

  inputTask.value = "";
  checkBtn.addEventListener("click", () => {
    li.style.textDecoration = "line-through";
    // li.style.textDecoration ="none"
  });
  deleteBtn.addEventListener("click", () => {
    task.remove();
  });
  inputTask.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTaskBtn.click();
    }
  });
});
