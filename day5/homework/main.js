var taskInput = document.getElementById("task-input");
var submitBtn = document.getElementById("submit-btn");
var tableBody = document.getElementById("table-body");

var tasks = [];

class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }

  toggleComplete() {
    this.completed = !this.completed;
  }

  getCompletedState() {
    if (this.completed) return "Completed";
    else return "Incomplete";
  }
}

submitBtn.addEventListener("click", (event) => {
  let newTask = new Task(taskInput.value);
  tasks.push(newTask);
  crateTasksList();
  taskInput.value = "";
});

function crateTasksList() {
  tableBody.innerHTML = "";

  tasks.forEach((task) => {
    let newRow = document.createElement("tr");

    let taskName = document.createElement("td");
    taskName.innerHTML = task.name;

    let taskCompleted = document.createElement("td");
    taskCompleted.innerHTML = task.getCompletedState();

    let taskActions = document.createElement("td");
    let taskActionsBtn = document.createElement("button");
    taskActionsBtn.classList.add("btn");
    taskActionsBtn.classList.add("btn-secondary");
    taskActionsBtn.classList.add("btn-sm");
    taskActionsBtn.innerHTML = "Toggle Complete";
    taskActionsBtn.id = tasks.indexOf(task);
    taskActionsBtn.addEventListener("click", (event) => {
      onToggleBtnClick(taskActionsBtn, event);
    });
    taskActions.appendChild(taskActionsBtn);

    newRow.appendChild(taskName);
    newRow.appendChild(taskCompleted);
    newRow.appendChild(taskActions);

    tableBody.appendChild(newRow);
  });
}

function onToggleBtnClick(b, e) {
  tasks[b.id].toggleComplete();
  crateTasksList();
}
