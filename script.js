document.addEventListener("DOMContentLoaded", function() {

    const taskInput = document.getElementById("taskInput");
    const addTask = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTask.addEventListener("click", function() {

        const taskText = taskInput.value.trim();

        if (taskText === "") {
            return;
        }

  const li = document.createElement("li");
li.textContent = taskText;

const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";

deleteButton.addEventListener("click", function() {
    li.remove();
});

li.appendChild(deleteButton);
taskList.appendChild(li);
    });

});
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!/^\d+$/.test(phone)) {
        alert("Phone number must contain digits only.");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Your form has passed validation!");
}); 