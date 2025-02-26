document.addEventListener("DOMContentLoaded", loadTasks);

const taskInput = document.getElementById("task-input");
const submitButton = document.getElementById("submit-button");
const taskList = document.getElementById("task-list");
const allTaskButton = document.getElementById("all-task-button");
const completedButton = document.getElementById("completed-button");
const pendingButton = document.getElementById("pending-button");

submitButton.addEventListener("click", addTask);
allTaskButton.addEventListener("click", () => filterTasks("all"));
completedButton.addEventListener("click", () => filterTasks("completed"));
pendingButton.addEventListener("click", () => filterTasks("pending"));

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    saveTaskToLocalStorage(task);
    renderTask(task);
    taskInput.value = ""; // Clear input field
}

function renderTask(task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.setAttribute("data-id", task.id);

    taskDiv.innerHTML = `
        <h3 class="${task.completed ? "completed-task" : ""}">${task.text}</h3>
        <button class="complete-btn" style="color:'green'"><i class="bi ${task.completed ? "bi-check-circle-fill" : "bi-check-lg"}"></i></button>
        <button class="delete-btn" style="color:'red'"><i class="bi bi-x-lg"></i></button>
    `;

    taskList.appendChild(taskDiv);

    taskDiv.querySelector(".complete-btn").addEventListener("click", () => toggleComplete(task.id));
    taskDiv.querySelector(".delete-btn").addEventListener("click", () => deleteTask(task.id));
}

function saveTaskToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.innerHTML = "";
    tasks.forEach(renderTask);
}

function toggleComplete(taskId) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}

function deleteTask(taskId) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}

function filterTasks(filter) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.innerHTML = "";

    let filteredTasks = [];
    if (filter === "all") {
        filteredTasks = tasks;
    } else if (filter === "completed") {
        filteredTasks = tasks.filter(task => task.completed);
    } else if (filter === "pending") {
        filteredTasks = tasks.filter(task => !task.completed);
    }

    filteredTasks.forEach(renderTask);
}
