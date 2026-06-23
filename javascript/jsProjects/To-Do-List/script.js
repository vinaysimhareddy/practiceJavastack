function addTask() {
    let taskInput = document.querySelector("#inputId");
    let taskValue = taskInput.value.trim();

    let li = document.createElement("li");
    li.textContent = taskValue;

    document.querySelector("#taskList").appendChild(li);
    taskInput.value = "";
}    