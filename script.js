// Profile Picture Upload
document.getElementById("upload").addEventListener("change", function (event) {
    const reader = new FileReader();
    reader.onload = function () {
        document.getElementById("profile-img").src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});

// Enable Editing for All Sections
document.querySelectorAll(".edit-btn").forEach(button => {
    button.addEventListener("click", () => {
        let section = button.parentElement.nextElementSibling;
        if (section) {
            section.contentEditable = "true";
            section.style.background = "#f8f9fa";
        }
    });
});

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
