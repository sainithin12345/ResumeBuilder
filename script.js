// Profile Picture Upload
document.getElementById("upload").addEventListener("change", function (event) {
    const reader = new FileReader();
    reader.onload = function () {
        document.getElementById("profile-img").src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});

// Fix Edit Function - Show Popup for Editing
function showEditPopup(element) {
    const currentText = element.innerText;
    const newText = prompt("Edit the text:", currentText);
    if (newText !== null) {
        element.innerText = newText;
    }
}

document.querySelectorAll(".edit-btn").forEach(button => {
    button.addEventListener("click", () => {
        let section = button.closest(".section").querySelector("ul, p, table");
        if (section) {
            showEditPopup(section);
        }
    });
});

// Add New Skill, Programming Language, or Certificate
function addNewItem(sectionId) {
    const newItem = prompt("Enter new item:");
    if (newItem) {
        const list = document.querySelector(`#${sectionId} ul`);
        if (list) {
            const li = document.createElement("li");
            li.innerText = newItem;
            list.appendChild(li);
        }
    }
}

document.getElementById("add-skill").addEventListener("click", () => addNewItem("skills"));
document.getElementById("add-language").addEventListener("click", () => addNewItem("programming-languages"));
document.getElementById("add-certificate").addEventListener("click", () => addNewItem("certifications"));


// Add Row in Education Table
document.getElementById("add-row").addEventListener("click", () => {
    let table = document.getElementById("education-table");
    let newRow = table.insertRow();
    for (let i = 0; i < table.rows[0].cells.length - 1; i++) {
        let cell = newRow.insertCell();
        cell.contentEditable = "true";
    }
    let deleteCell = newRow.insertCell();
    deleteCell.innerHTML = '<button class="delete-row">Delete</button>';
});

// Delete Row in Education Table
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-row")) {
        event.target.parentElement.parentElement.remove();
    }
});

// Download Resume as a File
document.getElementById("download-btn").addEventListener("click", () => {
    const resume = document.querySelector(".container").outerHTML;
    const blob = new Blob([resume], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resume.html";
    link.click();
});
