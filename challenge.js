let input = document.querySelector(".input");
let add = document.querySelector(".add");
let div = document.querySelector(".tasks");

add.onclick = function () {
  // Get the value of the input field
  let inputValue = input.value;

  // Check if the input value is not empty
  if (inputValue.trim() !== "") {
    // Save the input value to local storage
    localStorage.setItem("input-name", inputValue);

    // Create task element
    let taskElement = document.createElement("div");
    taskElement.textContent = inputValue;

    // Create delete button
    let btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.onclick = function () {
      taskElement.remove();
      btn.remove();
    };
    // Append task element and delete button to tasks div
    div.appendChild(taskElement);
    div.appendChild(btn);
  }
};
